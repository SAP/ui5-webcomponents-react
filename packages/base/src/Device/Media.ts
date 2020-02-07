import { Logger } from '../utils/Logger';
import { EventRegistry } from './EventRegistry';
import { changeRootCSSClass, getQuery, matchLegacyBySize, windowSize } from './utils';

export enum RANGESETS {
  SAP_3STEPS = '3Step',
  SAP_4STEPS = '4Step',
  SAP_6STEPS = '6Step',
  SAP_STANDARD = 'Std',
  SAP_STANDARD_EXTENDED = 'StdExt'
}

// tslint:disable prefer-for-of variable-name one-variable-per-declaration
let support;
const defaultRangeSet = RANGESETS.SAP_STANDARD;
const querysets = {};
const mediaCurrentwidth = null;

const matchLegacy = (from, to, unit) => matchLegacyBySize(from, to, unit, windowSize());
const match = (from, to, unit) => {
  const q = getQuery(from, to, unit);
  const mm = window.matchMedia(q); // FF returns null when running within an iframe with display:none
  return mm && mm.matches;
};
const refreshCSSClasses = (sSetName, sRangeName, bRemove?) => {
  const sClassPrefix = `sapUiMedia-${sSetName}-`;
  changeRootCSSClass(sClassPrefix + sRangeName, bRemove, sClassPrefix);
};

export class Media {
  private readonly media_timeout;
  public matches;

  constructor(supportInstance) {
    support = supportInstance;
    this.media_timeout = support.matchmedialistener ? 0 : 100;
    this.matches = support.matchmedia ? match : matchLegacy;
    this.initRangeSet();
    this.initRangeSet(RANGESETS.SAP_STANDARD_EXTENDED);
  }

  public RANGESETS = RANGESETS;
  private static predefinedRangeSets = {
    [RANGESETS.SAP_3STEPS]: {
      points: [520, 960],
      unit: 'px',
      name: RANGESETS.SAP_3STEPS,
      names: ['S', 'M', 'L']
    },
    [RANGESETS.SAP_4STEPS]: {
      points: [520, 760, 960],
      unit: 'px',
      name: RANGESETS.SAP_4STEPS,
      names: ['S', 'M', 'L', 'XL']
    },
    [RANGESETS.SAP_6STEPS]: {
      points: [241, 400, 541, 768, 960],
      unit: 'px',
      name: RANGESETS.SAP_6STEPS,
      names: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    [RANGESETS.SAP_STANDARD]: {
      points: [600, 1024],
      unit: 'px',
      name: RANGESETS.SAP_STANDARD,
      names: ['Phone', 'Tablet', 'Desktop']
    },
    [RANGESETS.SAP_STANDARD_EXTENDED]: {
      points: [600, 1024, 1440],
      unit: 'px',
      name: RANGESETS.SAP_STANDARD_EXTENDED,
      names: ['Phone', 'Tablet', 'Desktop', 'LargeDesktop']
    }
  };

  private static getRangeInfo(sSetName, iRangeIdx) {
    const q = querysets[sSetName].queries[iRangeIdx];
    const info = { from: q.from, unit: querysets[sSetName].unit } as any;
    if (q.to >= 0) {
      info.to = q.to;
    }
    if (querysets[sSetName].names) {
      info.name = querysets[sSetName].names[iRangeIdx];
    }
    return info;
  }

  private checkQueries(name, infoOnly, fnMatches?) {
    fnMatches = fnMatches || this.matches;
    if (querysets[name]) {
      const aQueries = querysets[name].queries;
      let info = null;
      for (let i = 0, len = aQueries.length; i < len; i++) {
        const q = aQueries[i];
        if ((q !== querysets[name].currentquery || infoOnly) && fnMatches(q.from, q.to, querysets[name].unit)) {
          if (!infoOnly) {
            querysets[name].currentquery = q;
          }
          if (!querysets[name].noClasses && querysets[name].names && !infoOnly) {
            refreshCSSClasses(name, querysets[name].names[i]);
          }
          info = Media.getRangeInfo(name, i);
        }
      }

      return info;
    }
    Logger.warning(`No queryset with name ${name} found`, 'DEVICE.MEDIA');
    return null;
  }

  private handleChange(name) {
    if (!support.matchmedialistener && mediaCurrentwidth === windowSize()[0]) {
      return; // Skip unnecessary resize events
    }

    if (querysets[name].timer) {
      clearTimeout(querysets[name].timer);
      querysets[name].timer = null;
    }

    querysets[name].timer = setTimeout(() => {
      const mParams = this.checkQueries(name, false);
      if (mParams) {
        EventRegistry.fireEvent(`media_${name}`, mParams);
      }
    }, this.media_timeout);
  }

  public attachHandler(fnFunction, oListener, sName) {
    const name = sName || defaultRangeSet;
    EventRegistry.attachEvent(`media_${name}`, fnFunction, oListener);
  }

  public detachHandler(fnFunction, oListener, sName) {
    const name = sName || defaultRangeSet;
    EventRegistry.detachEvent(`media_${name}`, fnFunction, oListener);
  }

  public initRangeSet(sName?, aRangeBorders?, sUnit?, aRangeNames?, bSuppressClasses?) {
    let oConfig;
    if (!sName) {
      oConfig = Media.predefinedRangeSets[defaultRangeSet];
    } else if (sName && Media.predefinedRangeSets[sName]) {
      oConfig = Media.predefinedRangeSets[sName];
    } else {
      oConfig = {
        name: sName,
        unit: (sUnit || 'px').toLowerCase(),
        points: aRangeBorders || [],
        names: aRangeNames,
        noClasses: !!bSuppressClasses
      };
    }

    if (this.hasRangeSet(oConfig.name)) {
      Logger.info(`Range set ${oConfig.name} has already been initialized`, 'DEVICE.MEDIA');
      return;
    }

    sName = oConfig.name;
    oConfig.queries = [];
    oConfig.timer = null;
    oConfig.currentquery = null;
    oConfig.listener = () => this.handleChange(sName);

    let from, to, query;
    const aPoints = oConfig.points;
    for (let i = 0, len = aPoints.length; i <= len; i++) {
      from = i === 0 ? 0 : aPoints[i - 1];
      to = i === aPoints.length ? -1 : aPoints[i];
      query = getQuery(from, to, oConfig.unit);
      oConfig.queries.push({
        query,
        from,
        to
      });
    }

    if (oConfig.names && oConfig.names.length !== oConfig.queries.length) {
      oConfig.names = null;
    }

    querysets[oConfig.name] = oConfig;

    if (support.matchmedialistener) {
      // FF, Safari, Chrome, IE10?
      const queries = oConfig.queries;
      for (let i = 0; i < queries.length; i++) {
        const q = queries[i];
        q.media = window.matchMedia(q.query);
        q.media.addListener(oConfig.listener);
      }
    } else {
      // IE, Safari (<6?)
      window.addEventListener('resize', oConfig.listener, false);
      window.addEventListener('orientationchange', oConfig.listener, false);
    }

    oConfig.listener();
  }

  public getCurrentRange(sName, iWidth) {
    if (!this.hasRangeSet(sName)) {
      return null;
    }
    return this.checkQueries(
      sName,
      true,
      isNaN(iWidth) ? null : (from, to, unit) => matchLegacyBySize(from, to, unit, [iWidth, 0])
    );
  }

  public hasRangeSet(sName) {
    return sName && !!querysets[sName];
  }

  public removeRangeSet(sName) {
    if (!this.hasRangeSet(sName)) {
      Logger.info(`RangeSet ${sName} not found, thus could not be removed.`, 'DEVICE.MEDIA');
      return;
    }

    for (const x in RANGESETS) {
      if (sName === RANGESETS[x]) {
        Logger.warning('Cannot remove default rangeset - no action taken.', 'DEVICE.MEDIA');
        return;
      }
    }

    const oConfig = querysets[sName];
    if (support.matchmedialistener) {
      // FF, Safari, Chrome, IE10?
      const queries = oConfig.queries;
      for (let i = 0; i < queries.length; i++) {
        queries[i].media.removeListener(oConfig.listener);
      }
    } else {
      // IE, Safari (<6?)
      window.removeEventListener('resize', oConfig.listener, false);
      window.removeEventListener('orientationchange', oConfig.listener, false);
    }

    refreshCSSClasses(sName, '', true);
    delete EventRegistry.mEventRegistry[`media_${sName}`];
    delete querysets[sName];
  }
}

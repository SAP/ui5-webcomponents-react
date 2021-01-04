import EventProvider from '@ui5/webcomponents-base/dist/EventProvider';
import { Logger } from '@ui5/webcomponents-react-base/lib/Logger';
import { supportMatchMediaListener } from './Support';
import { changeRootCSSClass, getQuery, matchLegacyBySize } from './utils';

interface Query {
  media?: MediaQueryList;
  query: string;
  from: number;
  to: number;
}

interface RangeInfo {
  from: number;
  to: number;
  name: string;
  unit: string;
}

interface RangeSet {
  points: number[];
  unit: string;
  name: string;
  names: string[];

  noClasses?: boolean;
  queries?: Query[];
  timer?: number;
  currentquery?: Query;
  listener?: () => void;
}

export const eventProvider = new EventProvider();

// private helpers
const initializedQuerySets: Record<string, RangeSet> = {};

const refreshCSSClasses = (sSetName: string, sRangeName: string, bRemove?: boolean) => {
  const sClassPrefix = `sapUiMedia-${sSetName}-`;
  changeRootCSSClass(sClassPrefix + sRangeName, bRemove, sClassPrefix);
};

const getRangeInfo = (sSetName, iRangeIdx) => {
  const q = initializedQuerySets[sSetName].queries[iRangeIdx];
  const info = { from: q.from, unit: initializedQuerySets[sSetName].unit } as any;
  if (q.to >= 0) {
    info.to = q.to;
  }
  if (initializedQuerySets[sSetName].names) {
    info.name = initializedQuerySets[sSetName].names[iRangeIdx];
  }
  return info;
};

const matches = (from, to, unit) => {
  const q = getQuery(from, to, unit);
  const mm = window.matchMedia(q); // FF returns null when running within an iframe with display:none
  return mm && mm.matches;
};

const checkQueries = (name: string, infoOnly, fnMatches = matches): RangeInfo => {
  if (initializedQuerySets[name]) {
    const aQueries = initializedQuerySets[name].queries;
    let info = null;
    for (let i = 0, len = aQueries.length; i < len; i++) {
      const q = aQueries[i];
      if (
        (q !== initializedQuerySets[name].currentquery || infoOnly) &&
        fnMatches(q.from, q.to, initializedQuerySets[name].unit)
      ) {
        if (!infoOnly) {
          initializedQuerySets[name].currentquery = q;
        }
        if (!initializedQuerySets[name].noClasses && initializedQuerySets[name].names && !infoOnly) {
          refreshCSSClasses(name, initializedQuerySets[name].names[i]);
        }
        info = getRangeInfo(name, i);
      }
    }

    return info;
  }
  Logger.warning(`No queryset with name ${name} found`, 'DEVICE.MEDIA');
  return null;
};

const handleChange = (name: string): void => {
  if (initializedQuerySets[name].timer) {
    clearTimeout(initializedQuerySets[name].timer);
    initializedQuerySets[name].timer = null;
  }

  initializedQuerySets[name].timer = (setTimeout(
    () => {
      const mParams = checkQueries(name, false);
      if (mParams) {
        eventProvider.fireEvent(`media_${name}`, mParams);
      }
    },
    supportMatchMediaListener() ? 0 : 100
  ) as unknown) as number;
};

// public API

export enum RANGESETS {
  SAP_3STEPS = '3Step',
  SAP_4STEPS = '4Step',
  SAP_6STEPS = '6Step',
  SAP_STANDARD = 'Std',
  SAP_STANDARD_EXTENDED = 'StdExt'
}

export const DEFAULT_RANGE_SET = RANGESETS.SAP_STANDARD;

export const DEFAULT_RANGESETS: Record<string, RangeSet> = {
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

export const hasRangeSet = (sName: string): boolean => {
  return sName && !!initializedQuerySets[sName];
};

export const getCurrentRange = (rangeSetName: string, width: number): RangeInfo => {
  if (!initializedQuerySets[DEFAULT_RANGE_SET]) {
    initRangeSet();
  }
  if (!initializedQuerySets[RANGESETS.SAP_STANDARD_EXTENDED]) {
    initRangeSet(RANGESETS.SAP_STANDARD_EXTENDED);
  }

  if (!hasRangeSet(rangeSetName)) {
    return null;
  }
  return checkQueries(
    rangeSetName,
    true,
    isNaN(width) ? null : (from, to, unit) => matchLegacyBySize(from, to, unit, [width, 0])
  );
};

export const initRangeSet = (
  sName?: string,
  aRangeBorders?: number[],
  sUnit?: string,
  aRangeNames?: string[],
  bSuppressClasses?: boolean
): void => {
  let oConfig: RangeSet;
  if (!sName) {
    oConfig = DEFAULT_RANGESETS[DEFAULT_RANGE_SET];
  } else if (sName && DEFAULT_RANGESETS[sName]) {
    oConfig = DEFAULT_RANGESETS[sName];
  } else {
    oConfig = {
      name: sName,
      unit: (sUnit || 'px').toLowerCase(),
      points: aRangeBorders || [],
      names: aRangeNames,
      noClasses: !!bSuppressClasses
    };
  }

  if (hasRangeSet(oConfig.name)) {
    return;
  }

  sName = oConfig.name;
  oConfig.queries = [];
  oConfig.timer = null;
  oConfig.currentquery = null;
  oConfig.listener = () => handleChange(sName);

  const aPoints = oConfig.points;
  for (let i = 0, len = aPoints.length; i <= len; i++) {
    const from = i === 0 ? 0 : aPoints[i - 1];
    const to = i === aPoints.length ? -1 : aPoints[i];
    const query = getQuery(from, to, oConfig.unit);
    oConfig.queries.push({
      query,
      from,
      to
    });
  }

  if (oConfig.names && oConfig.names.length !== oConfig.queries.length) {
    oConfig.names = null;
  }

  initializedQuerySets[oConfig.name] = oConfig;

  const queries = oConfig.queries;
  for (const q of queries) {
    q.media = window.matchMedia(q.query);
    q.media.addListener(oConfig.listener);
  }

  oConfig.listener();
};

export const removeRangeSet = (rangeSetName: string): void => {
  if (!hasRangeSet(rangeSetName)) {
    Logger.info(`RangeSet ${rangeSetName} not found, thus could not be removed.`, 'DEVICE.MEDIA');
    return;
  }

  for (const x in RANGESETS) {
    if (rangeSetName === RANGESETS[x]) {
      Logger.warning('Cannot remove default rangeset - no action taken.', 'DEVICE.MEDIA');
      return;
    }
  }

  const oConfig = initializedQuerySets[rangeSetName];
  // FF, Safari, Chrome, IE10?
  const queries = oConfig.queries;
  for (const q of queries) {
    q.media.removeListener(oConfig.listener);
  }

  refreshCSSClasses(rangeSetName, '', true);
  // eslint-disable-next-line no-underscore-dangle
  delete eventProvider._eventRegistry[`media_${rangeSetName}`];
  delete initializedQuerySets[rangeSetName];
};

export const attachMediaHandler = (fnFunction, name: string = DEFAULT_RANGE_SET): void => {
  eventProvider.attachEvent(`media_${name}`, fnFunction);
};

export const detachMediaHandler = (fnFunction, name: string = DEFAULT_RANGE_SET): void => {
  eventProvider.detachEvent(`media_${name}`, fnFunction);
};

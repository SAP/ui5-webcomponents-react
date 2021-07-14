import { Logger } from '@ui5/webcomponents-react-base/dist/Logger';
import { EventProvider } from './EventProvider';

interface Query {
  media?: MediaQueryList;
  query: string;
  from: number;
  to: number;
}

interface RangeInfo {
  from: number;
  to: number;
  name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop';
  unit: string;
}

interface RangeSet {
  points: number[];
  unit: string;
  name: string;
  names: RangeInfo['name'][];

  queries?: Query[];
  timer?: number;
  currentquery?: Query;
  listener?: () => void;
}

// private helpers
let activeRangeSet: RangeSet;

const convertToPx = (val, unit?) => {
  if (unit === 'em' || unit === 'rem') {
    const x = window.getComputedStyle(document.documentElement).fontSize;
    const f = x && x.indexOf('px') >= 0 ? parseFloat(x) : 16;
    return val * f;
  }
  return val;
};

const matchLegacyBySize = (from, to, unit, width) => {
  from = convertToPx(from, unit);
  to = convertToPx(to, unit);

  const a = from < 0 || from <= width;
  const b = to < 0 || width <= to;
  return a && b;
};

const getQuery = (from: number, to: number, unit = 'px') => {
  let q = 'all';
  if (from > 0) {
    q = `${q} and (min-width:${from}${unit})`;
  }
  if (to > 0) {
    q = `${q} and (max-width:${to}${unit})`;
  }
  return q;
};

const getRangeInfo = (iRangeIdx: number): RangeInfo => {
  const q = activeRangeSet.queries[iRangeIdx];
  const info = { from: q.from, unit: activeRangeSet.unit } as RangeInfo;
  if (q.to >= 0) {
    info.to = q.to;
  }
  if (activeRangeSet.names) {
    info.name = activeRangeSet.names[iRangeIdx];
  }
  return info;
};

const matches = (from: number, to: number, unit: string) => {
  const q = getQuery(from, to, unit);
  const mm = window.matchMedia(q); // FF returns null when running within an iframe with display:none
  return mm && mm.matches;
};

const checkQueries = (infoOnly, matcher = matches): RangeInfo => {
  if (activeRangeSet) {
    const aQueries = activeRangeSet.queries;
    let info = null;
    for (let i = 0, len = aQueries.length; i < len; i++) {
      const q = aQueries[i];
      if ((q !== activeRangeSet.currentquery || infoOnly) && matcher(q.from, q.to, activeRangeSet.unit)) {
        if (!infoOnly) {
          activeRangeSet.currentquery = q;
        }
        info = getRangeInfo(i);
      }
    }

    return info;
  }
  Logger.warning(`RangeSet is not initialized`, 'DEVICE.MEDIA');
  return null;
};

const handleChange = (): void => {
  if (activeRangeSet.timer) {
    clearTimeout(activeRangeSet.timer);
    activeRangeSet.timer = null;
  }

  activeRangeSet.timer = window.setTimeout(() => {
    const mParams = checkQueries(false);
    if (mParams) {
      EventProvider.fireEvent(`media`, mParams);
    }
  }, 0);
};

const DEFAULT_RANGE_SET = 'StdExt';

const initRangeSet = (): void => {
  if (activeRangeSet) {
    return;
  }

  const oConfig: RangeSet = {
    points: [600, 1024, 1440],
    unit: 'px',
    name: DEFAULT_RANGE_SET,
    names: ['Phone', 'Tablet', 'Desktop', 'LargeDesktop']
  };

  oConfig.queries = [];
  oConfig.timer = null;
  oConfig.currentquery = null;
  oConfig.listener = () => handleChange();

  const rangeBorders = oConfig.points;
  for (let i = 0, len = rangeBorders.length; i <= len; i++) {
    const from = i === 0 ? 0 : rangeBorders[i - 1];
    const to = i === rangeBorders.length ? -1 : rangeBorders[i] - 1;
    const query = getQuery(from, to, oConfig.unit);
    const media = window.matchMedia(query);
    media.addEventListener('change', oConfig.listener);
    oConfig.queries.push({
      query,
      from,
      to,
      media
    });
  }

  activeRangeSet = oConfig;

  oConfig.listener();
};

// public API

export const getCurrentRange = (width?: number): RangeInfo => {
  if (!activeRangeSet) {
    initRangeSet();
  }

  return checkQueries(true, isNaN(width) ? undefined : (from, to, unit) => matchLegacyBySize(from, to, unit, width));
};

export const attachMediaHandler = (func: (rangeInfo: RangeInfo) => void): void => {
  EventProvider.attachEvent(`media`, func);
};

export const detachMediaHandler = (func: (rangeInfo: RangeInfo) => void): void => {
  EventProvider.detachEvent(`media`, func);
};

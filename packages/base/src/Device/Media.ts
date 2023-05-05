import UI5MediaRange from '@ui5/webcomponents-base/dist/MediaRange.js';
import type { RANGE_LEGACY_4_STEPS, RangeInfo } from './EventProvider.js';
import { MediaEventProvider } from './EventProvider.js';

type RANGE_4_STEPS = 'S' | 'M' | 'L' | 'XL';

const DEFAULT_RANGE_SET = UI5MediaRange.RANGESETS.RANGE_4STEPS;

const RANGE_DEFINITIONS: Record<RANGE_4_STEPS, [number, number]> = {
  S: [0, 599],
  M: [600, 1023],
  L: [1024, 1439],
  XL: [1440, -1]
};

const newRangeToLegacyRangeMap: Record<RANGE_4_STEPS, RANGE_LEGACY_4_STEPS> = {
  S: 'Phone',
  M: 'Tablet',
  L: 'Desktop',
  XL: 'LargeDesktop'
};

function getQuery(from: number, to: number) {
  let q = 'all';
  if (from > 0) {
    q = `${q} and (min-width:${from}px)`;
  }
  if (to > 0) {
    q = `${q} and (max-width:${to}px)`;
  }
  return q;
}

function resolveRangeInfo(name: RANGE_4_STEPS): RangeInfo {
  const params: RangeInfo = {
    from: RANGE_DEFINITIONS[name][0],
    name: newRangeToLegacyRangeMap[name],
    unit: 'px'
  };
  if (RANGE_DEFINITIONS[name][1] > 0) {
    params.to = RANGE_DEFINITIONS[name][1];
  }
  return params;
}

let mediaQueries: Record<RANGE_4_STEPS, MediaQueryList> | null = null;

function initMediaQueries() {
  if (typeof document !== 'undefined') {
    mediaQueries = {
      S: window.matchMedia(getQuery(...RANGE_DEFINITIONS.S)),
      M: window.matchMedia(getQuery(...RANGE_DEFINITIONS.M)),
      L: window.matchMedia(getQuery(...RANGE_DEFINITIONS.L)),
      XL: window.matchMedia(getQuery(...RANGE_DEFINITIONS.XL))
    };

    for (const mediaQueriesKey in mediaQueries) {
      const handler = (event) => {
        if (event.matches) {
          const params = resolveRangeInfo(mediaQueriesKey as RANGE_4_STEPS);
          MediaEventProvider.fireEvent(`media`, params);
        }
      };
      mediaQueries[mediaQueriesKey].addEventListener('change', handler);
    }
  }
}

// public API

export const getCurrentRange = (width?: number): RangeInfo => {
  if (typeof window === 'undefined') {
    return {
      from: 1024,
      to: 1439,
      name: 'Desktop',
      unit: 'px'
    };
  }
  // @ts-expect-error: width can only be undefined or a number, therefore `isNaN` works here
  return resolveRangeInfo(UI5MediaRange.getCurrentRange(DEFAULT_RANGE_SET, isNaN(width) ? undefined : width));
};

export const attachMediaHandler = (func: (rangeInfo: RangeInfo) => void): void => {
  if (mediaQueries === null) {
    initMediaQueries();
  }
  MediaEventProvider.attachEvent(`media`, func);
};

export const detachMediaHandler = (func: (rangeInfo: RangeInfo) => void): void => {
  MediaEventProvider.detachEvent(`media`, func);
};

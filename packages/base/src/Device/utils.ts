import { getOS, supportTouch } from '@ui5/webcomponents-base/dist/Device';
import { supportMatchMedia, supportOrientation } from './Support';

export const getWindowSize = () => {
  return [window.innerWidth, window.innerHeight];
};

export const changeRootCSSClass = (sClassName, bRemove, sPrefix?) => {
  const oRoot = document.documentElement;
  if (oRoot.className.length === 0) {
    if (!bRemove) {
      oRoot.className = sClassName;
    }
  } else {
    const aCurrentClasses = oRoot.className.split(' ');
    let sNewClasses = '';
    aCurrentClasses.forEach((currentClass) => {
      // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
      if ((sPrefix && currentClass.indexOf(sPrefix) !== 0) || (!sPrefix && currentClass !== sClassName)) {
        sNewClasses = `${sNewClasses + currentClass} `;
      }
    });
    if (!bRemove) {
      sNewClasses += sClassName;
    }
    oRoot.className = sNewClasses;
  }
};

export const getQuery = (from: number, to: number, unit = 'px') => {
  let q = 'all';
  if (from > 0) {
    q = `${q} and (min-width:${from}${unit})`;
  }
  if (to > 0) {
    q = `${q} and (max-width:${to}${unit})`;
  }
  return q;
};

export const convertToPx = (val, unit?) => {
  if (unit === 'em' || unit === 'rem') {
    const s = window.getComputedStyle ?? ((element: any) => element.currentStyle);
    const x = s(document.documentElement).fontSize;
    const f = x && x.indexOf('px') >= 0 ? parseFloat(x) : 16;
    return val * f;
  }
  return val;
};

export const matchLegacyBySize = (from, to, unit, size) => {
  from = convertToPx(from, unit);
  to = convertToPx(to, unit);

  const width = size[0];
  const a = from < 0 || from <= width;
  const b = to < 0 || width <= to;
  return a && b;
};

export const isLandscape = (bFromOrientationChange: boolean, orientation, bKeyboardOpen: boolean) => {
  if (supportTouch() && supportOrientation() && getOS().android) {
    // if on screen keyboard is open and the call of this method is from orientation change listener,
    // reverse the last value. this is because when keyboard opens on android device, the height can be less
    // than the width even in portrait mode.
    if (bKeyboardOpen && bFromOrientationChange) {
      return !orientation.landscape;
    }
    if (bKeyboardOpen) {
      // when keyboard opens, the last orientation change value will be returned.
      return orientation.landscape;
    }
  } else if (supportMatchMedia() && supportOrientation()) {
    // most desktop browsers and windows phone/tablet which not support orientationchange
    return !!window.matchMedia('(orientation: landscape)').matches;
  }
  // otherwise compare the width and height of window
  const size = getWindowSize();
  return size[0] > size[1];
};

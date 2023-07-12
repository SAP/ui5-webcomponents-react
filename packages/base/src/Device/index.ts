import { supportsTouch } from '@ui5/webcomponents-base/dist/Device.js';
import type { IOrientation, IWindowSize } from './EventProvider.js';
import { OrientationEventProvider, ResizeEventProvider } from './EventProvider.js';

const isSSR = () => typeof window === 'undefined';

const getActualWindowSize = (): [width: number, height: number] => {
  if (isSSR()) {
    return [0, 0];
  }
  return [window.innerWidth, window.innerHeight];
};

let iResizeTimeout;
let bOrientationChange = false;
let bResize = false;
let iOrientationTimeout;
let iClearFlagTimeout;
let [iWindowWidthOld, iWindowHeightOld] = getActualWindowSize();
const rInputTagRegex = /INPUT|TEXTAREA|SELECT/;

const internalWindowSize: IWindowSize = {
  height: 0,
  width: 0
};

const internalOrientation: IOrientation = {
  landscape: false,
  portrait: false
};

// PRIVATE API

const isLandscape = () => {
  return !!window.matchMedia('(orientation: landscape)').matches;
};

const setResizeInfo = () => {
  internalWindowSize.width = getActualWindowSize()[0];
  internalWindowSize.height = getActualWindowSize()[1];
};

const setOrientationInfo = () => {
  internalOrientation.landscape = isLandscape();
  internalOrientation.portrait = !internalOrientation.landscape;
};

const clearFlags = () => {
  bOrientationChange = false;
  bResize = false;
  iClearFlagTimeout = null;
};

let eventListenersInitialized = false;
const initEventListeners = () => {
  // Add handler for orientationchange and resize after initialization of Device API
  if (supportsTouch()) {
    // logic for mobile devices which support orientationchange (like ios, android)
    window.addEventListener('resize', handleMobileOrientationResizeChange, false);
    window.addEventListener('orientationchange', handleMobileOrientationResizeChange, false);
  } else {
    // desktop browsers and windows phone/tablet which not support orientationchange
    window.addEventListener('resize', handleResizeEvent, false);
  }
  setResizeInfo();
  setOrientationInfo();
  eventListenersInitialized = true;
};

// orientation change
const handleOrientationChange = () => {
  setOrientationInfo();
  OrientationEventProvider.fireEvent('orientation', {
    landscape: internalOrientation.landscape,
    portrait: internalOrientation.portrait
  });
};

const handleMobileTimeout = () => {
  // with ios split view, the browser fires only resize event and no orientationchange
  // when changing the size of a split view
  // therefore the following if needs to be adapted with additional check of iPad with version greater or equal 9
  // (splitview was introduced with iOS 9)
  if (bResize && bOrientationChange) {
    handleOrientationChange();
    handleResizeChange();
    bOrientationChange = false;
    bResize = false;
    if (iClearFlagTimeout) {
      window.clearTimeout(iClearFlagTimeout);
      iClearFlagTimeout = null;
    }
  }
  iOrientationTimeout = null;
};

const handleMobileOrientationResizeChange = (evt) => {
  if (evt.type === 'resize') {
    // @ts-expect-error: undefined is fine here
    if (rInputTagRegex.test(document.activeElement?.tagName) && !bOrientationChange) {
      return;
    }

    const [iWindowWidthNew, iWindowHeightNew] = getActualWindowSize();
    // skip multiple resize events by only one orientationchange
    if (iWindowHeightNew === iWindowHeightOld && iWindowWidthNew === iWindowWidthOld) {
      return;
    }
    bResize = true;
    // on mobile devices opening the keyboard on some devices leads to a resize event
    // in this case only the height changes, not the width
    if (iWindowHeightOld !== iWindowHeightNew && iWindowWidthOld === iWindowWidthNew) {
      handleResizeChange();
    } else {
      iWindowWidthOld = iWindowWidthNew;
    }
    iWindowHeightOld = iWindowHeightNew;

    if (iClearFlagTimeout) {
      window.clearTimeout(iClearFlagTimeout);
      iClearFlagTimeout = null;
    }
    // Some Android build-in browser fires a resize event after the viewport is applied.
    // This resize event has to be dismissed otherwise when the next orientationchange event happens,
    // a UI5 resize event will be fired with the wrong window size.
    iClearFlagTimeout = window.setTimeout(clearFlags, 1200);
  } else if (evt.type === 'orientationchange') {
    bOrientationChange = true;
  }

  if (iOrientationTimeout) {
    clearTimeout(iOrientationTimeout);
    iOrientationTimeout = null;
  }
  iOrientationTimeout = window.setTimeout(handleMobileTimeout, 50);
};

// RESIZE ONLY WITHOUT ORIENTATION CHANGE
const handleResizeChange = () => {
  setResizeInfo();
  ResizeEventProvider.fireEvent('resize', {
    height: internalWindowSize.height,
    width: internalWindowSize.width
  });
};

const handleResizeTimeout = () => {
  handleResizeChange();
  iResizeTimeout = null;
};

const handleResizeEvent = () => {
  const wasL = internalOrientation.landscape;
  const isL = isLandscape();
  if (wasL !== isL) {
    handleOrientationChange();
  }
  // throttle resize events because most browsers throw one or more resize events per pixel
  // for every resize event inside the period from 150ms (starting from the first resize event),
  // we only fire one resize event after this period
  if (!iResizeTimeout) {
    iResizeTimeout = window.setTimeout(handleResizeTimeout, 150);
  }
};

// re-export everything from the web components device
export * from '@ui5/webcomponents-base/dist/Device.js';
// export all media methods
export { attachMediaHandler, detachMediaHandler, getCurrentRange } from './Media.js';

// resize events
export const attachResizeHandler = (fnFunction: (windowSize: IWindowSize) => void): void => {
  if (!eventListenersInitialized) {
    initEventListeners();
  }
  ResizeEventProvider.attachEvent('resize', fnFunction);
};

export const detachResizeHandler = (fnFunction: (windowSize: IWindowSize) => void) => {
  ResizeEventProvider.detachEvent('resize', fnFunction);
};

// orientation change events
export const getOrientation = (): IOrientation => {
  return internalOrientation;
};

export const attachOrientationChangeHandler = (fnFunction: (orientation: IOrientation) => void): void => {
  if (!eventListenersInitialized) {
    initEventListeners();
  }
  OrientationEventProvider.attachEvent('orientation', fnFunction);
};

export const detachOrientationChangeHandler = (fnFunction: (orientation: IOrientation) => void) => {
  OrientationEventProvider.detachEvent('orientation', fnFunction);
};

import '@ui5/webcomponents-react-base/types/UI5Device.d.ts';
import { getOS, getSystem, supportTouch } from '@ui5/webcomponents-base/dist/Device';
import EventProvider from '@ui5/webcomponents-base/dist/EventProvider';
import { supportOrientation } from './Support';
import * as Utils from './utils';

const eventProvider = new EventProvider();

let iResizeTimeout;
let bOrientationChange = false;
let bResize = false;
let iOrientationTimeout;
let iClearFlagTimeout;
let [iWindowWidthOld, iWindowHeightOld] = Utils.getWindowSize();
let bKeyboardOpen = false;
let iLastResizeTime;
const rInputTagRegex = /INPUT|TEXTAREA|SELECT/;

interface IOrientation {
  landscape: boolean;
  portrait: boolean;
}

interface IWindowSize {
  height: number;
  width: number;
}

const windowSize: IWindowSize = {
  height: 0,
  width: 0
};

const orientation: IOrientation = {
  landscape: false,
  portrait: false
};

// PRIVATE API

const setResizeInfo = () => {
  windowSize.width = Utils.getWindowSize()[0];
  windowSize.height = Utils.getWindowSize()[1];
};

const setOrientationInfo = () => {
  orientation.landscape = Utils.isLandscape(true, orientation, bKeyboardOpen);
  orientation.portrait = !orientation.landscape;
};

const clearFlags = () => {
  bOrientationChange = false;
  bResize = false;
  iClearFlagTimeout = null;
};

let eventListenersInitialized = false;
const initEventListeners = () => {
  // Add handler for orientationchange and resize after initialization of Device API
  if (supportTouch() && supportOrientation()) {
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
  eventProvider.fireEvent('orientation', { landscape: orientation.landscape, portrait: orientation.portrait });
};

const handleMobileTimeout = () => {
  // with ios split view, the browser fires only resize event and no orientationchange
  // when changing the size of a split view
  // therefore the following if needs to be adapted with additional check of iPad with version greater or equal 9
  // (splitview was introduced with iOS 9)
  if (bResize && (bOrientationChange || (getSystem().tablet && getOS().ios && getOS().version >= 9))) {
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
    if (rInputTagRegex.test(document.activeElement.tagName) && !bOrientationChange) {
      return;
    }

    const [iWindowWidthNew, iWindowHeightNew] = Utils.getWindowSize();
    const iTime = new Date().getTime();
    // skip multiple resize events by only one orientationchange
    if (iWindowHeightNew === iWindowHeightOld && iWindowWidthNew === iWindowWidthOld) {
      return;
    }
    bResize = true;
    // on mobile devices opening the keyboard on some devices leads to a resize event
    // in this case only the height changes, not the width
    if (iWindowHeightOld !== iWindowHeightNew && iWindowWidthOld === iWindowWidthNew) {
      // Asus Transformer tablet fires two resize events when orientation changes while keyboard is open.
      // Between these two events, only the height changes. The check of if keyboard is open has to be skipped because
      // it may be judged as keyboard closed but the keyboard is still
      // open which will affect the orientation detection
      if (!iLastResizeTime || iTime - iLastResizeTime > 300) {
        bKeyboardOpen = iWindowHeightNew < iWindowHeightOld;
      }
      handleResizeChange();
    } else {
      iWindowWidthOld = iWindowWidthNew;
    }
    iLastResizeTime = iTime;
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
  eventProvider.fireEvent('resize', {
    height: windowSize.height,
    width: windowSize.width
  });
};

const handleResizeTimeout = () => {
  handleResizeChange();
  iResizeTimeout = null;
};

const handleResizeEvent = () => {
  const wasL = orientation.landscape;
  const isL = Utils.isLandscape(false, orientation, bKeyboardOpen);
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
export * from '@ui5/webcomponents-base/dist/Device';
// export all support methods
export * from './Support';
// resize events
export const getWindowSize = () => {
  return windowSize;
};
export const attachResizeHandler = (fnFunction: (windowSize: IWindowSize) => void): void => {
  if (!eventListenersInitialized) {
    initEventListeners();
  }
  eventProvider.attachEvent('resize', fnFunction);
};

export const detachResizeHandler = (fnFunction: (windowSize: IWindowSize) => void) => {
  eventProvider.detachEvent('resize', fnFunction);
};

// orientation change events
export const getOrientation = () => {
  return orientation;
};

export const attachOrientationChangeHandler = (fnFunction: (orientation: IOrientation) => void): void => {
  if (!eventListenersInitialized) {
    initEventListeners();
  }
  eventProvider.attachEvent('orientation', fnFunction);
};

export const detachOrientationChangeHandler = (fnFunction: (orientation: IOrientation) => void) => {
  eventProvider.detachEvent('orientation', fnFunction);
};

import '@ui5/webcomponents-react-base/types/UI5Device.d.ts';
import { getBrowser, getOS, getSystem, supportTouch } from '@ui5/webcomponents-base/dist/Device';
import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';
import { EventRegistry } from './EventRegistry';
import { MediaLegacy } from './Media';
import {
  supportInputPlaceholder,
  supportMatchMedia,
  supportMatchMediaListener,
  supportOrientation,
  supportPointerEvents,
  supportRetina,
  supportWebSocket
} from './Support';
import * as Utils from './utils';

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
  EventRegistry.fireEvent('orientation', { landscape: orientation.landscape, portrait: orientation.portrait });
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
  EventRegistry.fireEvent('resize', {
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

class DeviceBuilder {
  public get os() {
    deprecationNotice(
      'Device.os',
      `Accessing 'Device.os' is deprecated and will be removed in the next major version. 
    Please use 'getOS()' ('import { getOS } from '@ui5/webcomponents-react-base/lib/Device') instead.`
    );
    return getOS();
  }

  public get browser() {
    deprecationNotice(
      'Device.browser',
      `Accessing 'Device.browser' is deprecated and will be removed in the next major version. 
    Please use 'getBrowser()' ('import { getBrowser } from '@ui5/webcomponents-react-base/lib/Device') instead.`
    );
    return getBrowser();
  }

  public get system() {
    deprecationNotice(
      'Device.system',
      `Accessing 'Device.system' is deprecated and will be removed in the next major version. 
    Please use 'getSystem()' ('import { getSystem } from '@ui5/webcomponents-react-base/lib/Device') instead.`
    );
    return getSystem();
  }

  public support = {
    get touch() {
      deprecationNotice(
        'Device.support.touch',
        `Accessing 'Device.support.touch' is deprecated and will be removed in the next major version. 
    Please use 'supportTouch()' ('import { supportTouch } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return supportTouch();
    },
    get pointer() {
      deprecationNotice(
        'Device.support.pointer',
        `Accessing 'Device.support.pointer' is deprecated and will be removed in the next major version. 
    Please use 'supportPointerEvents()' ('import { supportPointerEvents } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return supportPointerEvents();
    },
    get matchmedia() {
      deprecationNotice(
        'Device.support.matchmedia',
        `Accessing 'Device.support.matchmedia' is deprecated and will be removed in the next major version. 
    Please use 'supportMatchMedia()' ('import { supportMatchMedia } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return supportMatchMedia();
    },
    get matchmedialistener() {
      deprecationNotice(
        'Device.support.matchmedialistener',
        `Accessing 'Device.support.matchmedialistener' is deprecated and will be removed in the next major version. 
    Please use 'supportMatchMediaListener()' ('import { supportMatchMediaListener } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return supportMatchMediaListener();
    },
    get orientation() {
      deprecationNotice(
        'Device.support.orientation',
        `Accessing 'Device.support.orientation' is deprecated and will be removed in the next major version. 
    Please use 'supportOrientation()' ('import { supportOrientation } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return supportOrientation();
    },
    get retina() {
      deprecationNotice(
        'Device.support.retina',
        `Accessing 'Device.support.retina' is deprecated and will be removed in the next major version. 
    Please use 'supportRetina()' ('import { supportRetina } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return supportRetina();
    },
    get websocket() {
      deprecationNotice(
        'Device.support.websocket',
        `Accessing 'Device.support.websocket' is deprecated and will be removed in the next major version. 
    Please use 'supportWebSocket()' ('import { supportWebSocket } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return supportWebSocket();
    },
    input: {
      get placeholder() {
        deprecationNotice(
          'Device.support.input.placeholder',
          `Accessing 'Device.support.input.placeholder' is deprecated and will be removed in the next major version. 
    Please use 'supportInputPlaceholder()' ('import { supportInputPlaceholder } from '@ui5/webcomponents-react-base/lib/Device') instead.`
        );
        return supportInputPlaceholder();
      }
    }
  };

  public get media() {
    return new MediaLegacy();
  }

  public orientation = {
    get landscape() {
      deprecationNotice(
        'Device.orientation.landscape',
        `Accessing 'Device.orientation.landscape' is deprecated and will be removed in the next major version. 
    Please use 'getOrientation().landscape' ('import { getOrientation } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return orientation.landscape;
    },
    get portrait() {
      deprecationNotice(
        'Device.orientation.portrait',
        `Accessing 'Device.orientation.portrait' is deprecated and will be removed in the next major version. 
    Please use 'getOrientation().portrait' ('import { getOrientation } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return orientation.portrait;
    },
    get attachHandler() {
      deprecationNotice(
        'Device.orientation.attachHandler',
        `Accessing 'Device.orientation.attachHandler' is deprecated and will be removed in the next major version. 
    Please use 'attachOrientationChangeHandler' ('import { attachOrientationChangeHandler } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return attachOrientationChangeHandler;
    },
    get detachHandler() {
      deprecationNotice(
        'Device.orientation.detachHandler',
        `Accessing 'Device.orientation.detachHandler' is deprecated and will be removed in the next major version. 
    Please use 'detachOrientationChangeHandler' ('import { detachOrientationChangeHandler } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return detachOrientationChangeHandler;
    }
  };
  public resize = {
    get width() {
      deprecationNotice(
        'Device.resize.width',
        `Accessing 'Device.resize.width' is deprecated and will be removed in the next major version. 
    Please use 'getWindowSize().width' ('import { getWindowSize } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return windowSize.width;
    },
    get portrait() {
      deprecationNotice(
        'Device.resize.height',
        `Accessing 'Device.resize.height' is deprecated and will be removed in the next major version. 
    Please use 'getWindowSize().height' ('import { getWindowSize } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return windowSize.height;
    },
    get setResizeInfo() {
      deprecationNotice(
        'Device.resize.setResizeInfo',
        `Accessing 'Device.resize.setResizeInfo' is deprecated and will be removed in the next major version. 
        There will be no replacement as this was a private API.`
      );
      return setResizeInfo;
    },
    get attachHandler() {
      deprecationNotice(
        'Device.resize.attachHandler',
        `Accessing 'Device.resize.attachHandler' is deprecated and will be removed in the next major version. 
    Please use 'attachResizeHandler' ('import { attachResizeHandler } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return attachResizeHandler;
    },
    get detachHandler() {
      deprecationNotice(
        'Device.resize.detachHandler',
        `Accessing 'Device.resize.detachHandler' is deprecated and will be removed in the next major version. 
    Please use 'detachResizeHandler' ('import { detachResizeHandler } from '@ui5/webcomponents-react-base/lib/Device') instead.`
      );
      return detachResizeHandler;
    }
  };

  constructor() {
    if (!eventListenersInitialized) {
      initEventListeners();
    }
  }

  // LEGACY API
  private setOrientationInfo = setOrientationInfo;
  private isLandscape = (bFromOrientationChange) =>
    Utils.isLandscape(bFromOrientationChange, orientation, bKeyboardOpen);

  // orientation
  private handleOrientationChange = handleOrientationChange;
  private handleMobileTimeout = handleMobileTimeout;
  private handleMobileOrientationResizeChange = handleMobileOrientationResizeChange;

  // resize
  private handleResizeEvent = handleResizeEvent;
  private handleResizeChange = handleResizeChange;
  private handleResizeTimeout = handleResizeTimeout;
}

export const Device = new DeviceBuilder();

// re-export everything from the web components device
export * from '@ui5/webcomponents-base/dist/Device';
// export all support methods
export * from './Support';
// resize events
export const getWindowSize = () => {
  return windowSize;
};
export const attachResizeHandler = (fnFunction: (windowSize: IWindowSize) => void, oListener?: unknown): void => {
  if (!eventListenersInitialized) {
    initEventListeners();
  }
  EventRegistry.attachEvent('resize', fnFunction, oListener);
};

export const detachResizeHandler = (fnFunction: (windowSize: IWindowSize) => void, oListener?: unknown) => {
  EventRegistry.detachEvent('resize', fnFunction, oListener);
};

// orientation change events
export const getOrientation = () => {
  return orientation;
};

export const attachOrientationChangeHandler = (
  fnFunction: (orientation: IOrientation) => void,
  oListener?: unknown
): void => {
  if (!eventListenersInitialized) {
    initEventListeners();
  }
  EventRegistry.attachEvent('orientation', fnFunction, oListener);
};

export const detachOrientationChangeHandler = (
  fnFunction: (orientation: IOrientation) => void,
  oListener?: unknown
) => {
  EventRegistry.detachEvent('orientation', fnFunction, oListener);
};

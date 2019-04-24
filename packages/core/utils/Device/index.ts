import { Support } from './Support';
import { OS } from './OS';
import { Browser } from './Browser';
import { System } from './System';
import { Media } from './Media';
import { Orientation } from './Orientation';
import { Resize } from './Resize';
import { windowSize } from './utils';
import { EventRegistry } from './EventRegistry';

let iResizeTimeout;
let bOrientationChange = false;
let bResize = false;
let iOrientationTimeout;
let iClearFlagTimeout;
let iWindowHeightOld = windowSize()[1];
let iWindowWidthOld = windowSize()[0];
let bKeyboardOpen = false;
let iLastResizeTime;
const rInputTagRegex = /INPUT|TEXTAREA|SELECT/;
let bSkipFirstResize;

class DeviceBuilder {
  public os = new OS();
  public browser = new Browser();
  public support = new Support(this.browser);
  public system = new System(this.os, this.browser, this.support);
  public media = new Media(this.support);
  public orientation = new Orientation();
  public resize = new Resize();

  constructor() {
    // On iPhone with iOS version 7.0.x and on iPad with iOS version 7.x
    // (tested with all versions below 7.1.1), there's an invalid resize event fired
    // when changing the orientation while keyboard is shown.
    bSkipFirstResize =
      this.os.ios &&
      this.browser.name === 'sf' &&
      ((this.system.phone && this.os.version >= 7 && this.os.version < 7.1) ||
        (this.system.tablet && this.os.version >= 7));

    // Add handler for orientationchange and resize after initialization of Device API
    if (this.support.touch && this.support.orientation) {
      // logic for mobile devices which support orientationchange (like ios, android)
      window.addEventListener('resize', this.handleMobileOrientationResizeChange, false);
      window.addEventListener('orientationchange', this.handleMobileOrientationResizeChange, false);
    } else {
      // desktop browsers and windows phone/tablet which not support orientationchange
      window.addEventListener('resize', this.handleResizeEvent, false);
    }
    this.setOrientationInfo();
  }

  private handleResizeEvent = () => {
    const wasL = this.orientation.landscape;
    const isL = this.isLandscape(false);
    if (wasL !== isL) {
      this.handleOrientationChange();
    }
    // throttle resize events because most browsers throw one or more resize events per pixel
    // for every resize event inside the period from 150ms (starting from the first resize event),
    // we only fire one resize event after this period
    if (!iResizeTimeout) {
      iResizeTimeout = window.setTimeout(this.handleResizeTimeout, 150);
    }
  };

  private handleResizeTimeout = () => {
    this.handleResizeChange();
    iResizeTimeout = null;
  };

  private handleResizeChange = () => {
    this.resize.setResizeInfo();
    EventRegistry.fireEvent('resize', {
      height: this.resize.height,
      width: this.resize.width
    });
  };

  private setOrientationInfo = () => {
    this.orientation.landscape = this.isLandscape(true);
    this.orientation.portrait = !this.orientation.landscape;
  };

  private handleOrientationChange = () => {
    this.setOrientationInfo();
    EventRegistry.fireEvent('orientation', { landscape: this.orientation.landscape });
  };

  private isLandscape = (bFromOrientationChange) => {
    if (this.support.touch && this.support.orientation && this.os.android) {
      // if on screen keyboard is open and the call of this method is from orientation change listener,
      // reverse the last value. this is because when keyboard opens on android device, the height can be less
      // than the width even in portrait mode.
      if (bKeyboardOpen && bFromOrientationChange) {
        return !this.orientation.landscape;
      }
      if (bKeyboardOpen) {
        // when keyboard opens, the last orientation change value will be returned.
        return this.orientation.landscape;
      }
    } else if (this.support.matchmedia && this.support.orientation) {
      // most desktop browsers and windows phone/tablet which not support orientationchange
      return !!window.matchMedia('(orientation: landscape)').matches;
    }
    // otherwise compare the width and height of window
    const size = windowSize();
    return size[0] > size[1];
  };

  private handleMobileOrientationResizeChange = (evt) => {
    if (evt.type === 'resize') {
      if (bSkipFirstResize && rInputTagRegex.test(document.activeElement.tagName) && !bOrientationChange) {
        return;
      }

      const iWindowHeightNew = windowSize()[1];
      const iWindowWidthNew = windowSize()[0];
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
        this.handleResizeChange();
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
      iClearFlagTimeout = window.setTimeout(DeviceBuilder.clearFlags, 1200);
    } else if (evt.type === 'orientationchange') {
      bOrientationChange = true;
    }

    if (iOrientationTimeout) {
      clearTimeout(iOrientationTimeout);
      iOrientationTimeout = null;
    }
    iOrientationTimeout = window.setTimeout(this.handleMobileTimeout, 50);
  };

  private handleMobileTimeout = () => {
    // with ios split view, the browser fires only resize event and no orientationchange
    // when changing the size of a split view
    // therefore the following if needs to be adapted with additional check of iPad with version greater or equal 9
    // (splitview was introduced with iOS 9)
    if (bResize && (bOrientationChange || (this.system.tablet && this.os.ios && this.os.version >= 9))) {
      this.handleOrientationChange();
      this.handleResizeChange();
      bOrientationChange = false;
      bResize = false;
      if (iClearFlagTimeout) {
        window.clearTimeout(iClearFlagTimeout);
        iClearFlagTimeout = null;
      }
    }
    iOrientationTimeout = null;
  };

  private static clearFlags = () => {
    bOrientationChange = false;
    bResize = false;
    iClearFlagTimeout = null;
  };
}

export const Device = new DeviceBuilder();

import { changeRootCSSClass } from './utils';

export enum SYSTEMTYPE {
  TABLET = 'tablet',
  PHONE = 'phone',
  DESKTOP = 'desktop',
  COMBI = 'combi'
}

let os;
let browser;
let support;
export class System {
  public SYSTEMTYPE = SYSTEMTYPE;
  public tablet: boolean;
  public phone: boolean;
  public desktop: boolean;
  public combi: boolean;

  constructor(osInstance, browserInstance, supportInstance) {
    os = osInstance;
    browser = browserInstance;
    support = supportInstance;
    this.setSystem();
    return this;
  }
  private getSystem(customUA) {
    const t = this.isTablet(customUA);
    const isWin8Upwards = os.windows && os.version >= 8;
    const isWin7 = os.windows && os.version === 7;

    this.tablet = !!(((support.touch && !isWin7) || isWin8Upwards) && t);
    this.phone = !!(os.windows_phone || (support.touch && !isWin7 && !t));
    this.desktop = !!((!this.tablet && !this.phone) || isWin8Upwards || isWin7);
    this.combi = !!(this.desktop && this.tablet);

    Object.values(SYSTEMTYPE).forEach((type) => {
      changeRootCSSClass(`sap-${type}`, !this[type]);
    });
  }

  private isTablet(customUA) {
    const ua = customUA || navigator.userAgent;
    const isWin8Upwards = os.windows && os.version >= 8;
    if (os.name === os.OS.IOS) {
      return /ipad/i.test(ua);
    }
    // in real mobile device
    if (support.touch) {
      if (isWin8Upwards) {
        return true;
      }

      if (browser.chrome && os.android && os.version >= 4.4) {
        // From Android version 4.4, WebView also uses Chrome as Kernel.
        // We can use the user agent pattern defined in Chrome to do phone/tablet detection
        // According to the information here:
        // https://developer.chrome.com/multidevice/user-agent#chrome_for_android_user_agent,
        // the existence of "Mobile" indicates it's a phone. But because the crosswalk framework which is used in
        // Fiori Client inserts another "Mobile" to the user agent for both tablet and phone, we need to check whether
        // "Mobile Safari/<Webkit Rev>" exists.
        return !/Mobile Safari\/[.0-9]+/.test(ua);
      }
      // may be undefined in Windows Phone devices
      let densityFactor = window.devicePixelRatio ? window.devicePixelRatio : 1;
      // On Android sometimes window.screen.width returns the logical CSS pixels, sometimes the physical device pixels;
      // Tests on multiple devices suggest this depends on the Webkit version.
      // The Webkit patch which changed the behavior was done here: https://bugs.webkit.org/show_bug.cgi?id=106460
      // Chrome 27 with Webkit 537.36 returns the logical pixels,
      // Chrome 18 with Webkit 535.19 returns the physical pixels.
      // The BlackBerry 10 browser with Webkit 537.10+ returns the physical pixels.
      // So it appears like somewhere above Webkit 537.10 we do not hve to divide by the devicePixelRatio anymore.
      if (os.android && browser.webkit && parseFloat(browser.webkitVersion) > 537.1) {
        densityFactor = 1;
      }

      // this is how android distinguishes between tablet and phone
      // http://android-developers.blogspot.de/2011/07/new-tools-for-managing-screen-sizes.html
      let bTablet = Math.min(window.screen.width / densityFactor, window.screen.height / densityFactor) >= 600;

      // special workaround for Nexus 7 where the window.screen.width is 600px or 601px in portrait mode (=> tablet)
      // but window.screen.height 552px in landscape mode (=> phone), because the browser UI takes some space on top.
      // So the detected device type depends on the orientation :-(
      // actually this is a Chrome bug, as "width"/"height" should return the entire screen's dimensions and
      // "availWidth"/"availHeight" should return the size available after subtracting the browser UI
      if (
        // isLandscape() &&
        (window.screen.height === 552 || window.screen.height === 553) && // old/new Nexus 7
        /Nexus 7/i.test(ua)
      ) {
        bTablet = true;
      }

      return bTablet;
    }
    // This simple android phone detection can be used here because this is the mobile emulation mode in desktop browser
    const androidPhone = /(?=android)(?=.*mobile)/i.test(ua);
    // in desktop browser, it's detected as tablet when
    // 1. Windows 8 device with a touch screen where "Touch" is contained in the userAgent
    // 2. Android emulation and it's not an Android phone
    return (browser.msie && ua.indexOf('Touch') !== -1) || (os.android && !androidPhone);
  }

  public setSystem(customUA?) {
    this.getSystem(customUA);
    if (this.tablet || this.phone) {
      browser.mobile = true;
    }
  }
}

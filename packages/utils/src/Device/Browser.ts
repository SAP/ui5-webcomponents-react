// tslint:disable variable-name

export enum BROWSER {
  INTERNET_EXPLORER = 'ie',
  EDGE = 'ed',
  FIREFOX = 'ff',
  CHROME = 'cr',
  SAFARI = 'sf',
  ANDROID = 'an'
}

interface BrowserTypes {
  browser: string;
  version: string;
  mozilla?: boolean;
  webkit?: boolean;
  msie?: boolean;
  trident?: boolean;
  edge?: boolean;
}

export class Browser {
  public BROWSER = BROWSER;
  public mobile?: boolean;
  public name: string;
  public versionStr: string;
  public version: number;
  public webkit?: boolean;
  public webkitVersion?: string;

  public mozilla?: boolean;
  public msie?: boolean;
  public edge?: boolean;
  public fullscreen?: boolean;
  public safari?: boolean;
  public webview?: boolean;
  public phantomJS?: boolean;
  public firefox?: boolean;
  public chrome?: boolean;
  public android?: boolean;

  constructor() {
    this.setBrowser();
  }

  private static calcBrowser(customUa): BrowserTypes {
    const ua = navigator.userAgent;
    const _ua = (customUa || ua).toLowerCase(); // use custom user-agent if given

    const rwebkit = /(webkit)[ \/]([\w.]+)/;
    const ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
    const rmsie = /(msie) ([\w.]+)/;
    const rmsie11 = /(trident)\/[\w.]+;.*rv:([\w.]+)/;
    const redge = /(edge)[ \/]([\w.]+)/;
    const rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

    // WinPhone IE11 and MS Edge userAgents contain "WebKit" and "Mozilla" and therefore must be checked first
    const browserMatch =
      redge.exec(_ua) ||
      rmsie11.exec(_ua) ||
      rwebkit.exec(_ua) ||
      ropera.exec(_ua) ||
      rmsie.exec(_ua) ||
      (_ua.indexOf('compatible') < 0 && rmozilla.exec(_ua)) ||
      [];

    const res = {
      browser: browserMatch[1] || '',
      version: browserMatch[2] || '0'
    };
    res[res.browser] = true;
    return res;
  }

  private getBrowser(customUa?, customNav?) {
    const ua = navigator.userAgent;
    const b = Browser.calcBrowser(customUa);
    const _ua = customUa || ua;
    const _navigator = customNav || window.navigator;

    // jQuery checks for user agent strings. We differentiate between browsers
    let oExpMobile;
    if (b.mozilla) {
      oExpMobile = /Mobile/;
      if (_ua.match(/Firefox\/(\d+\.\d+)/)) {
        const version = parseFloat(RegExp.$1);
        this.name = BROWSER.FIREFOX;
        this.versionStr = `${version}`;
        this.version = version;
        this.mozilla = true;
        this.mobile = oExpMobile.test(_ua);
        return this;
      }
      // unknown mozilla browser
      this.mobile = oExpMobile.test(_ua);
      this.mozilla = true;
      this.version = -1;
    }
    if (b.webkit) {
      // webkit version is needed for calculation if the mobile android device is a tablet
      const regExpWebkitVersion = _ua.toLowerCase().match(/webkit[\/]([\d.]+)/);
      let webkitVersion;
      if (regExpWebkitVersion) {
        webkitVersion = regExpWebkitVersion[1];
      }
      oExpMobile = /Mobile/;
      if (_ua.match(/(Chrome|CriOS)\/(\d+\.\d+).\d+/)) {
        const version = parseFloat(RegExp.$2);
        this.name = BROWSER.CHROME;
        this.versionStr = `${version}`;
        this.version = version;
        this.mobile = oExpMobile.test(_ua);
        this.webkit = true;
        this.webkitVersion = webkitVersion;
        return this;
      }

      if (_ua.match(/FxiOS\/(\d+\.\d+)/)) {
        const version = parseFloat(RegExp.$1);
        this.name = BROWSER.FIREFOX;
        this.versionStr = `${version}`;
        this.version = version;
        this.mobile = true;
        this.webkit = true;
        this.webkitVersion = webkitVersion;
        return this;
      }

      if (_ua.match(/Android .+ Version\/(\d+\.\d+)/)) {
        const version = parseFloat(RegExp.$1);
        this.name = BROWSER.ANDROID;
        this.versionStr = `${version}`;
        this.version = version;
        this.mobile = oExpMobile.test(_ua);
        this.webkit = true;
        this.webkitVersion = webkitVersion;
        return this;
      }
      // Safari might have an issue with _ua.match(...); thus changing
      const oExp = /(Version|PhantomJS)\/(\d+\.\d+).*Safari/;
      const bStandalone = _navigator.standalone;
      if (oExp.test(_ua)) {
        const aParts = oExp.exec(_ua);
        const version = parseFloat(aParts[2]);
        this.name = BROWSER.SAFARI;
        this.versionStr = `${version}`;
        this.fullscreen = false;
        this.webview = false;
        this.version = version;
        this.mobile = oExpMobile.test(_ua);
        this.webkit = true;
        this.webkitVersion = webkitVersion;
        this.phantomJS = aParts[1] === 'PhantomJS';
        return this;
      }

      if (
        /iPhone|iPad|iPod/.test(_ua) &&
        !/CriOS/.test(_ua) &&
        !/FxiOS/.test(_ua) &&
        (bStandalone === true || bStandalone === false)
      ) {
        // WebView or Standalone mode on iOS
        this.name = BROWSER.SAFARI;
        this.version = -1;
        this.fullscreen = bStandalone;
        this.webview = bStandalone;
        this.mobile = oExpMobile.test(_ua);
        this.webkit = true;
        this.webkitVersion = webkitVersion;
        return this;
      }
      // other webkit based browser
      this.mobile = oExpMobile.test(_ua);
      this.webkit = true;
      this.webkitVersion = webkitVersion;
      this.version = -1;
      return this;
    }

    if (b.msie || b.trident) {
      let version;
      // recognize IE8 when running in compat mode (only then the documentMode property is there)
      if ((document as any).documentMode && !customUa) {
        // only use the actual documentMode when no custom user-agent was given
        if ((document as any).documentMode === 7) {
          // OK, obviously we are IE and seem to be 7... but as documentMode is there this cannot be IE7!
          version = 8.0;
        } else {
          version = parseFloat((document as any).documentMode);
        }
      } else {
        version = parseFloat(b.version);
      }
      this.name = BROWSER.INTERNET_EXPLORER;
      this.versionStr = `${version}`;
      this.version = version;
      this.msie = true;
      this.mobile = false;
      return this;
    }

    if (b.edge) {
      const version = parseFloat(b.version);
      this.name = BROWSER.EDGE;
      this.versionStr = `${version}`;
      this.version = version;
      this.edge = true;
      return this;
    }

    this.name = '';
    this.versionStr = '';
    this.version = -1;
    this.mobile = false;
    return this;
  }

  public setBrowser() {
    this.getBrowser();

    if (this.name) {
      for (const b in BROWSER) {
        if (BROWSER[b] === this.name) {
          this[b.toLowerCase()] = true;
        }
      }
    }
  }
}

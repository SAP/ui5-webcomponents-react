interface OS {
  name?: string;
  versionStr?: string;
  version: number;
  windows?: boolean;
  macintosh?: boolean;
  ios?: boolean;
  android?: boolean;
  OS: {
    WINDOWS: 'win';
    MACINTOSH: 'mac';
    IOS: 'iOS';
    ANDROID: 'Android';
  };
}

interface Browser {
  name: string;
  versionStr?: string;
  version: number;
  mobile?: boolean;
  msie?: boolean;
  edge?: boolean;
  firefox?: boolean;
  chrome?: boolean;
  safari?: boolean;
  webkit?: boolean;
  fullscreen?: boolean;
  webview?: boolean;
  phantomJS?: boolean;
  webkitVersion?: string;
  mozilla?: boolean;
  BROWSER: {
    INTERNET_EXPLORER: 'ie';
    EDGE: 'ed';
    FIREFOX: 'ff';
    CHROME: 'cr';
    SAFARI: 'sf';
    ANDROID: 'an';
  };
}

interface System {
  phone: boolean;
  tablet: boolean;
  desktop: boolean;
  combi: boolean;
  SYSTEMTYPE: {
    TABLET: 'tablet';
    PHONE: 'phone';
    DESKTOP: 'desktop';
    COMBI: 'combi';
  };
}

declare module '@ui5/webcomponents-base/dist/Device' {
  export function isIE(): boolean;

  export function isEdge(): boolean;

  export function isChrome(): boolean;

  export function isFF(): boolean;

  export function isSafari(): boolean;

  export function isMobile(): boolean;

  export function isDesktop(): boolean;

  export function isTablet(): boolean;

  export function isPhone(): boolean;

  export function isAndroid(): boolean;

  export function getOS(): OS;

  export function getSystem(): System;

  export function getBrowser(): Browser;

  export function supportTouch(): boolean;
}

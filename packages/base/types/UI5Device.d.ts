declare module '@ui5/webcomponents-base/dist/Device.js' {
  export function isIE(): boolean;

  export function isSafari(): boolean;

  export function isDesktop(): boolean;

  export function isTablet(): boolean;

  export function isPhone(): boolean;

  export function supportsTouch(): boolean;
}

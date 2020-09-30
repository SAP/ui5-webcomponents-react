import { supportTouch } from '@ui5/webcomponents-base/dist/Device';

const testIfBrowserSupportsPlaceholders = () => {
  return 'placeholder' in document.createElement('input') && 'placeholder' in document.createElement('textarea');
};

const testIfBrowserSupportsWebSockets = () => {
  let isSupported = false;
  try {
    isSupported = 'WebSocket' in window && window.WebSocket.CLOSING === 2;
  } catch (e) {}
  return isSupported;
};

export class Support {
  public touch: boolean = supportTouch();
  // prettier-ignore
  public pointer: boolean = ('onpointerdown' in window);
  // prettier-ignore
  public matchmedia = ('matchMedia' in window);
  public matchmedialistener = !!(this.matchmedia && window.matchMedia('all and (max-width:0px)'));
  // prettier-ignore
  public orientation = ('DeviceOrientationEvent' in window);
  public retina: boolean = (window as any).retina || window.devicePixelRatio >= 2;
  public websocket: boolean = testIfBrowserSupportsWebSockets();
  public input = {
    placeholder: testIfBrowserSupportsPlaceholders()
  };
}

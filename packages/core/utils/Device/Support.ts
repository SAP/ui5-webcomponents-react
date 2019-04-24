import './lib/modernizr';

export class Support {
  public touch: boolean;
  public pointer: boolean;
  public matchmedia: boolean;
  public matchmedialistener: boolean;
  public orientation: boolean;
  public retina: boolean;
  public websocket: boolean;
  public input = {
    placeholder: false
  };

  constructor(browser) {
    this.touch = Modernizr.touchevents;
    this.pointer = Modernizr.pointerevents;
    this.matchmedia = Modernizr.matchmedia;
    let matchmedialistener = !!(this.matchmedia && window.matchMedia('all and (max-width:0px)'));
    if (browser.safari && browser.version < 6 && !browser.fullscreen && !browser.webview) {
      // Safari seems to have addListener but no events are fired ?!
      matchmedialistener = false;
    }
    this.matchmedialistener = matchmedialistener;
    this.orientation = Modernizr.deviceorientation;
    this.retina = (window as any).retina || window.devicePixelRatio >= 2;
    this.websocket = Modernizr.websockets;
    this.input.placeholder = Modernizr.placeholder;

    return this;
  }
}

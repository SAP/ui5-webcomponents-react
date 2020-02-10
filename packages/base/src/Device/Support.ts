import { supportTouch } from '@ui5/webcomponents-core/dist/sap/ui/Device';
import '@ui5/webcomponents-react-base/third-party/modernizr';

declare const Modernizr: {
  pointerevents: boolean;
  matchmedia: boolean;
  deviceorientation: boolean;
  websockets: boolean;
  placeholder: boolean;
};

export class Support {
  public touch: boolean = supportTouch();
  public pointer: boolean = Modernizr.pointerevents;
  public matchmedia: boolean = Modernizr.matchmedia;
  public matchmedialistener = !!(this.matchmedia && window.matchMedia('all and (max-width:0px)'));
  public orientation: boolean = Modernizr.deviceorientation;
  public retina: boolean = (window as any).retina || window.devicePixelRatio >= 2;
  public websocket: boolean = Modernizr.websockets;
  public input = {
    placeholder: Modernizr.placeholder
  };
}

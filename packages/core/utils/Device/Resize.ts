import { EventRegistry } from './EventRegistry';
import { windowSize } from './utils';

export class Resize {
  public width: number;
  public height: number;

  constructor() {
    this.setResizeInfo();
  }

  public attachHandler(fnFunction, oListener) {
    EventRegistry.attachEvent('resize', fnFunction, oListener);
  }

  public detachHandler(fnFunction, oListener) {
    EventRegistry.detachEvent('resize', fnFunction, oListener);
  }

  public setResizeInfo() {
    this.width = windowSize()[0];
    this.height = windowSize()[1];
  }
}

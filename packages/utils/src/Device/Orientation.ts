import { EventRegistry } from './EventRegistry';

export class Orientation {
  public landscape: boolean;
  public portrait: boolean;

  public attachHandler(fnFunction, oListener) {
    EventRegistry.attachEvent('orientation', fnFunction, oListener);
  }

  public detachHandler(fnFunction, oListener) {
    EventRegistry.detachEvent('orientation', fnFunction, oListener);
  }
}

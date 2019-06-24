export class EventRegistry {
  public static mEventRegistry = {};

  public static attachEvent(sEventId, fnFunction, oListener?) {
    if (!EventRegistry.mEventRegistry[sEventId]) {
      EventRegistry.mEventRegistry[sEventId] = [];
    }
    EventRegistry.mEventRegistry[sEventId].push({
      oListener,
      fFunction: fnFunction
    });
  }

  public static detachEvent(sEventId, fnFunction, oListener?) {
    const aEventListeners = EventRegistry.mEventRegistry[sEventId];

    if (!aEventListeners) {
      return;
    }

    for (let i = 0, iL = aEventListeners.length; i < iL; i++) {
      if (aEventListeners[i].fFunction === fnFunction && aEventListeners[i].oListener === oListener) {
        aEventListeners.splice(i, 1);
        break;
      }
    }
    if (aEventListeners.length === 0) {
      delete EventRegistry.mEventRegistry[sEventId];
    }
  }

  public static fireEvent(sEventId, mParameters?) {
    let aEventListeners = EventRegistry.mEventRegistry[sEventId];
    let oInfo;
    if (aEventListeners) {
      aEventListeners = aEventListeners.slice();
      for (let i = 0, iL = aEventListeners.length; i < iL; i++) {
        oInfo = aEventListeners[i];
        oInfo.fFunction.call(oInfo.oListener || window, mParameters);
      }
    }
  }
}

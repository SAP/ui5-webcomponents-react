const STORE_SYMBOL_LISTENERS = Symbol.for('@ui5/webcomponents-react/StyleStore/Listeners');
const STORE_SYMBOL = Symbol.for('@ui5/webcomponents-react/StyleStore');

interface IStyleStore {
  staticCssInjected: boolean;
  componentsMap: Map<string, number>;
}

const initialStore: IStyleStore = {
  staticCssInjected: false,
  componentsMap: new Map<string, number>()
};

function getListeners(): Array<() => void> {
  globalThis[STORE_SYMBOL_LISTENERS] ??= [];
  return globalThis[STORE_SYMBOL_LISTENERS];
}

function emitChange() {
  for (const listener of getListeners()) {
    listener();
  }
}

function getSnapshot(): IStyleStore {
  globalThis[STORE_SYMBOL] ??= initialStore;
  return globalThis[STORE_SYMBOL];
}

function subscribe(listener: () => void) {
  const listeners = getListeners();
  globalThis[STORE_SYMBOL_LISTENERS] = [...listeners, listener];
  return () => {
    globalThis[STORE_SYMBOL_LISTENERS] = listeners.filter((l) => l !== listener);
  };
}

export const StyleStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot: () => {
    return initialStore;
  },
  setStaticCssInjected: (staticCssInjected: boolean) => {
    const curr = getSnapshot();
    globalThis[STORE_SYMBOL] = {
      ...curr,
      staticCssInjected
    };
    emitChange();
  },
  mountComponent: (componentName: string) => {
    const { componentsMap } = getSnapshot();
    if (componentsMap.has(componentName)) {
      componentsMap.set(componentName, componentsMap.get(componentName)! + 1);
    } else {
      componentsMap.set(componentName, 1);
    }
    emitChange();
  },
  unmountComponent: (componentName: string) => {
    const { componentsMap } = getSnapshot();
    if (componentsMap.has(componentName)) {
      componentsMap.set(componentName, componentsMap.get(componentName)! - 1);
    }
    emitChange();
  }
};

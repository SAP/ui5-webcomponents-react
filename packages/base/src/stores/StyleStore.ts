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

function getStyleStore(): IStyleStore {
  globalThis[STORE_SYMBOL] ??= initialStore;
  return globalThis[STORE_SYMBOL];
}

export const StyleStore = {
  subscribe: (listener: () => void) => {
    let listeners = getListeners();
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot: getStyleStore,
  setStaticCssInjected: (injected: boolean) => {
    getStyleStore().staticCssInjected = injected;
    emitChange();
  },
  mountComponent: (componentName: string) => {
    const { componentsMap } = getStyleStore();
    if (componentsMap.has(componentName)) {
      componentsMap.set(componentName, componentsMap.get(componentName)! + 1);
    } else {
      componentsMap.set(componentName, 1);
    }
    emitChange();
  },
  unmountComponent: (componentName: string) => {
    const { componentsMap } = getStyleStore();
    if (componentsMap.has(componentName)) {
      componentsMap.set(componentName, componentsMap.get(componentName)! - 1);
    }
    emitChange();
  }
};

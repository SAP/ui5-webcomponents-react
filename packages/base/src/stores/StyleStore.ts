import { getCurrentRuntimeIndex } from '@ui5/webcomponents-base/dist/Runtimes.js';

globalThis['@ui5/webcomponents-react'] ??= {};
const STORE_LOCATION = globalThis['@ui5/webcomponents-react'];

function getStyleStoreListenersSymbol() {
  return Symbol.for(`@ui5/webcomponents-react/StyleStore-${getCurrentRuntimeIndex()}/Listeners`);
}

function getStyleStoreSymbol() {
  return Symbol.for(`@ui5/webcomponents-react/StyleStore-${getCurrentRuntimeIndex()}`);
}

interface IStyleStore {
  staticCssInjected: boolean;
  componentsMap: Map<string, number>;
}

const initialStore: IStyleStore = {
  staticCssInjected: false,
  componentsMap: new Map<string, number>()
};

function getListeners(): Array<() => void> {
  STORE_LOCATION[getStyleStoreListenersSymbol()] ??= [];
  return STORE_LOCATION[getStyleStoreListenersSymbol()];
}

function emitChange() {
  for (const listener of getListeners()) {
    listener();
  }
}

function getSnapshot(): IStyleStore {
  STORE_LOCATION[getStyleStoreSymbol()] ??= initialStore;
  return STORE_LOCATION[getStyleStoreSymbol()];
}

function subscribe(listener: () => void) {
  const listeners = getListeners();
  STORE_LOCATION[getStyleStoreListenersSymbol()] = [...listeners, listener];
  return () => {
    STORE_LOCATION[getStyleStoreListenersSymbol()] = listeners.filter((l) => l !== listener);
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
    STORE_LOCATION[getStyleStoreSymbol()] = {
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

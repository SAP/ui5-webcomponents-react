import { getCurrentRuntimeIndex } from '@ui5/webcomponents-base/dist/Runtimes.js';
import type { ComponentType, RefCallback, RefObject } from 'react';

globalThis['@ui5/webcomponents-react'] ??= {};
const STORE_LOCATION = globalThis['@ui5/webcomponents-react'];

function getStyleStoreListenersSymbol() {
  return Symbol.for(`@ui5/webcomponents-react/Modals-${getCurrentRuntimeIndex()}/Listeners`);
}

function getStyleStoreSymbol() {
  return Symbol.for(`@ui5/webcomponents-react/Modals-${getCurrentRuntimeIndex()}`);
}

type IModal = {
  Component: ComponentType;
  props: Record<string, unknown>;
  ref: RefObject<unknown> | RefCallback<unknown>;
  container?: Element | DocumentFragment;
  id: string;
};

const initialStore: IModal[] = [];

function getListeners(): Array<() => void> {
  STORE_LOCATION[getStyleStoreListenersSymbol()] ??= [];
  return STORE_LOCATION[getStyleStoreListenersSymbol()];
}

function emitChange() {
  for (const listener of getListeners()) {
    listener();
  }
}

function getSnapshot(): IModal[] {
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

export const ModalStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot: () => {
    return initialStore;
  },
  addModal(config: IModal) {
    STORE_LOCATION[getStyleStoreSymbol()] = [...getSnapshot(), config];
    emitChange();
  },
  removeModal(id: string) {
    STORE_LOCATION[getStyleStoreSymbol()] = getSnapshot().filter((modal) => modal.id !== id);
    emitChange();
  }
};

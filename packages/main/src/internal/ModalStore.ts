import type { ComponentType, RefCallback, RefObject } from 'react';

const STORE_SYMBOL_LISTENERS = Symbol.for('@ui5/webcomponents-react/Modals/Listeners');
const STORE_SYMBOL = Symbol.for('@ui5/webcomponents-react/Modals');

type IModal = {
  Component: ComponentType;
  props: Record<string, unknown>;
  ref: RefObject<unknown> | RefCallback<unknown>;
  container?: Element | DocumentFragment;
  id: string;
};

const initialStore: IModal[] = [];

function getListeners(): Array<() => void> {
  globalThis[STORE_SYMBOL_LISTENERS] ??= [];
  return globalThis[STORE_SYMBOL_LISTENERS];
}

function emitChange() {
  for (const listener of getListeners()) {
    listener();
  }
}

function getSnapshot(): IModal[] {
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

export const ModalStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot: () => {
    return initialStore;
  },
  addModal(config: IModal) {
    globalThis[STORE_SYMBOL] = [...getSnapshot(), config];
    emitChange();
  },
  removeModal(id: string) {
    globalThis[STORE_SYMBOL] = getSnapshot().filter((modal) => modal.id !== id);
    emitChange();
  }
};

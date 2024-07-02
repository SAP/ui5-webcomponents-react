import type I18nBundle from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';

const STORE_SYMBOL_LISTENERS = Symbol.for('@ui5/webcomponents-react/I18nStore/Listeners');
const STORE_SYMBOL = Symbol.for('@ui5/webcomponents-react/I18nStore');

const initialStore: Record<string, I18nBundle> = {};

function getListeners(): Array<() => void> {
  globalThis[STORE_SYMBOL_LISTENERS] ??= [];
  return globalThis[STORE_SYMBOL_LISTENERS];
}

function emitChange() {
  for (const listener of getListeners()) {
    listener();
  }
}

function getSnapshot(): Record<string, I18nBundle> {
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

export const I18nStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot: () => {
    return initialStore;
  },
  loadBundle: (bundleName: string) => {
    const bundles = getSnapshot();
    if (!bundles.hasOwnProperty(bundleName)) {
      void getI18nBundle(bundleName).then((bundle) => {
        globalThis[STORE_SYMBOL] = {
          ...globalThis[STORE_SYMBOL],
          [bundleName]: bundle
        };
        emitChange();
      });
    }
  },
  handleLanguageChange: async () => {
    const bundles = getSnapshot();
    const newBundles = await Promise.all(Object.keys(bundles).map((bundleName) => getI18nBundle(bundleName)));

    globalThis[STORE_SYMBOL] = newBundles.reduce(
      (acc, bundle) => ({
        ...acc,
        [bundle.packageName]: bundle
      }),
      {}
    );
    emitChange();
  }
};

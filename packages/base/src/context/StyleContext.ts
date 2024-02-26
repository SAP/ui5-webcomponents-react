'use client';

import { createContext, useContext } from 'react';

const SYMBOL = Symbol.for('@ui5/webcomponents-react/StyleContext');

const StyleContext = createContext<{ staticCssInjected: boolean }>({
  staticCssInjected: false
});

export function getStyleContext(): typeof StyleContext {
  globalThis[SYMBOL] ??= StyleContext;
  return globalThis[SYMBOL];
}

export function useStyleContext() {
  return useContext(getStyleContext());
}

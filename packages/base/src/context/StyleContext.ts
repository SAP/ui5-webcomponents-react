'use client';

import { createContext, useContext } from 'react';

const SYMBOL = Symbol.for('@ui5/webcomponents-react/StyleContext');

interface StyleContextValue {
  staticCssInjected: boolean;
  componentsMap: Map<string, number>;
}

const StyleContext = createContext<StyleContextValue>({
  staticCssInjected: false,
  componentsMap: new Map<string, number>()
});

export function getStyleContext(): typeof StyleContext {
  globalThis[SYMBOL] ??= StyleContext;
  return globalThis[SYMBOL];
}

export function useStyleContext() {
  return useContext(getStyleContext());
}

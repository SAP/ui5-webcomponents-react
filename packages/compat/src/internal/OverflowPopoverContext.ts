import { createContext, useContext } from 'react';

const SYMBOL = Symbol.for('@ui5/webcomponents-react/OverflowPopoverContext');

interface IOverflowPopoverContext {
  inPopover: boolean;
}

const OverflowPopoverContext = createContext<IOverflowPopoverContext>({ inPopover: false });

export function getOverflowPopoverContext(): typeof OverflowPopoverContext {
  globalThis[SYMBOL] ??= OverflowPopoverContext;
  return globalThis[SYMBOL];
}

export function useOverflowPopoverContext() {
  return useContext(getOverflowPopoverContext());
}

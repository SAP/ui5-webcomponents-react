import { createContext } from 'react';

interface IOverflowPopoverContext {
  inPopover: boolean;
}

export const OverflowPopoverContext = createContext<IOverflowPopoverContext>({ inPopover: false });

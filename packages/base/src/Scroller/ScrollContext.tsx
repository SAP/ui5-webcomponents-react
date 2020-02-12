import { Context, createContext, RefObject } from 'react';

export interface IScrollContext {
  scrollContainer: RefObject<HTMLDivElement>;
  registerElement: any;
  unregisterElement: any;
  scrollToElementById: any;
  scrollToTop: any;
  selectedElementId: string;
}

export const ScrollContext: Context<IScrollContext> = createContext({
  scrollContainer: { current: null },
  registerElement: () => {
    // do nothing
  },
  unregisterElement: () => {
    // do nothing
  },
  scrollToElementById: () => {
    // do nothing
  },
  scrollToTop: () => {
    // do nothing
  },
  selectedElementId: null
});

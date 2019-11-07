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
  registerElement: () => {},
  unregisterElement: () => {},
  scrollToElementById: () => {},
  scrollToTop: () => {},
  selectedElementId: null
});

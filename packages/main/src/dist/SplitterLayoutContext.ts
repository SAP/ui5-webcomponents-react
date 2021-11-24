import { createContext } from 'react';

interface ISplitterLayoutContext {
  orientation: 'vertical' | 'horizontal';
}

export const SplitterLayoutContext = createContext<ISplitterLayoutContext>({
  orientation: 'vertical'
});

import { createContext } from 'react';

interface ISplitterLayoutContext {
  vertical: boolean;
  reset: boolean;
}

export const SplitterLayoutContext = createContext<ISplitterLayoutContext>({
  vertical: true,
  reset: false,
});

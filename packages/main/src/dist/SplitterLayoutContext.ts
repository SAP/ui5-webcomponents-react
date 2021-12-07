import { createContext } from 'react';

interface ISplitterLayoutContext {
  vertical: boolean;
}

export const SplitterLayoutContext = createContext<ISplitterLayoutContext>({
  vertical: true
});

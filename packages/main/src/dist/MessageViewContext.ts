import { createContext } from 'react';

export const MessageViewContext = createContext({
  selectMessage: (message: any) => {}
});

import { createContext } from 'react';

export const MessageViewContext = createContext({
  selectMessage: (_message: any) => {}
});

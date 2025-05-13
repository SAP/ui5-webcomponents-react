import { createContext } from 'react';
import type { MessageItemPropTypes } from '../components/MessageView/MessageItem.js';

export type SelectedMessage = MessageItemPropTypes & { titleTextStr: string };

interface MessageViewContextType {
  selectMessage: (message: SelectedMessage) => void;
}

export const MessageViewContext = createContext<MessageViewContextType>({
  selectMessage: (_message: SelectedMessage) => {},
});

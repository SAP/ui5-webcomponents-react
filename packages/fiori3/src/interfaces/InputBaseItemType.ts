import { ListItemShape } from './ListItemShape';
import { ReactText } from 'react';

export interface InputBaseItemType extends ListItemShape {
  key: ReactText;
  text: ReactText;
}

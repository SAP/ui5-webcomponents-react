import { ReactText } from 'react';
import { ListItemShape } from './ListItemShape';

export interface InputBaseItemType extends ListItemShape {
  key: ReactText;
  text: ReactText;
}

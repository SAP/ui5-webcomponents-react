import { VerticalAlign } from '../../../../enums/VerticalAlign';
import { DefaultFilterComponent } from '../FilterComponent';
import { Cell } from './Cell';
import { Expandable } from './Expandable';
import { Grouped } from './Grouped';
import { PopIn } from './PopIn';
import { RepeatedValue } from './RepeatedValue';

export const DEFAULT_COLUMN_WIDTH = 60;

export const DefaultColumn = {
  Filter: DefaultFilterComponent,
  minWidth: DEFAULT_COLUMN_WIDTH,
  vAlign: VerticalAlign.Middle,
  Grouped: Grouped,
  Cell: Cell,
  Expandable: Expandable,
  RepeatedValue: RepeatedValue,
  PopIn: PopIn
};

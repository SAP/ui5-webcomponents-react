import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { DefaultFilterComponent } from '../FilterComponent';
import { Cell } from './Cell';
import { Expandable } from './Expandable';
import { Grouped } from './Grouped';
import { PopIn } from './PopIn';
import { RepeatedValue } from './RepeatedValue';

export const DEFAULT_COLUMN_WIDTH = 60;

const defaultFilterMethod = (filter, row) => {
  return new RegExp(filter.value, 'gi').test(String(row[filter.id]));
};

export const DefaultColumn = {
  Filter: DefaultFilterComponent,
  canResize: true,
  canReorder: true,
  minWidth: DEFAULT_COLUMN_WIDTH,
  vAlign: VerticalAlign.Middle,
  defaultFilter: defaultFilterMethod,
  Grouped: Grouped,
  Cell: Cell,
  Expandable: Expandable,
  RepeatedValue: RepeatedValue,
  PopIn: PopIn
};

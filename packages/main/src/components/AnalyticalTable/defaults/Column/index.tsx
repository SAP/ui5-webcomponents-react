import { AnalyticalTablePopinDisplay } from '../../../../enums/AnalyticalTablePopinDisplay.js';
import { VerticalAlign } from '../../../../enums/VerticalAlign.js';
import type { AnalyticalTableColumnDefinition } from '../../types/index.js';
import { DefaultFilterComponent } from '../FilterComponent/index.js';
import { Cell } from './Cell.js';
import { ColumnHeaderModal } from './ColumnHeaderModal.js';
import { Expandable } from './Expandable.js';
import { Grouped } from './Grouped.js';
import { PopIn } from './PopIn.js';
import { RepeatedValue } from './RepeatedValue.js';

export const DEFAULT_COLUMN_WIDTH = 60;

export const DefaultColumn: AnalyticalTableColumnDefinition = {
  Filter: DefaultFilterComponent,
  minWidth: DEFAULT_COLUMN_WIDTH,
  vAlign: VerticalAlign.Middle,
  Grouped: Grouped,
  Cell: Cell,
  Expandable: Expandable,
  RepeatedValue: RepeatedValue,
  PopIn: PopIn,
  Popover: ColumnHeaderModal,
  popinDisplay: AnalyticalTablePopinDisplay.Block,
};

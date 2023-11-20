import type { ComponentType, RefObject } from 'react';
import type { Column } from 'react-table';
import type { PopoverDomRef } from '../../../webComponents/Popover/index.js';
import type { AnalyticalTableColumnDefinition } from './index.js';

export interface ColumnType extends Column {
  show: boolean;
  id: string;
  Filter: ComponentType<{ column: ColumnType; popoverRef?: RefObject<PopoverDomRef> }>;
  toggleSortBy: (descending: boolean, multi?: any) => void;
  clearSortBy: () => void;
  toggleGroupBy: (set: boolean) => void;
  canFilter: boolean;
  canResize: boolean;
  filterValue?: string;
  canGroupBy: boolean;
  isGrouped: boolean;
  canSort: boolean;
  isSorted: boolean;
  isSortedDesc: boolean;
  disableGrouping: boolean;
  getResizerProps: () => any;
  isResizing: boolean;
  hAlign: AnalyticalTableColumnDefinition['hAlign'];
  totalLeft: number;
  totalFlexWidth: number;
  enableMultiSort?: boolean;
}

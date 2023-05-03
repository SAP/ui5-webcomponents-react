import { ComponentType, RefObject } from 'react';
import { Column } from 'react-table';
import { PopoverDomRef } from '../../../webComponents/Popover';

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
  hAlign: string;
  totalLeft: number;
  totalFlexWidth: number;
  enableMultiSort?: boolean;
}

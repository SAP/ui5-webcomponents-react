import { ComponentType, RefObject } from 'react';
import { Column } from 'react-table';
import { Ui5PopoverDomRef } from '../../../interfaces/Ui5PopoverDomRef';

export interface ColumnType extends Column {
  show: boolean;
  id: string;
  Filter: ComponentType<{ column: ColumnType; popoverRef?: RefObject<Ui5PopoverDomRef> }>;
  toggleSortBy: (descending: boolean, multi?: any) => void;
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
}

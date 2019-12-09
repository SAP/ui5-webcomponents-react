import { ComponentType } from 'react';
import { Column } from 'react-table';

export interface ColumnType extends Column {
  show: boolean;
  id: string;
  Filter: ComponentType<{ column: ColumnType }>;
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

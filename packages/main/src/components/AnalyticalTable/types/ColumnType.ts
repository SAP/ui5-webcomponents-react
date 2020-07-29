import { Ui5PopoverDomRef } from '@ui5/webcomponents-react/interfaces/Ui5PopoverDomRef';
import { ComponentType, RefObject } from 'react';
import { Column } from 'react-table';

export interface ColumnType extends Column {
  show: boolean;
  id: string;
  Filter: ComponentType<{ column: ColumnType; popoverRef?: RefObject<Ui5PopoverDomRef> }>;
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
}

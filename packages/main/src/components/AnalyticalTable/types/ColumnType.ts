import { ComponentType } from 'react';

export interface ColumnType {
  show: boolean;
  id: string;
  Filter: ComponentType<{ column: ColumnType }>;
  toggleSortBy: (descending: boolean, multi?: any) => void;
  toggleGroupBy: (set: boolean) => void;
  canFilter: boolean;
  filterValue?: string;
  canGroupBy: boolean;
  isGrouped: boolean;
  canSort: boolean;
  isSorted: boolean;
  isSortedDesc: boolean;
}

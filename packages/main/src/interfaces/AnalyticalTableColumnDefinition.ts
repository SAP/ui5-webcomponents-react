import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { ComponentType } from 'react';

export interface AnalyticalTableColumnDefinition {
  // base properties
  accessor: string | ((row: any, rowIndex: number) => any);
  /**
   * Required if accessor is a function
   */
  id?: string;

  Header?: string | ComponentType<any>;
  headerTooltip?: string;
  Cell?: string | ComponentType<any>;
  width?: number;
  minWidth?: number;
  maxWidth?: number;

  // useFilters
  Filter?: string | ComponentType<any>;
  disableFilters?: boolean;
  defaultCanFilter?: boolean;
  filter?: string | Function;

  // useGroupBy
  Aggregated?: string | ComponentType<any>;
  aggregate?: string | ((leafValues, aggregatedValues) => any);
  aggregateValue?: string | ((values, row, column) => any);
  disableGroupBy?: boolean;

  // useSortBy
  defaultCanSort?: boolean;
  disableSortBy?: boolean;
  sortDescFirst?: boolean;
  sortInverted?: boolean;
  sortType?: string | ((rowA, rowB, columnId: string, descending: boolean) => any);

  // useResizeColumns
  disableResizing?: boolean;

  // ui5 web components react properties
  hAlign?: TextAlign;
  vAlign?: VerticalAlign;

  [key: string]: any;
}

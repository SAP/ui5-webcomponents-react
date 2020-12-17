import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { ComponentType } from 'react';

export interface AnalyticalTableColumnDefinition {
  // base properties
  /**
   * This `string`/`function` is used to build the data model for your column. <br />
   * __Note__: You can also specify deeply nested values with accessors like `info.hobby` or even `address[0].street`
   */
  accessor: string | ((row: any, rowIndex: number) => any);
  /**
   * Defines the unique ID for the column. It is used by reference in things like sorting, grouping, filtering etc.
   * __Note__: Required if `accessor` is a function, otherwise `accessor` will overwrite the id.
   */
  id?: string;
  /**
   * Can either be string or a React component that will be rendered as column header
   */
  Header?: string | ComponentType<any>;
  /**
   * Tooltip for the column header. If not set, the display text will be the same as the Header if it is a `string`.
   */
  headerTooltip?: string;
  /**
   * Custom cell renderer. If set, the table will call that component for every cell and pass all required information as props, e.g. the cell value as `props.cell.value`
   */
  Cell?: string | ComponentType<any>;
  /**
   * Cell width, if not set the table will distribute all columns without a width evenly.
   */
  width?: number;
  /**
   * Minimum width of the column, e.g. used for resizing.
   */
  minWidth?: number;
  /**
   * Maximum with of the column, e.g. used for resizing.
   */
  maxWidth?: number;

  // useFilters
  /**
   * Filter Component to be rendered in the Header.
   */
  Filter?: string | ComponentType<any>;
  /**
   * Disable filters for this column.
   */
  disableFilters?: boolean;
  /**
   * If set to true, this column will be filterable, regardless if it has a valid `accessor`.
   */
  defaultCanFilter?: boolean;
  /**
   * Either a string or a filter function.<br />Supported String Values: <ul><li>`text`</li><li>`exactText`</li><li>`exactTextCase`</li><li>`equals`</li></ul>
   */
  filter?: string | Function;

  // useGroupBy
  /**
   * Component to render for aggregated cells.
   */
  Aggregated?: string | ComponentType<any>;
  /**
   * Aggregation function or string.<br />Supported String Values: <ul><li>`min`</li><li>`max`</li><li>`median`</li><li>`count`</li></ul>
   */
  aggregate?: string | ((leafValues, aggregatedValues) => any);
  /**
   * When attempting to group/aggregate non primitive cell values (eg. arrays of items) you will likely need to resolve a stable primitive value like a number or string to use in normal row aggregations. This property can be used to aggregate or simply access the value to be used in aggregations eg. count-ing the unique number of items in a cell's array value before sum-ing that count across the table.
   */
  aggregateValue?: string | ((values, row, column) => any);
  /**
   * Disable groupBy for this column.
   */
  disableGroupBy?: boolean;

  // useSortBy
  /**
   * If set to true, this column will be sortable, regardless if it has a valid `accessor`.
   */
  defaultCanSort?: boolean;
  /**
   * Disable sorting for this column.
   */
  disableSortBy?: boolean;
  /**
   * If set to `true`, the first sort direction for this column will be descending instead of ascending.
   */
  sortDescFirst?: boolean;
  /**
   * If set to `true`, the underlying sorting direction will be inverted, but the UI will not.
   */
  sortInverted?: boolean;
  /**
   * String or custom sort function.<br />Supported String Values: <ul><li>`basic`</li><li>`datetime`</li><li>`alphanumeric`</li></ul>
   */
  sortType?: string | ((rowA, rowB, columnId: string, descending: boolean) => any);

  // useResizeColumns
  /**
   * Disable resizing for this column.
   */
  disableResizing?: boolean;

  // ui5 web components react properties
  /**
   * Horizontal alignment of the cell.
   */
  hAlign?: TextAlign;
  /**
   * Vertical alignment of the cell.
   */
  vAlign?: VerticalAlign;

  //usePopIn
  /**
   * Enables the pop-in behavior of the column. When the `responsiveMinWidth` is smaller then the width of the table, the content of each cell will move to the first cell in the row, improving usability on small or mobile devices.
   */
  responsivePopIn?: boolean;
  /**
   * Defines how the table should react when its width falls below the `responsiveMinWidth`.
   *
   * - If `responsivePopIn` is `true` the content of this column will be moved to the first column.
   * - If `responsivePopIn` is not set or `false` the column will be hidden.
   */
  responsiveMinWidth?: number;
  /**
   * Custom pop-in header renderer. If set, the table will call that component for every column that is "popped-in" and pass the table instance as prop.
   */
  PopInHeader?: string | ComponentType<any>;

  [key: string]: any;
}

import type { ScrollToOptions } from '@tanstack/react-virtual';
import type { ComponentType, ReactNode, Ref } from 'react';
import type {
  AnalyticalTableScaleWidthMode,
  AnalyticalTableScrollMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableSubComponentsBehavior,
  AnalyticalTableVisibleRowCountMode,
  TableScaleWidthMode,
  TableSelectionBehavior,
  TableSelectionMode,
  TableVisibleRowCountMode,
  TextAlign,
  ValueState,
  VerticalAlign
} from '../../../enums/index.js';
import type { CommonProps } from '../../../interfaces/index.js';

export interface ReactTableHooks {
  useOptions: any[];
  stateReducers: any[];
  useControlledState: any[];
  columns: any[];
  columnsDeps: any[];
  allColumns: any[];
  allColumnsDeps: any[];
  accessValue: any[];
  materializedColumns: any[];
  materializedColumnsDeps: any[];
  useInstanceAfterData: any[];
  visibleColumns: any[];
  visibleColumnsDeps: any[];
  headerGroups: any[];
  headerGroupsDeps: any[];
  useInstanceBeforeDimensions: any[];
  useInstance: any[];
  prepareRow: any[];
  getTableProps: any[];
  getTableBodyProps: any[];
  getHeaderGroupProps: any[];
  getFooterGroupProps: any[];
  getHeaderProps: any[];
  getFooterProps: any[];
  getRowProps: any[];
  getCellProps: any[];
  useFinalInstance: any[];
  getToggleHiddenProps: any[];
  getToggleHideAllColumnsProps: any[];
  getGroupByToggleProps: any[];
  getSortByToggleProps: any[];
  getToggleAllRowsExpandedProps: any[];
  getToggleRowExpandedProps: any[];
  getToggleRowSelectedProps: any[];
  getToggleAllRowsSelectedProps: any[];
  getToggleAllPageRowsSelectedProps: any[];
  getResizerProps: any[];
}

export interface TriggerScrollState {
  type: 'offset' | 'item';
  direction: 'vertical' | 'horizontal';
  args: [number, Omit<ScrollToOptions, 'behavior'>?];
}

export interface AnalyticalTableState {
  columnOrder: string[];
  columnResizing: Record<string, any>;
  expanded: Record<string | number, any>;
  filters: Record<string | number, any>[];
  groupBy: string[];
  hiddenColumns: string[];
  selectedRowIds: Record<string | number, any>;
  sortBy: Record<string | number, any>[];
  tableClientWidth?: number;
  dndColumn?: string;
  popInColumns?: Record<string | number, any>[];
  isRtl?: boolean;
  isScrollable?: boolean;
  subComponentsHeight?: Record<string | number, any>;
  visibleRows?: number;
  rowCollapsed?: boolean;
  bodyHeight?: number;
  interactiveRowsHavePopIn?: boolean;
  tableColResized?: true;
  triggerScroll?: TriggerScrollState;
}

interface ScaleWidthModeOptions {
  /**
   * Defines the string used for internal width calculation of custom header cells (e.g. `Header: () => <Link>Click me!</Link>`).
   *
   * You can find out more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-analyticaltable-recipes--docs#how-to-scale-custom-cells).
   *
   * __Note:__ This property has no effect when used with `AnalyticalTableScaleWidthMode.Default`.
   */
  headerString?: string;
  /**
   * Defines the string used for internal width calculation of the longest cell inside the body of the table (e.g. `Cell: () => <Link>Click me!</Link>`).
   *
   * You can find out more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-analyticaltable-recipes--docs#how-to-scale-custom-cells).
   *
   * __Note:__ This property has no effect when used with `AnalyticalTableScaleWidthMode.Default`.
   */
  cellString?: string;
}

export interface AnalyticalTableColumnDefinition {
  // base properties
  /**
   * This `string`/`function` is used to build the data model for your column.
   *
   * __Note__: You can also specify deeply nested values with accessors like `info.hobby` or even `address[0].street`
   * __Note__: If no `accessor` is set, or the `accessor` is a function, the `id` property has to be set.
   */
  accessor?: string | ((row: any, rowIndex: number) => any);
  /**
   * Defines the unique ID for the column. It is used by reference in things like sorting, grouping, filtering etc.
   *
   * __Note__: If no `accessor` is set, or the `accessor` is a function, the `id` property has to be set.
   */
  id?: string;
  /**
   * Can either be string or a React component that will be rendered as column header
   */
  Header?: string | ComponentType<any> | ((props?: any) => ReactNode);
  /**
   * Defines the `aria-label` for the whole column read by screen readers.
   *
   * __Note:__ This prop is mandatory if you pass anything else than `string` to the `Header` property. In this case the `headerLabel` should at least contain the column name.
   *
   * __Note:__ If `headerLabel` is defined, screen readers will always read the passed string, even when `Header` is a `string`.
   */
  headerLabel?: string;
  /**
   * Tooltip for the column header. If not set, the display text will be the same as the Header if it is a `string`.
   */
  headerTooltip?: string;
  /**
   * Custom cell renderer. If set, the table will call that component for every cell and pass all required information as props, e.g. the cell value as `props.cell.value`
   */
  Cell?: string | ComponentType<any> | ((props?: any) => ReactNode);
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
  Filter?: string | ComponentType<any> | ((props?: any) => ReactNode);
  /**
   * Disable filters for this column.
   */
  disableFilters?: boolean;
  /**
   * If set to true, this column will be filterable, regardless if it has a valid `accessor`.
   */
  defaultCanFilter?: boolean;
  /**
   * Either a string or a filter function.
   *
   * Supported String Values:
   * * `text`
   * * `exactText`
   * * `exactTextCase`
   * * `equals`
   */
  filter?: string | ((rows: any[], columnIds: string[], filterValue: string) => any);

  // useGlobalFilter
  /**
   * Disables global filtering for this column
   */
  disableGlobalFilter?: boolean;

  // useGroupBy
  /**
   * Component to render for aggregated cells.
   */
  Aggregated?: string | ComponentType<any> | ((props?: any) => ReactNode);
  /**
   * Aggregation function or string.<br />Supported String Values: <ul><li>`min`</li><li>`max`</li><li>`median`</li><li>`count`</li></ul>
   */
  aggregate?: string | ((leafValues, aggregatedValues) => any);
  /**
   * When attempting to group/aggregate non-primitive cell values (e.g. arrays of items) you will likely need to resolve a stable primitive value like a number or string to use in normal row aggregations. This property can be used to aggregate or simply access the value to be used in aggregations eg. count-ing the unique number of items in a cell's array value before sum-ing that count across the table.
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
   *  - Used to compare 2 rows of data and order them correctly.
   *   - If a **function** is passed, it must be **memoized**. The sortType function should return 1 if rowA is larger, and -1 if rowB is larger. `react-table` will take care of the rest.
   *   - String options: `basic`, `datetime`, `alphanumeric`.
   *   - The resolved function from the string/function will be used to sort the column's data.
   *     - If a `string` is passed, the function with that name located on either the custom `sortTypes` option or the built-in sorting types object will be used.
   *     - If a `function` is passed, it will be used.
   *
   * @default 'alphanumeric'
   */
  sortType?: string | ((rowA, rowB, columnId: string, descending: boolean) => number);

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
  /**
   * Allows passing a custom string for the internal width calculation of custom cells for `scaleWidthMode` `Grow` and `Smart`.
   *
   * You can find out more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-analyticaltable-recipes--docs#how-to-scale-custom-cells).
   *
   * __Note:__ This property has no effect when used with `AnalyticalTableScaleWidthMode.Default`.
   *
   * @since 1.22.0
   */
  scaleWidthModeOptions?: ScaleWidthModeOptions;

  // usePopIn
  /**
   * Enables the pop-in behavior of the column. When the `responsiveMinWidth` is smaller than the width of the table, the content of each cell will move to the first cell in the row, improving usability on small or mobile devices.
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
  PopInHeader?: string | ComponentType<any> | ((props?: any) => ReactNode);

  //use useDragAndDrop
  /**
   * Defines if the column is reorderable by dragging and dropping columns.
   *
   * Defaults to: `true`
   *
   * @deprecated please use `disableDragAndDrop` instead.
   */
  canReorder?: boolean;
  /**
   * Defines if the column is reorderable by dragging and dropping columns.
   */
  disableDragAndDrop?: boolean;
  /**
   * Defines whether this column should allow multi-sort.
   *
   * __Note:__ When sorting by a column that does not allow multiple sorting, only the current column is sorted and all other sorted columns are reset.
   */
  enableMultiSort?: boolean;

  // all other custom properties of [React Table v7](https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md) column options
  [key: string]: any;
}

export interface DivWithCustomScrollProp extends HTMLDivElement {
  isExternalVerticalScroll?: boolean;
}

export interface AnalyticalTableDomRef extends Omit<HTMLDivElement, 'scrollTo'> {
  scrollToItem: (index: number, align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode) => void;
  scrollTo: (scrollOffset: number, align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode) => void; // overrides native scrollTo function
  horizontalScrollTo: (
    scrollOffset: number,
    align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode
  ) => void;
  horizontalScrollToItem: (
    index: number,
    align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode
  ) => void;
}

export interface AnalyticalTablePropTypes extends Omit<CommonProps, 'title'> {
  /**
   * Defines the columns array where you can define the configuration for each column.
   *
   * __Must be memoized!__
   */
  columns: AnalyticalTableColumnDefinition[];
  /**
   * The data array that you want to display on the table.
   *
   * __Must be memoized!__
   */
  data: Record<string, any>[];
  /**
   * Component or text rendered in the header section of the `AnalyticalTable`.
   *
   * __Note:__ If not set, it will be hidden.
   */
  header?: ReactNode;
  /**
   * Extension section of the Table. If not set, no extension area will be rendered
   */
  extension?: ReactNode;
  /**
   * The minimum number of rows that are displayed. If the data contains fewer entries than `minRows`, it will be filled with empty rows.
   *
   * __Default:__ `5`
   */
  minRows?: number;
  /**
   * Defines how the table will render visible rows.
   *
   * - __"Fixed":__ The table always has as many rows as defined in the `visibleRows` prop.
   * - __"Auto":__ The number of visible rows displayed depends on the height of the surrounding container.
   * - __"Interactive":__ Adds a resizer to the bottom of the table to dynamically add or remove visible rows. The initial number of rows is defined by the `visibleRows` prop.
   *
   * __Default:__ `"Fixed"`
   *
   * __Note:__ When `"Auto"` is enabled, we recommend to use a fixed height for the parent container.
   */
  visibleRowCountMode?:
    | AnalyticalTableVisibleRowCountMode
    | keyof typeof AnalyticalTableVisibleRowCountMode
    | TableVisibleRowCountMode;

  /**
   * The number of rows visible without going into overflow.
   *
   * __Default:__ `15`
   *
   * __Note:__ If the data contains more entries than the `visibleRow` count, a vertical scrollbar is rendered and the table goes into overflow.
   */
  visibleRows?: number;
  /**
   * Defines whether the row height of popped-in columns should be considered when calculating the body height of the table.
   *
   * __Note:__ If set so `true` the table will change its height depending on whether columns are popped in or not.
   */
  adjustTableHeightOnPopIn?: boolean;
  /**
   * Indicates whether a loading indicator should be shown.
   *
   * __Note:__ If the data array is not empty and loading is set to `true` a `Loader` will be displayed underneath the header, otherwise a loading placeholder will be shown.
   * You can use your own placeholder by passing it to the `LoadingComponent` prop.
   */
  loading?: boolean;
  /**
   * Setting this prop to `true` will show an overlay on top of the AnalyticalTable content preventing users from interacting with it.
   */
  showOverlay?: boolean;
  /**
   * Defines the text shown if the data array is empty. If not set "No data" will be displayed.
   */
  noDataText?: string;
  /**
   * Defines the height of the rows and header row.
   *
   * __Note:__ This prop overrides the default height. If you want to use the default height after you have set a custom height, you will have to remove this prop and remount the component.
   */
  rowHeight?: number;
  /**
   * Defines the height of the header row.
   *
   * __Note:__ If this property is set, it overwrites the height set in `rowHeight` for the header row.
   *
   * __Note:__ This prop overrides the default height. If you want to use the default height after you have set a custom height, you will have to remove this prop and remount the component.
   */
  headerRowHeight?: number;
  /**
   * Defines whether the table should retain its column width, when a column has been manually resized and the container width has changed.
   */
  retainColumnWidth?: boolean;
  /**
   * Defines whether the table should display rows with alternating row colors.
   */
  alternateRowColor?: boolean;
  /**
   * Flag whether the table should add an extra column at the end of the rows for displaying a navigation highlight.
   */
  withNavigationHighlight?: boolean;
  /**
   * Flag whether the table should add an extra column at the start of the rows for displaying row highlights, based on the `highlightField` prop.
   */
  withRowHighlight?: boolean;
  /**
   * Accessor for showing the row highlights. Only taken into account when `withRowHighlight` is set.
   *
   * The value of this prop can either be a `string` pointing to a `ValueState` in your dataset
   * or an accessor function which should return a `ValueState`.
   *
   * __Default:__ `"status"`
   */
  highlightField?: string | ((row: Record<any, any>) => ValueState);
  /**
   * Defines whether columns are filterable.
   */
  filterable?: boolean;
  /**
   * Defines whether columns are sortable.
   */
  sortable?: boolean;
  /**
   * Defines whether columns are groupable.
   *
   * __Note:__ This prop has no effect when `isTreeTable` is true or `renderRowSubComponent` is set.
   */
  groupable?: boolean;
  /**
   * Group table rows by adding the column's `accessor` or `id` to the array.
   *
   * __Note:__ This prop has no effect when `isTreeTable` is true or `renderRowSubComponent` is set.
   */
  groupBy?: string[];
  /**
   * Defines the selection behavior of the table.
   *
   * - __"Row":__ A selection column is rendered along with the normal columns. The whole row is selectable.
   * - __"RowOnly":__ No selection column is rendered along with the normal columns. The whole row is selectable.
   * - __"RowSelector":__ The row is only selectable by clicking on the corresponding field in the selection column.
   *
   * __Default:__ `"Row"`
   */
  selectionBehavior?:
    | AnalyticalTableSelectionBehavior
    | keyof typeof AnalyticalTableSelectionBehavior
    | TableSelectionBehavior;
  /**
   * Defines the `SelectionMode` of the table.
   *
   * - __"None":__ The rows are not selectable.
   * - __"SingleSelect":__ You can select only one row at once. Clicking on another row will unselect the previously selected row.
   * - __"MultiSelect":__ You can select multiple rows.
   *
   * __Default:__ `"None"`
   */
  selectionMode?: AnalyticalTableSelectionMode | keyof typeof AnalyticalTableSelectionMode | TableSelectionMode;

  /**
   * Defines the column growing behaviour. Possible Values:
   *
   * - **Default**: The available space of the table is distributed evenly for columns without fixed width. If the minimum width of all columns is reached, horizontal scrolling will be enabled.
   * - **Smart**: Every column gets the space it needs for displaying the full header text. If all header texts need more space than the available table width, horizontal scrolling will be enabled. If there is space left, columns with a long text will get more space until there is no more table space left.
   * - **Grow**: Every column gets the space it needs for displaying its full header text and full text content of all cells. If it requires more space than the table has, horizontal scrolling will be enabled. To prevent huge header text from polluting the table, a max-width of 700px is applied to each column. It can be overwritten by setting the respective column property. This mode adds a calculated `minWidth` to each column. If the internally calculated `minWidth` is larger than the `width` set in the column options, it can lead to an unwanted scrollbar. To prevent this, you can set the `minWidth` in the column options yourself.
   *
   * __Default:__ `"Default"`
   *
   * __Note:__ Custom cells with components instead of text as children are ignored by the `Smart` and `Grow` modes.
   * __Note:__ For performance reasons, the `Smart` and `Grow` modes base their calculation for table cell width on a subset of column cells. If the first 20 cells of a column are significantly smaller than the rest of the column cells, the content may still not be fully displayed for all cells.
   *
   */
  scaleWidthMode?: AnalyticalTableScaleWidthMode | keyof typeof AnalyticalTableScaleWidthMode | TableScaleWidthMode;
  /**
   * Defines the number of the CSS `scaleX(sx: number)` function. `sx` is representing the abscissa of the scaling vector.
   */
  scaleXFactor?: number;
  /**
   * Defines the columns order by their `accessor` or `id`.
   */
  columnOrder?: string[];
  /**
   * Defines whether infinite scroll is active.
   */
  infiniteScroll?: boolean;
  /**
   * The `infiniteScrollThreshold` defines at how many remaining rows the `onLoadMore` event should be fired.
   *
   * Example: Your initial dataset consists of 50 entries and you want to load more data when the user scrolled to the 40th row. Then you should set the `infiniteScrollThreshold` to 10.
   *
   * __Default:__ `20`
   */
  infiniteScrollThreshold?: number;
  /**
   * Defines the value that should be filtered on across all rows.
   *
   * __Note:__ This prop is not supported for tree-tables. You can enable it by creating your own global-filter function. You can find out more about this in the [react-table v7 documentation](https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useGlobalFilter.md).
   */
  globalFilterValue?: string;
  /**
   * Additional options which will be passed to [v7 react-table´s useTable hook](https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md#table-options)
   */
  reactTableOptions?: Record<string, unknown>;
  /**
   * You can use this prop to add custom hooks to the table.
   */
  tableHooks?: ((hooks: ReactTableHooks) => void)[];
  /**
   * Defines the key for nested rows.
   *
   * __Note__: You can also specify deeply nested sub-rows with accessors like `values.subRows`.
   *
   * __Default:__ `"subRows"`
   */
  subRowsKey?: string;
  /**
   * The key must consist of a valid `rowId` like `{ 2: true }` or `{ '0.2.0': true }` for nested rows.
   *
   * __Note:__ This prop updates the internal table state and must therefore be memoized!
   */
  selectedRowIds?: { [key: string]: boolean };
  /**
   * Defines whether the table should act as tree-table.
   */
  isTreeTable?: boolean;
  /**
   * The amount of columns to load both behind and ahead of the current window range.
   *
   * __Default:__ `5`
   */
  overscanCountHorizontal?: number;
  /**
   * The amount of rows to load both behind and ahead of the current window range.
   */
  overscanCount?: number;
  /**
   * Defines the subcomponent that should be displayed below each row.
   *
   * __Note:__ When rendering active elements inside the subcomponent, make sure to add the `data-subcomponent-active-element' attribute, otherwise focus behavior won't be consistent.
   */
  renderRowSubComponent?: (row?: any) => ReactNode;
  /**
   * Defines whether a subcomponent should be rendered as expandable container or directly at the bottom of the row.
   *
   * @deprecated please use `subComponentsBehavior` instead.
   */
  alwaysShowSubComponent?: boolean;
  /**
   * Defines the rendering and height calculation behavior of subcomponents when `renderRowSubComponent` is used.
   *
   * - __"Expandable":__ Render subcomponents as expandable container of each row.
   * - __"Visible":__ Render subcomponents below each row.
   * - __"IncludeHeight":__ Render subcomponents below each row. The height of each initially visible subcomponent (defined by `visibleRows`) is taken into account when defining the body height of the table.
   * - __"IncludeHeightExpandable":__ Render subcomponents as expandable container of each row. The height of each expanded subcomponent of visible rows (defined by `visibleRows`) is taken into account when defining the body height of the table, so that the height of the table changes when a subcomponent is expanded/collapsed. (since: v1.23.0)
   *
   * __Default:__ `"Expandable"`
   *
   * @since 1.19.0
   */
  subComponentsBehavior?: AnalyticalTableSubComponentsBehavior | keyof typeof AnalyticalTableSubComponentsBehavior;
  /**
   * Defines where modals and other elements which should be mounted outside the DOM hierarchy are rendered into via `React.createPortal`.
   *
   * You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).
   *
   * Defaults to: `document.body`
   */
  portalContainer?: Element;

  // events
  /**
   * This callback can be used to programmatically show an indicator for navigated rows. It has no effect if `withNavigationHighlight` is not set.
   *
   * __Must be memoized!__
   */
  markNavigatedRow?: (row?: Record<any, any>) => boolean;
  /**
   * Fired when the sorting of the rows changes.
   */
  onSort?: (e: CustomEvent<{ column: unknown; sortDirection: string }>) => void;
  /**
   * Fired when the grouping of the rows changes.
   */
  onGroup?: (e: CustomEvent<{ column: unknown; groupedColumns: string[] }>) => void;
  /**
   * Fired when a row is selected or unselected.
   */
  onRowSelect?: (
    e?: CustomEvent<{
      allRowsSelected: boolean;
      row?: Record<string, unknown>;
      isSelected?: boolean;
      selectedFlatRows: Record<string, unknown>[];
      selectedRowIds: Record<string | number, boolean>;
    }>
  ) => void;
  /**
   * Fired when a row is clicked
   */
  onRowClick?: (e?: CustomEvent<{ row?: unknown }>) => void;
  /**
   * Fired when a row is expanded or collapsed
   */
  onRowExpandChange?: (e?: CustomEvent<{ row: unknown; column: unknown }>) => void;
  /**
   * Fired when the columns order is changed.
   */
  onColumnsReorder?: (e?: CustomEvent<{ columnsNewOrder: string[]; column: unknown }>) => void;
  /**
   * Fired when the `infiniteScrollThreshold` is reached.
   *
   * __Note:__ When used in a vertically resizable table (`visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Interactive`), the event is also fired if all available rows are displayed after resizing.
   * You can distinguish between the scroll and custom event by checking the `event.type`.
   *
   * @param {number} e.detail.rowCount - The number of rows
   * @param {number} e.detail.totalRowCount - The total number of rows, including sub-rows
   */
  onLoadMore?: (e?: CustomEvent<{ rowCount: number; totalRowCount: number }>) => void;
  /**
   * Fired when the body of the table is scrolled.
   */
  onTableScroll?: (e?: CustomEvent<{ rows: Record<string, any>[]; rowElements: HTMLCollection }>) => void;
  // default components
  /**
   * Component that will be rendered when the table is not loading and has no data.
   *
   * __Default:__ `DefaultNoDataComponent`
   */
  NoDataComponent?: ComponentType<any>;
  /**
   * Component that will be rendered when the table is loading and has data.
   *
   * __Default:__ `DefaultLoadingComponent`
   */
  LoadingComponent?: ComponentType<any>;

  /**
   * Exposes the internal table instance.
   * This object will contain all [instance properties (react-table v7)](https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md#instance-properties)
   * of the `useTable` hook and all instance properties from `useColumnOrder`, `useExpanded`, `useFilters`,
   * `useGlobalFilter`, `useGroupBy`,`useResizeColumns`, `useRowSelect` and `useSortBy` plugin hooks.
   *
   * **Note**: Use this prop with care, some properties might have an impact on the internal `AnalyticalTable` implementation.
   */
  tableInstance?: Ref<Record<string, any>>;
}

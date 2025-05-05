import type { ScrollToOptions } from '@tanstack/react-virtual';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type {
  ComponentType,
  DependencyList,
  Dispatch,
  MutableRefObject,
  ReactNode,
  Ref,
  RefObject,
  SetStateAction
} from 'react';
import type {
  AnalyticalTablePopinDisplay,
  AnalyticalTableScaleWidthMode,
  AnalyticalTableScrollMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableSubComponentsBehavior,
  AnalyticalTableVisibleRowCountMode,
  IndicationColor,
  TextAlign,
  VerticalAlign
} from '../../../enums/index.js';
import type { CommonProps } from '../../../types/index.js';
import type { PopoverDomRef } from '../../../webComponents/Popover/index.js';
import type { classNames } from '../AnalyticalTable.module.css.js';

export type ClassNames = typeof classNames;

export enum RenderColumnTypes {
  Filter = 'Filter',
  Grouped = 'Grouped',
  Cell = 'Cell',
  Expandable = 'Expandable',
  RepeatedValue = 'RepeatedValue',
  PopIn = 'PopIn',
  Popover = 'Popover',
  Header = 'Header',
  Aggregated = 'Aggregated'
}

export interface ColumnType extends Omit<AnalyticalTableColumnDefinition, 'id'> {
  id?: string;
  Expandable?: any;
  Grouped?: any;
  RepeatedValue?: any;
  Popover?: any;
  canFilter?: boolean;
  canGroupBy?: boolean;
  canResize?: boolean;
  canSort?: boolean;
  depth?: number;
  filterValue?: any;
  filteredRows?: Record<string, any>[];
  getFooterProps?: (props?: any) => any;
  getGroupByToggleProps?: (props?: any) => any;
  getHeaderProps?: (props?: any) => any;
  getSortByToggleProps?: (props?: any) => any;
  getToggleHiddenProps?: (props?: any) => any;
  groupedIndex?: number;
  isGrouped?: boolean;
  isResizing?: boolean;
  isSorted?: boolean;
  isSortedDesc?: boolean;
  isVisible?: boolean;
  originalWidth?: number;
  parent?: any;
  preFilteredRows?: Record<string, RowType>[];
  /**
   * Renders the component with the given column type
   * @param type
   * @param props The props are added to the table instance
   */
  render?: (type: RenderColumnTypes | keyof typeof RenderColumnTypes, props: Record<string, any>) => ReactNode;
  /**
   * Set the filter value for the current column.
   *
   * __Note:__ If set to `undefined`, the filter is removed.
   */
  setFilter?: (val: string | string[] | undefined) => void;
  sortDescFirst?: boolean;
  sortedIndex?: number;
  toggleHidden?: (hidden?: boolean) => void;
  totalFlexWidth?: number;
  totalLeft?: number;
  totalMaxWidth?: number;
  totalMinWidth?: number;
  totalVisibleHeaderCount?: number;
  totalWidth?: number;
  [key: string]: any;
}

export interface TableInstance {
  allColumns?: ColumnType[];
  allColumnsHidden?: boolean;
  columns: ColumnType[];
  data: Record<string, any>[];
  defaultColumn?: Record<string, any>;
  disableFilters?: boolean;
  disableGlobalFilter?: boolean;
  disableGroupBy?: boolean;
  disableSortBy?: boolean;
  dispatch?: (action: any) => void;
  expandedDepth?: number;
  expandedRows?: RowType[];
  filteredFlatRows?: RowType[];
  filteredRows?: RowType[];
  filteredRowsById?: Record<string, RowType>;
  flatHeaders?: ColumnType[];
  flatRows?: RowType[];
  footerGroups?: Record<string, any>[];
  getHooks?: () => any[];
  getRowId?: (row: RowType, index: number, parent?: any) => string;
  getSubRows?: (row: RowType, relativeIndex?: number) => RowType[];
  getTableBodyProps?: any;
  getTableProps?: any;
  getToggleAllPageRowsSelectedProps?: any;
  getToggleAllRowsExpandedProps?: any;
  getToggleAllRowsSelectedProps?: any;
  getToggleHideAllColumnsProps?: any;
  globalFilteredFlatRows?: RowType[];
  globalFilteredRows?: RowType[];
  globalFilteredRowsById?: Record<string, RowType>;
  groupedFlatRows?: RowType[];
  groupedRows?: RowType[];
  groupedRowsById?: Record<string, RowType>;
  headerGroups?: Record<string, any>[];
  headers?: ColumnType[];
  initialRows?: RowType[];
  initialState?: Record<string, any>;
  isAllPageRowsSelected?: boolean;
  isAllRowsExpanded?: boolean;
  isAllRowsSelected?: boolean;
  nonGroupedFlatRows?: RowType[];
  nonGroupedRowsById?: Record<string, RowType>;
  onlyGroupedFlatRows?: RowType[];
  onlyGroupedRowsById?: Record<string, RowType>;
  plugins?: any[];
  preExpandedRows?: RowType[];
  preFilteredFlatRows?: RowType[];
  preFilteredRows?: RowType[];
  preFilteredRowsById?: Record<string, RowType>;
  preGlobalFilteredFlatRows?: RowType[];
  preGlobalFilteredRows?: RowType[];
  preGlobalFilteredRowsById?: Record<string, RowType>;
  preGroupedFlatRow?: RowType[];
  preGroupedRows?: RowType[];
  preGroupedRowsById?: Record<string, RowType>;
  preSortedFlatRows?: RowType[];
  preSortedRows?: RowType[];
  prepareRow?: (row: RowType) => void;
  resetResizing?: any;
  rows: RowType[];
  rowsById?: Record<string, RowType>;
  selectSubRows?: boolean;
  selectedFlatRows?: RowType[];
  setAllFilters?: (filtersObjectArray: Record<string, any>[]) => void;
  setColumnOrder?: any;
  /**
   * Set the filter value for the defined column.
   *
   * __Note:__ If set to `undefined`, the filter is removed.
   */
  setFilter?: (columnId: string, filterValue: string | string[] | undefined) => void;
  setGlobalFilter?: (filterValue: string) => void;
  setGroupBy?: (columnIds: string[]) => void;
  setHiddenColumns?: (columnIds: string[]) => void;
  setSortBy?: any;
  sortTypes?: Record<string, any>;
  sortedFlatRows?: Record<string, RowType>[];
  sortedRows?: Record<string, RowType>[];
  state: AnalyticalTableState & Record<string, any>;
  stateReducer?: (
    state: TableInstance['state'],
    action: any,
    _prevState: TableInstance['state'],
    instance: TableInstance
  ) => TableInstance['state'];
  toggleAllPageRowsSelected?: (selected?: boolean) => void;
  toggleAllRowsExpanded?: (expanded?: boolean) => void;
  toggleAllRowsSelected?: (selected?: boolean) => void;
  toggleGroupBy?: (columnId: string, value: boolean) => void;
  toggleHideAllColumns?: (hidden?: boolean) => void;
  toggleHideColumn?: (columnId: string, hidden?: boolean) => void;
  toggleRowExpanded?: (rowPath: string, expanded?: boolean) => void;
  toggleRowSelected?: (rowPath: string, selected?: boolean) => void;
  toggleSortBy?: (columnId: string, desc: boolean, multi?: boolean) => void;
  totalColumnsMaxWidth?: number;
  totalColumnsMinWidth?: number;
  totalColumnsWidth?: number;
  useControlledState?: any;
  virtualRowsRange?: {
    startIndex: number;
    endIndex: number;
  };
  visibleColumns: ColumnType[];
  visibleColumnsWidth?: number[];
  webComponentsReactProperties: WCRPropertiesType;
  [key: string]: any;
}

export interface WCRPropertiesType {
  selectionMode: AnalyticalTablePropTypes['selectionMode'];
  onRowSelect?: AnalyticalTablePropTypes['onRowSelect'];
  translatableTexts: {
    selectAllText: string;
    deselectAllText: string;
    expandA11yText: string;
    collapseA11yText: string;
    selectA11yText: string;
    unselectA11yText: string;
    expandNodeA11yText: string;
    collapseNodeA11yText: string;
    filteredA11yText: string;
    groupedA11yText: string;
    selectAllA11yText: string;
    deselectAllA11yText: string;
    rowExpandedAnnouncementText: string;
    rowCollapsedAnnouncementText: string;
  };
  tagNamesWhichShouldNotSelectARow: Set<string>;
  tableRef: MutableRefObject<DivWithCustomScrollProp>;
  selectionBehavior: AnalyticalTablePropTypes['selectionBehavior'];
  classes: ClassNames;
  onAutoResize: AnalyticalTablePropTypes['onAutoResize'];
  onRowClick: AnalyticalTablePropTypes['onRowClick'];
  onRowExpandChange: AnalyticalTablePropTypes['onRowExpandChange'];
  onSort: AnalyticalTablePropTypes['onSort'];
  onGroup: AnalyticalTablePropTypes['onGroup'];
  isTreeTable: AnalyticalTablePropTypes['isTreeTable'];
  alternateRowColor: AnalyticalTablePropTypes['alternateRowColor'];
  scaleWidthMode: AnalyticalTablePropTypes['scaleWidthMode'];
  loading: AnalyticalTablePropTypes['loading'];
  withRowHighlight: AnalyticalTablePropTypes['withRowHighlight'];
  highlightField: AnalyticalTablePropTypes['highlightField'];
  withNavigationHighlight: AnalyticalTablePropTypes['withNavigationHighlight'];
  markNavigatedRow: AnalyticalTablePropTypes['markNavigatedRow'];
  renderRowSubComponent: AnalyticalTablePropTypes['renderRowSubComponent'];
  alwaysShowSubComponent: boolean;
  showOverlay: AnalyticalTablePropTypes['showOverlay'];
  uniqueId: string;
  subRowsKey: AnalyticalTablePropTypes['subRowsKey'];
  onColumnsReorder: AnalyticalTablePropTypes['onColumnsReorder'];
}

export interface RowType {
  allCells: Record<string, any>[];
  canExpand: boolean;
  cells: Record<string, any>[];
  depth: number;
  getRowProps: (props?: any) => any;
  getToggleRowExpandedProps: (userProps?: any) => any;
  getToggleRowSelectedProps: (userProps?: any) => any;
  id: string;
  index: number;
  isExpanded: boolean;
  isSelected: boolean;
  isSomeSelected: boolean;
  original: Record<string, any>;
  originalSubRows: Record<string, any>[];
  subRows: Record<string, any>[];
  toggleRowExpanded: (isExpanded?: boolean) => void;
  toggleRowSelected: (isSelected?: boolean) => void;
  values: Record<string, any>;
  [key: string]: any;
}

export interface ScrollToRefType {
  horizontalScrollToOffset: (offset: number, options: Omit<ScrollToOptions, 'smoothScroll'>) => void;
  horizontalScrollToIndex: (item: number, options: Omit<ScrollToOptions, 'smoothScroll'>) => void;
  scrollToIndex: (item: number, options: Omit<ScrollToOptions, 'smoothScroll'>) => void;
  scrollToOffset: (item: number, options: Omit<ScrollToOptions, 'smoothScroll'>) => void;
}

export interface TriggerScrollState {
  type: 'offset' | 'item';
  direction: 'vertical' | 'horizontal';
  args: [number, Omit<ScrollToOptions, 'behavior'>?];
}

interface PopInColumnsState {
  id: string;
  column: ColumnType;
  popinDisplay: AnalyticalTableColumnDefinition['popinDisplay'];
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
  globalFilter?: string;
  tableClientWidth?: number;
  dndColumn?: string;
  popInColumns?: PopInColumnsState[];
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

interface CellLabelParam {
  instance: Record<string, any>;
  cell: Record<string, any>;
}

interface ScaleWidthModeOptions {
  /**
   * Defines the string used for internal width calculation of custom header cells (e.g. `Header: () => <Link>Click me!</Link>`).
   *
   * You can find out more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/data-display-analyticaltable-recipes--docs#how-to-scale-custom-cells).
   *
   * __Note:__ This property has no effect when used with `AnalyticalTableScaleWidthMode.Default`.
   */
  headerString?: string;
  /**
   * Defines the string used for internal width calculation of the longest cell inside the body of the table (e.g. `Cell: () => <Link>Click me!</Link>`).
   *
   * You can find out more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/data-display-analyticaltable-recipes--docs#how-to-scale-custom-cells).
   *
   * __Note:__ This property has no effect when used with `AnalyticalTableScaleWidthMode.Default`.
   */
  cellString?: string;
}

interface PopoverProps {
  /**
   * Set the state of the popover. If set to `false` the component is unmounted.
   */
  setOpen: Dispatch<SetStateAction<boolean>>;
  /**
   * React Ref that holds the reference to the respective table header element.
   */
  openerRef: MutableRefObject<HTMLDivElement>;
}

export interface TableInstanceWithPopoverProps extends TableInstance {
  popoverProps: PopoverProps;
}

export interface FilterProps {
  column: ColumnType;
  /**
   * `Popover` DOM RefObject
   */
  popoverRef: RefObject<PopoverDomRef>;
  /**
   * `accessibleNameRef` for filter `Input`
   */
  accessibleNameRef: string;
}

export interface AnalyticalTableColumnDefinition {
  // base properties
  /**
   * This `string`/`function` is used to build the data model for your column.
   *
   * __Note__: You can also specify deeply nested values with accessors like `info.hobby` or even `address[0].street`
   * __Note__: If no `accessor` is set, or the `accessor` is a function, the `id` property has to be set.
   */
  accessor?:
    | string
    | ((
        originalRow: Record<string, any>,
        rowIndex: number,
        row: RowType,
        parentRows: RowType[],
        data: Record<string, any>[]
      ) => any);
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
   * Defines a function that receives an object as a parameter, including the cell and table instance, and should return the `aria-label` of the current cell.
   *
   * __Note:__ Use this property if there is no textual content available through the dataset (e.g. no `accessor` field available), or if you want to provide additional context when navigating to the respective cell for screen readers.
   *
   * __Note:__ To retrieve the internal `aria-label`, utilize the `cell.cellLabel` property.
   */
  cellLabel?: (param?: CellLabelParam) => string;
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
  /**
   * Custom header Popover renderer. If set, this component replaces the internal header Popover.
   *
   * The table instance is passed as a prop, which includes the `popoverProps` object containing:
   * - `openerRef`: A reference to the header cell that opens the popover.
   * - `setOpen`: A React state setter to control the popover's open state. (The component will be unmounted if set to `false`)
   *
   * __Note:__ Since the component unmounts when closing the popover, the `open` prop of `Popover` components doesn't need to be controlled directly and can be set to `true`.
   */
  Popover?:
    | ComponentType<{ instance: TableInstanceWithPopoverProps }>
    | ((instance: TableInstanceWithPopoverProps) => ReactNode);

  // useFilters
  /**
   * Filter Component to be rendered in the Header.
   */
  Filter?: ComponentType<FilterProps> | ((props: FilterProps) => ReactNode);
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
   *
   * __Note:__ When the standard `Filter` component is used, the filter function is not triggered if the `filterValue` is empty, as the filter is then removed.
   */
  filter?: string | ((rows: RowType[], columnIds: string[], filterValue: string) => RowType[]);

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
  aggregateValue?: string | ((values, row: RowType, column) => any);
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
   *   - If a function is passed, it must be **memoized**. The sortType function should return 1 if rowA is larger and -1 if rowB is larger. `react-table` will handle the rest; there's no need to manage the inversion of sort numbers (depending on sort direction) manually.
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
  /**
   * Defines whether double-clicking a columns resizer will automatically resize the column to fit the largest cell content of visible rows.
   *
   * __Note:__ Only default text content is supported by this option, for custom content it might work as well, but we recommend checking the behavior carefully as the logic can't account for all possible implementations.
   */
  autoResizable?: boolean;
  // ui5 web components react properties
  /**
   * Horizontal alignment of the cell.
   */
  hAlign?: TextAlign | keyof typeof TextAlign;
  /**
   * Vertical alignment of the cell.
   */
  vAlign?: VerticalAlign | keyof typeof VerticalAlign;
  /**
   * Allows passing a custom string for the internal width calculation of custom cells for `scaleWidthMode` `Grow` and `Smart`.
   *
   * You can find out more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/data-display-analyticaltable-recipes--docs#how-to-scale-custom-cells).
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
  /**
   * Defines the display of `AnalyticalTable` pop-ins.
   *
   * @default AnalyticalTablePopinDisplay.Block
   * @since 2.5.0
   */
  popinDisplay?: AnalyticalTablePopinDisplay | keyof typeof AnalyticalTablePopinDisplay;

  //use useDragAndDrop
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

type HighlightColor = ValueState | keyof typeof ValueState | IndicationColor | keyof typeof IndicationColor;

interface OnAutoResizeMouseEvent extends Omit<MouseEvent, 'detail'> {
  detail: { columnId: string; width: number; nativeDetail: 2 };
}

interface OnRowClickEvent extends Omit<UIEvent, 'detail'> {
  detail: { row: RowType; nativeDetail: number };
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
   * @default 5
   */
  minRows?: number;
  /**
   * Defines how the table will render rows.
   *
   * - __"Fixed":__ The table always has as many rows as defined in the `visibleRows` prop.
   * - __"Auto":__ The number of visible rows displayed depends on the height of the surrounding container.
   * - __"AutoWithEmptyRows":__ The number of rows displayed depends on the height of the surrounding container, if not enough visible rows are available, empty rows are displayed.
   * - __"Interactive":__ Adds a resizer to the bottom of the table to dynamically add or remove visible rows. The initial number of rows is defined by the `visibleRows` prop.
   *
   * __Default:__ `"Fixed"`
   *
   * __Note:__ When `"Auto"` or `"AutoWithEmptyRows"` is enabled, we recommend using a fixed height for the parent container.
   */
  visibleRowCountMode?: AnalyticalTableVisibleRowCountMode | keyof typeof AnalyticalTableVisibleRowCountMode;
  /**
   * Specifies the number of additional empty rows added to the bottom of a table that is normally __non__ scrollable.
   * Use this prop if you want to ensure that the table is scrollable.
   *
   * __Note:__ It's recommended to use this prop only if `infiniteScroll` is applied and where assessing scrollability is not possible across various resolutions or datasets.
   * E.g., when using `visibleRowCountMode` with values `"Auto"` or `"AutoWithEmptyRows"`.
   *
   * __Note:__ This prop has no effect if the table is already scrollable without additional empty rows.
   */
  additionalEmptyRowsCount?: number;
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
   * __Note:__ If the data array is not empty and loading is set to `true` a `BusyIndicator` will be displayed on top of the table, otherwise a skeleton placeholder will be shown.
   */
  loading?: boolean;
  /**
   * Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.
   *
   * @default 1000
   */
  loadingDelay?: number;
  /**
   * Setting this prop to `true` will show an overlay on top of the AnalyticalTable content preventing users from interacting with it.
   */
  showOverlay?: boolean;
  /**
   * Defines the text shown if the data array is empty or a filtered table doesn't return results.
   *
   * __Note:__ If `noDataText` isn't set, the default text displayed is "No data". For filtered tables, it will show "No data found. Try adjusting the filter settings." instead.
   */
  noDataText?: string;
  /**
   * Defines the height of the rows and header row.
   *
   * __Note:__ This prop overrides the default height. If you want to use the default height after you have set a custom height, you will have to remove this prop and remount the component.
   *
   * __Note:__ To preserve the intended design, it is not recommended to set a row height with active elements such as buttons below `32px` for content density "Compact" and `44px` for content density "Cozy".
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
   * The value of this prop can either be a `string` pointing to a `ValueState` or an `IndicationColor` in your dataset
   * or an accessor function which should return a `ValueState` or an `IndicationColor`.
   *
   * __Note:__ `IndicationColor`s are available since `v1.26.0`.
   *
   * @default "status"
   */
  highlightField?: string | ((row: RowType) => HighlightColor);
  /**
   * Defines whether columns are filterable.
   *
   * __Note:__ The table is implementing "top-down" (parent/root node first) filtering.
   */
  filterable?: boolean;
  /**
   * Defines whether columns are sortable.
   *
   * @default true
   */
  sortable?: boolean;
  /**
   * Defines whether columns are groupable.
   *
   * __Note:__ This prop has no effect when `isTreeTable` is true or `renderRowSubComponent` is set.
   *
   * __Note:__ It is not recommended to use grouping in combination with `infiniteScroll` as there is no concept for this configuration.
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
  selectionBehavior?: AnalyticalTableSelectionBehavior | keyof typeof AnalyticalTableSelectionBehavior;
  /**
   * Defines the `SelectionMode` of the table.
   *
   * - __"None":__ The rows are not selectable.
   * - __"Single":__ You can select only one row at once. Clicking on another row will unselect the previously selected row.
   * - __"Multiple":__ You can select multiple rows.
   *
   * @default "None"
   */
  selectionMode?: AnalyticalTableSelectionMode | keyof typeof AnalyticalTableSelectionMode;

  /**
   * Defines the column growing behaviour. Possible Values:
   *
   * - **Default**: The available space of the table is distributed evenly for columns without fixed width. If the minimum width of all columns is reached, horizontal scrolling will be enabled.
   * - **Smart**: Every column gets the space it needs for displaying the full header text. If all header texts need more space than the available table width, horizontal scrolling will be enabled. If there is space left, columns with a long text will get more space until there is no more table space left.
   * - **Grow**: Every column gets the space it needs for displaying its full header text and full text content of all cells. If it requires more space than the table has, horizontal scrolling will be enabled. To prevent huge header text from polluting the table, a max-width of 700px is applied to each column. It can be overwritten by setting the respective column property. This mode adds a calculated `minWidth` to each column. If the internally calculated `minWidth` is larger than the `width` set in the column options, it can lead to an unwanted scrollbar. To prevent this, you can set the `minWidth` in the column options yourself.
   *
   * __Note:__ Custom cells with components instead of text as children are ignored by the `Smart` and `Grow` modes.
   *
   * __Note:__ For performance reasons, the `Smart` and `Grow` modes base their calculation for table cell width on a subset of column cells. If the first 20 cells of a column are significantly smaller than the rest of the column cells, the content may still not be fully displayed for all cells.
   *
   * @default "Default"
   *
   */
  scaleWidthMode?: AnalyticalTableScaleWidthMode | keyof typeof AnalyticalTableScaleWidthMode;
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
   *
   * __Note:__ It is not recommended to use this prop in combination with a grouped table, as there is no concept for this configuration.
   *
   * __Note:__ To prevent the table state from resetting when the data is updated, please see [this recipe](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/data-display-analyticaltable-recipes--docs#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes).
   */
  infiniteScroll?: boolean;
  /**
   * The `infiniteScrollThreshold` defines at how many remaining rows the `onLoadMore` event should be fired.
   *
   * Example: Your initial dataset consists of 50 entries and you want to load more data when the user scrolled to the 40th row. Then you should set the `infiniteScrollThreshold` to 10.
   *
   * @default 20
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
   *
   * @default []
   */
  tableHooks?: ((hooks: ReactTableHooks) => void)[];
  /**
   * Defines the key for nested rows.
   *
   * __Note__: You can also specify deeply nested sub-rows with accessors like `values.subRows`.
   *
   * @default "subRows"
   */
  subRowsKey?: string;
  /**
   * The key must consist of a valid `rowId` like `{ 2: true }` or `{ '0.2.0': true }` for nested rows.
   *
   * __Note:__ This prop updates the internal table state and must therefore be memoized!
   */
  selectedRowIds?: Record<string, boolean>;
  /**
   * Defines whether the table should act as tree-table.
   */
  isTreeTable?: boolean;
  /**
   * The amount of columns to load both behind and ahead of the current window range.
   *
   * @default 5
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
   *
   * __Note:__ Subcomponents can affect performance, especially when used in a tree table (`isTreeTable={true}`). If you face performance issues, please try memoizing your subcomponent.
   */
  renderRowSubComponent?: (row?: RowType) => ReactNode;
  /**
   * Defines the rendering and height calculation behavior of subcomponents when `renderRowSubComponent` is used.
   *
   * - __"Expandable":__ Render subcomponents as expandable container of each row.
   * - __"Visible":__ Render subcomponents below each row.
   * - __"IncludeHeight":__ Render subcomponents below each row. The height of each initially visible subcomponent (defined by `visibleRows`) is taken into account when defining the body height of the table.
   * - __"IncludeHeightExpandable":__ Render subcomponents as expandable container of each row. The height of each expanded subcomponent of visible rows (defined by `visibleRows`) is taken into account when defining the body height of the table, so that the height of the table changes when a subcomponent is expanded/collapsed. (since: v1.23.0)
   *
   * @default "Expandable"
   *
   * @since 1.19.0
   */
  subComponentsBehavior?: AnalyticalTableSubComponentsBehavior | keyof typeof AnalyticalTableSubComponentsBehavior;

  // events
  /**
   * This callback can be used to programmatically show an indicator for navigated rows. It has no effect if `withNavigationHighlight` is not set.
   *
   * __Must be memoized!__
   */
  markNavigatedRow?: (row?: RowType) => boolean;
  /**
   * Fired when the sorting of the rows changes.
   */
  onSort?: (e: CustomEvent<{ column: ColumnType; sortDirection: string }>) => void;
  /**
   * Fired when the grouping of the rows changes.
   */
  onGroup?: (e: CustomEvent<{ column: ColumnType; groupedColumns: string[] }>) => void;
  /**
   * Fired when a row is selected or unselected.
   */
  onRowSelect?: (
    e?: CustomEvent<{
      /**
       * Selected row object.
       *
       * __Note:__ If the event is invoked by select-all press, this property is not available.
       */
      row?: RowType;
      /**
       * Defines if the row is selected.
       *
       * __Note:__ If the event invoked by select-all press, this property is not available.
       */
      isSelected?: boolean;
      allRowsSelected: boolean;
      rowsById: Record<string, RowType>;
      selectedRowIds: Record<string, boolean>;
      nativeDetail: number;
    }>
  ) => void;
  /**
   * Fired when a row is clicked
   */
  onRowClick?: (e: OnRowClickEvent) => void;
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
  /**
   * Fired when the table is resized by double-clicking the Resizer.
   *
   * __Note:__ Auto-resize is only available on columns that have the `autoResizable` option set to `true`.
   */
  onAutoResize?: (e?: OnAutoResizeMouseEvent) => void;
  // default components
  /**
   * Component that will be rendered when the table is not loading and has no data.
   *
   * __Default:__ `DefaultNoDataComponent`
   */
  NoDataComponent?: ComponentType<any>;

  /**
   * Exposes the internal table instance.
   * This object will contain all [instance properties (react-table v7)](https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md#instance-properties)
   * of the `useTable` hook and all instance properties from `useColumnOrder`, `useExpanded`, `useFilters`,
   * `useGlobalFilter`, `useGroupBy`,`useResizeColumns`, `useRowSelect` and `useSortBy` plugin hooks.
   *
   * **Note**: Use this prop with care, some properties might have an impact on the internal `AnalyticalTable` implementation.
   */
  tableInstance?: Ref<TableInstance>;
}

interface ConfigParam {
  instance: TableInstance;
}

export interface ReactTableHooks {
  useOptions: any[];
  stateReducers: any[];
  useControlledState: any[];
  columns: ((columns: ColumnType[], config: ConfigParam) => ColumnType[])[];
  columnsDeps: ((deps: DependencyList, config: ConfigParam) => DependencyList)[];
  allColumns: any[];
  allColumnsDeps: any[];
  accessValue: any[];
  materializedColumns: any[];
  materializedColumnsDeps: any[];
  useInstanceAfterData: any[];
  visibleColumns: ((columns: ColumnType[], config: ConfigParam) => ColumnType[])[];
  visibleColumnsDeps: ((deps: DependencyList, config: ConfigParam) => DependencyList)[];
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

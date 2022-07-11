import {
  debounce,
  enrichEventWithDetails,
  ThemingParameters,
  useI18nBundle,
  useIsomorphicLayoutEffect,
  useIsRTL,
  useIsomorphicId
} from '@ui5/webcomponents-react-base';
import {
  COLLAPSE_NODE,
  COLLAPSE_PRESS_SPACE,
  EXPAND_NODE,
  EXPAND_PRESS_SPACE,
  SELECT_PRESS_SPACE,
  UNSELECT_PRESS_SPACE,
  INVALID_TABLE
} from '../../i18n/i18n-defaults';
import clsx from 'clsx';
import React, {
  ComponentType,
  CSSProperties,
  forwardRef,
  MutableRefObject,
  ReactNode,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react';
import { createUseStyles } from 'react-jss';
import {
  PluginHook,
  useColumnOrder,
  useExpanded,
  useFilters,
  useGlobalFilter,
  useGroupBy,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable
} from 'react-table';
import { AnalyticalTableScrollMode } from '../../enums/AnalyticalTableScrollMode';
import { GlobalStyleClasses } from '../../enums/GlobalStyleClasses';
import { TableScaleWidthMode } from '../../enums/TableScaleWidthMode';
import { TableSelectionBehavior } from '../../enums/TableSelectionBehavior';
import { TableSelectionMode } from '../../enums/TableSelectionMode';
import { TableVisibleRowCountMode } from '../../enums/TableVisibleRowCountMode';
import { TextAlign } from '../../enums/TextAlign';
import { ValueState } from '../../enums/ValueState';
import { VerticalAlign } from '../../enums/VerticalAlign';
import { CommonProps } from '../../interfaces/CommonProps';
import { FlexBox } from '../FlexBox';
import { Text } from '../Text';
import styles from './AnayticalTable.jss';
import { ColumnHeaderContainer } from './ColumnHeader/ColumnHeaderContainer';
import { DefaultColumn } from './defaults/Column';
import { DefaultLoadingComponent } from './defaults/LoadingComponent';
import { TablePlaceholder } from './defaults/LoadingComponent/TablePlaceholder';
import { DefaultNoDataComponent } from './defaults/NoDataComponent';
import { useA11y } from './hooks/useA11y';
import { useDragAndDrop } from './hooks/useDragAndDrop';
import { useDynamicColumnWidths } from './hooks/useDynamicColumnWidths';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { usePopIn } from './hooks/usePopIn';
import { useRowHighlight } from './hooks/useRowHighlight';
import { useRowNavigationIndicators } from './hooks/useRowNavigationIndicator';
import { useRowSelectionColumn } from './hooks/useRowSelectionColumn';
import { useSingleRowStateSelection } from './hooks/useSingleRowStateSelection';
import { useStyling } from './hooks/useStyling';
import { useTableScrollHandles } from './hooks/useTableScrollHandles';
import { useToggleRowExpand } from './hooks/useToggleRowExpand';
import { useVisibleColumnsWidth } from './hooks/useVisibleColumnsWidth';
import { VerticalScrollbar } from './scrollbars/VerticalScrollbar';
import { VirtualTableBody } from './TableBody/VirtualTableBody';
import { VirtualTableBodyContainer } from './TableBody/VirtualTableBodyContainer';
import { stateReducer } from './tableReducer/stateReducer';
import { TitleBar } from './TitleBar';
import { orderByFn, tagNamesWhichShouldNotSelectARow } from './util';
import { VerticalResizer } from './VerticalResizer';

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

  // usePopIn
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

  // all other custom properties or [React Table](https://react-table.tanstack.com/) column options
  [key: string]: any;
}

interface DivWithCustomScrollProp extends HTMLDivElement {
  isExternalVerticalScroll?: boolean;
}

export interface AnalyticalTableDomRef extends Omit<HTMLDivElement, 'scrollTo'> {
  scrollToItem: (index: number, align?: AnalyticalTableScrollMode) => void;
  scrollTo: (scrollOffset: number) => void; // overrides native scrollTo function
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
   * The minimum number of rows that are displayed. If the data contains less entries than `minRows`, it will be filled with empty rows.
   */
  minRows?: number;
  /**
   * Defines how the table table will render visible rows.
   *
   * - __"Fixed":__ The table always has as many rows as defined in the `visibleRowCount` prop.
   * - __"Auto":__ The table automatically fills the height of the surrounding container.
   * - __"Interactive":__ Adds a resizer to the bottom of the table to dynamically add or remove visible rows. The initial number of rows is defined by the `visibleRows` prop.
   *
   * __Note:__ When `"Auto"` is enabled, we recommend to use a fixed height for the outer container.
   */
  visibleRowCountMode?: TableVisibleRowCountMode | keyof typeof TableVisibleRowCountMode;
  /**
   * The number of rows visible without going into overflow.
   *
   * __Note:__ If the data contains more entries than the `visibleRow` count, a vertical scrollbar is rendered and the table goes into overflow.
   */
  visibleRows?: number;
  /**
   * Defines whether the row height of popped-in columns should be considered when calculating the body height of the table.
   *
   * __Note:__ If set so `true` the table will change its height depending whether columns are popped in or not.
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
   * Defines the height of the rows and header.
   */
  rowHeight?: number;
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
   * Default Value: `status`.
   *
   * The value of this prop can either be a `string` pointing to a `ValueState` in your dataset
   * or an accessor function which should return a `ValueState`.
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
   */
  selectionBehavior?: TableSelectionBehavior | keyof typeof TableSelectionBehavior;
  /**
   * Defines the `SelectionMode` of the table.
   *
   * - __"None":__ The rows are not selectable.
   * - __"SingleSelect":__ You can select only one row at once. Clicking on another row will unselect the previously selected row.
   * - __"MultiSelect":__ You can select multiple rows.
   */
  selectionMode?: TableSelectionMode | keyof typeof TableSelectionMode;
  /**
   * Defines the column growing behaviour. Possible Values:
   *
   * - **Default**: The available space of the table is distributed evenly for columns without fixed width. If the minimum width of all columns is reached, horizontal scrolling will be enabled.
   * - **Smart**: Every column gets the space it needs for displaying the full header text. If all headers need more space than the available table width, horizontal scrolling will be enabled. If there is space left, columns with a long content will get more space until there is no more table space left.
   * - **Grow**: Every column gets the space it needs for displaying its full header text and full content of all cells. If it requires more space than the table has, horizontal scrolling will be enabled.
   *
   */
  scaleWidthMode?: TableScaleWidthMode | keyof typeof TableScaleWidthMode;
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
   */
  infiniteScrollThreshold?: number;
  /**
   * The current global filter value.
   */
  globalFilterValue?: string;
  /**
   * Additional options which will be passed to [react-table´s useTable hook](https://react-table.tanstack.com/docs/api/useTable#table-options)
   */
  reactTableOptions?: Record<string, unknown>;
  /**
   * You can use this prob to add custom hooks to the table.
   */
  tableHooks?: PluginHook<any>[];
  /**
   * Defines the key for nested rows.
   *
   * Default: "children"
   */
  subRowsKey?: string;
  /**
   * The key must consist of a valid `rowId` like `{ 2: true }` or `{ '0.2.0': true }` for nested rows.
   */
  selectedRowIds?: { [key: string]: boolean };
  /**
   * Defines whether the table should act as tree-table.
   */
  isTreeTable?: boolean;
  /**
   * The amount of columns to load both behind and ahead of the current window range.
   */
  overscanCountHorizontal?: number;
  /**
   * The amount of rows to load both behind and ahead of the current window range.
   */
  overscanCount?: number;
  /**
   * Defines the subcomponent that should be displayed below each row.
   */
  renderRowSubComponent?: (row?: any) => ReactNode;
  /**
   * Defines whether a subcomponent should be rendered as expandable container or directly at the bottom of the row.
   */
  alwaysShowSubComponent?: boolean;
  /**
   * Defines where modals and other elements which should be mounted outside of the DOM hierarchy are rendered into via `React.createPortal`.
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
  onRowSelected?: (
    e?: CustomEvent<{
      allRowsSelected?: boolean;
      row?: Record<string, unknown>;
      isSelected?: boolean;
      selectedFlatRows?: Record<string, unknown>[] | string[];
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
  onColumnsReordered?: (e?: CustomEvent<{ columnsNewOrder: string[]; column: unknown }>) => void;
  /**
   * Fired when the `infiniteScrollThreshold` is reached.
   *
   * @param {number} e.detail.rowCount - The number of rows
   * @param {number} e.detail.totalRowCount - The total number of rows, including sub-rows
   */
  onLoadMore?: (e?: { detail: { rowCount: number; totalRowCount: number } }) => void;
  /**
   * Fired when the body of the table is scrolled.
   */
  onTableScroll?: (e) => (e?: CustomEvent<{ rows: Record<string, any>[]; rowElements: HTMLCollection }>) => void;
  // default components
  /**
   * Component that will be rendered when the table is not loading and has no data.
   */
  NoDataComponent?: ComponentType<any>;
  /**
   * Component that will be rendered when the table is loading and has no data.
   */
  LoadingComponent?: ComponentType<any>;

  /**
   * Exposes the internal table instance.
   * This object will contain all [instance properties](https://react-table.tanstack.com/docs/api/useTable#instance-properties)
   * of the `useTable` hook and all instance properties from `useColumnOrder`, `useExpanded`, `useFilters`,
   * `useGlobalFilter`, `useGroupBy`,`useResizeColumns`, `useRowSelect` and `useSortBy` plugin hooks.
   *
   * **Note**: Use this prop with care, some properties might have an impact on the internal `AnalyticalTable` implementation.
   */
  tableInstance?: Ref<Record<string, any>>;
}

const useStyles = createUseStyles(styles, { name: 'AnalyticalTable' });
/**
 * The `AnalyticalTable` provides a set of convenient functions for responsive table design, including virtualization of rows and columns, infinite scrolling and customizable columns that will, unless otherwise defined, distribute the available space equally among themselves.
 * It also provides several possibilities for working with the data, including sorting, filtering, grouping and aggregation.
 */
const AnalyticalTable = forwardRef((props: AnalyticalTablePropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    alternateRowColor,
    alwaysShowSubComponent,
    adjustTableHeightOnPopIn,
    className,
    columnOrder,
    columns,
    extension,
    filterable,
    globalFilterValue,
    groupBy,
    groupable,
    header,
    highlightField,
    infiniteScroll,
    infiniteScrollThreshold,
    isTreeTable,
    loading,
    markNavigatedRow,
    minRows,
    noDataText,
    overscanCount,
    overscanCountHorizontal,
    portalContainer,
    reactTableOptions,
    renderRowSubComponent,
    rowHeight,
    scaleWidthMode,
    selectedRowIds,
    selectionBehavior,
    selectionMode,
    showOverlay,
    sortable,
    style,
    subRowsKey,
    tableHooks,
    tableInstance,
    visibleRowCountMode,
    visibleRows,
    withNavigationHighlight,
    withRowHighlight,
    onGroup,
    onLoadMore,
    onRowClick,
    onRowExpandChange,
    onRowSelected,
    onSort,
    onTableScroll,
    LoadingComponent,
    NoDataComponent,
    ...rest
  } = props;
  const uniqueId = useIsomorphicId();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const titleBarId = useRef(`titlebar-${uniqueId}`).current;
  const invalidTableTextId = useRef(`invalidTableText-${uniqueId}`).current;

  const classes = useStyles();

  const [analyticalTableRef, reactWindowRef] = useTableScrollHandles(ref);
  const tableRef: RefObject<DivWithCustomScrollProp> = useRef();

  const isRtl = useIsRTL(analyticalTableRef);

  const getSubRows = useCallback((row) => row.subRows || row[subRowsKey] || [], [subRowsKey]);

  const data = useMemo(() => {
    if (props.data.length === 0) {
      return props.data;
    }
    if (minRows > props.data.length) {
      const missingRows: number = minRows - props.data.length;
      const emptyRows = Array.from({ length: missingRows }, (v, i) => i).map(() => ({ emptyRow: true }));

      return [...props.data, ...emptyRows];
    }
    return props.data;
  }, [props.data, minRows]);

  const invalidTableA11yText = i18nBundle.getText(INVALID_TABLE);
  const tableInstanceRef = useRef<Record<string, any>>(null);
  tableInstanceRef.current = useTable(
    {
      columns,
      data,
      defaultColumn: DefaultColumn,
      orderByFn,
      getSubRows,
      stateReducer,
      disableFilters: !filterable,
      disableSortBy: !sortable,
      disableGroupBy: isTreeTable || renderRowSubComponent ? true : !groupable,
      selectSubRows: false,
      webComponentsReactProperties: {
        translatableTexts: {
          expandA11yText: i18nBundle.getText(EXPAND_PRESS_SPACE),
          collapseA11yText: i18nBundle.getText(COLLAPSE_PRESS_SPACE),
          selectA11yText: i18nBundle.getText(SELECT_PRESS_SPACE),
          unselectA11yText: i18nBundle.getText(UNSELECT_PRESS_SPACE),
          expandNodeA11yText: i18nBundle.getText(EXPAND_NODE),
          collapseNodeA11yText: i18nBundle.getText(COLLAPSE_NODE)
        },
        tagNamesWhichShouldNotSelectARow,
        tableRef,
        selectionMode,
        selectionBehavior,
        classes,
        onRowSelected,
        onRowClick,
        onRowExpandChange,
        isTreeTable,
        alternateRowColor,
        scaleWidthMode,
        loading,
        withRowHighlight,
        highlightField,
        withNavigationHighlight,
        markNavigatedRow,
        renderRowSubComponent,
        alwaysShowSubComponent,
        reactWindowRef,
        showOverlay,
        uniqueId
      },
      ...reactTableOptions
    },
    useFilters,
    useGlobalFilter,
    useColumnOrder,
    useGroupBy,
    useSortBy,
    useExpanded,
    useRowSelect,
    useResizeColumns,
    useRowSelectionColumn,
    useSingleRowStateSelection,
    useRowHighlight,
    useRowNavigationIndicators,
    useDynamicColumnWidths,
    useStyling,
    useToggleRowExpand,
    useA11y,
    usePopIn,
    useVisibleColumnsWidth,
    useKeyboardNavigation,
    ...tableHooks
  );

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    state: tableState,
    columns: tableInternalColumns,
    setColumnOrder,
    dispatch,
    totalColumnsWidth,
    visibleColumns,
    visibleColumnsWidth,
    setGroupBy,
    setGlobalFilter
  } = tableInstanceRef.current;

  if (tableInstance && {}.hasOwnProperty.call(tableInstance, 'current')) {
    (tableInstance as MutableRefObject<Record<string, any>>).current = tableInstanceRef.current;
  }
  if (typeof tableInstance === 'function') {
    tableInstance(tableInstanceRef.current);
  }

  const titleBarRef = useRef(null);
  const extensionRef = useRef(null);
  const headerRef = useRef(null);

  const extensionsHeight =
    (titleBarRef.current?.offsetHeight ?? 0) +
    (extensionRef.current?.offsetHeight ?? 0) +
    (headerRef.current?.offsetHeight ?? 0);

  const calcRowHeight = parseInt(
    getComputedStyle(tableRef.current ?? document.body).getPropertyValue('--sapWcrAnalyticalTableRowHeight') || '44'
  );
  const internalRowHeight = rowHeight ?? calcRowHeight;
  const popInRowHeight =
    tableState?.popInColumns?.length > 0
      ? internalRowHeight + tableState.popInColumns.length * (internalRowHeight + 16)
      : internalRowHeight;

  const internalVisibleRowCount = tableState.visibleRows ?? visibleRows;

  const updateTableClientWidth = useCallback(() => {
    if (tableRef.current) {
      dispatch({ type: 'TABLE_RESIZE', payload: { tableClientWidth: tableRef.current.clientWidth } });
    }
  }, [tableRef.current]);

  const updateRowsCount = useCallback(() => {
    if (visibleRowCountMode === TableVisibleRowCountMode.Auto && analyticalTableRef.current?.parentElement) {
      const parentElement = analyticalTableRef.current?.parentElement;
      const tableYPosition =
        parentElement &&
        getComputedStyle(parentElement).position === 'relative' &&
        analyticalTableRef.current?.offsetTop
          ? analyticalTableRef.current?.offsetTop
          : 0;
      const parentHeight = parentElement?.getBoundingClientRect().height;
      const tableHeight = parentHeight ? parentHeight - tableYPosition : 0;
      const rowCount = Math.max(1, Math.floor((tableHeight - extensionsHeight) / popInRowHeight));
      dispatch({
        type: 'VISIBLE_ROWS',
        payload: { visibleRows: rowCount }
      });
    }
  }, [
    analyticalTableRef.current?.parentElement?.getBoundingClientRect().height,
    analyticalTableRef.current?.getBoundingClientRect().y,
    extensionsHeight,
    popInRowHeight,
    visibleRowCountMode
  ]);

  useEffect(() => {
    setGlobalFilter(globalFilterValue);
  }, [globalFilterValue, setGlobalFilter]);

  useEffect(() => {
    const debouncedWidthObserverFn = debounce(updateTableClientWidth, 500);
    const tableWidthObserver = new ResizeObserver(debouncedWidthObserverFn);
    tableWidthObserver.observe(tableRef.current);

    const debouncedHeightObserverFn = debounce(updateRowsCount, 500);
    const parentHeightObserver = new ResizeObserver(debouncedHeightObserverFn);
    parentHeightObserver.observe(analyticalTableRef.current?.parentElement);
    return () => {
      debouncedHeightObserverFn.cancel();
      debouncedWidthObserverFn.cancel();
      tableWidthObserver.disconnect();
      parentHeightObserver.disconnect();
    };
  }, [updateTableClientWidth, updateRowsCount]);

  useIsomorphicLayoutEffect(() => {
    dispatch({ type: 'IS_RTL', payload: { isRtl } });
  }, [isRtl]);

  useIsomorphicLayoutEffect(() => {
    updateTableClientWidth();
  }, [updateTableClientWidth]);

  useIsomorphicLayoutEffect(() => {
    updateRowsCount();
  }, [updateRowsCount]);

  useEffect(() => {
    if (tableState.visibleRows !== undefined && visibleRowCountMode === TableVisibleRowCountMode.Fixed) {
      dispatch({
        type: 'VISIBLE_ROWS',
        payload: { visibleRows: undefined }
      });
    }
  }, [visibleRowCountMode, tableState.visibleRows]);

  useEffect(() => {
    setGroupBy(groupBy);
  }, [groupBy, setGroupBy]);

  useEffect(() => {
    dispatch({ type: 'SET_SELECTED_ROW_IDS', payload: { selectedRowIds } });
  }, [selectedRowIds]);

  useEffect(() => {
    if (tableState?.interactiveRowsHavePopIn && (!tableState?.popInColumns || tableState?.popInColumns?.length === 0)) {
      dispatch({ type: 'WITH_POPIN', payload: false });
    }
  }, [tableState?.interactiveRowsHavePopIn, tableState?.popInColumns?.length]);

  const tableBodyHeight = useMemo(() => {
    const rowNum = rows.length < internalVisibleRowCount ? Math.max(rows.length, minRows) : internalVisibleRowCount;
    const rowHeight =
      visibleRowCountMode === TableVisibleRowCountMode.Auto ||
      tableState?.interactiveRowsHavePopIn ||
      adjustTableHeightOnPopIn
        ? popInRowHeight
        : internalRowHeight;
    return rowHeight * rowNum;
  }, [
    internalRowHeight,
    rows.length,
    internalVisibleRowCount,
    minRows,
    popInRowHeight,
    visibleRowCountMode,
    tableState?.interactiveRowsHavePopIn,
    adjustTableHeightOnPopIn
  ]);

  // scroll bar detection
  useEffect(() => {
    const visibleRowCount =
      rows.length < internalVisibleRowCount ? Math.max(rows.length, minRows) : internalVisibleRowCount;
    if (popInRowHeight !== internalRowHeight) {
      dispatch({
        type: 'TABLE_SCROLLING_ENABLED',
        payload: { isScrollable: visibleRowCount * popInRowHeight > tableBodyHeight || rows.length > visibleRowCount }
      });
    } else {
      dispatch({ type: 'TABLE_SCROLLING_ENABLED', payload: { isScrollable: rows.length > visibleRowCount } });
    }
  }, [rows.length, minRows, internalVisibleRowCount, popInRowHeight, tableBodyHeight]);

  const noDataStyles = {
    height: `${tableBodyHeight}px`,
    width: totalColumnsWidth ? `${totalColumnsWidth}px` : '100%'
  };

  const onGroupByChanged = useCallback(
    (e) => {
      const { column, isGrouped } = e.detail;
      let groupedColumns = [];
      if (isGrouped) {
        groupedColumns = [...tableState.groupBy, column.id];
      } else {
        groupedColumns = tableState.groupBy.filter((group) => group !== column.id);
      }
      setGroupBy(groupedColumns);
      onGroup(
        enrichEventWithDetails(e, {
          column,
          groupedColumns
        })
      );
    },
    [tableState.groupBy, onGroup, setGroupBy]
  );

  useEffect(() => {
    if (columnOrder?.length > 0) {
      setColumnOrder(columnOrder);
    }
  }, [columnOrder]);

  const [dragOver, handleDragEnter, handleDragStart, handleDragOver, handleOnDrop, handleOnDragEnd] = useDragAndDrop(
    props,
    isRtl,
    setColumnOrder,
    tableState.columnOrder,
    tableState.columnResizing,
    tableInternalColumns
  );

  const { onColumnsReordered: _0, data: _1, ...propsWithoutOmitted } = rest;

  const inlineStyle = useMemo(() => {
    const tableStyles = {
      maxWidth: '100%',
      overflowX: 'auto',
      display: 'flex',
      flexDirection: 'column'
    };
    if (!!rowHeight) {
      tableStyles['--sapWcrAnalyticalTableRowHeight'] = `${rowHeight}px`;
    }

    if (tableState.tableClientWidth > 0) {
      const styles = {
        ...tableStyles,
        ...style
      } as CSSProperties;

      if (totalColumnsWidth < tableState.tableClientWidth) {
        return { ...styles, borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}` };
      }
      return styles;
    }
    return {
      ...tableStyles,
      ...style,
      visibility: 'hidden'
    } as CSSProperties;
  }, [tableState.tableClientWidth, style, rowHeight, totalColumnsWidth]);

  const parentRef: RefObject<DivWithCustomScrollProp> = useRef(null);

  const verticalScrollBarRef: RefObject<DivWithCustomScrollProp> = useRef(null);

  const handleBodyScroll = (e) => {
    if (typeof onTableScroll === 'function') {
      onTableScroll(e);
    }
    if (verticalScrollBarRef.current && verticalScrollBarRef.current.scrollTop !== parentRef.current.scrollTop) {
      if (!parentRef.current.isExternalVerticalScroll) {
        verticalScrollBarRef.current.scrollTop = parentRef.current.scrollTop;
        verticalScrollBarRef.current.isExternalVerticalScroll = true;
      }
      parentRef.current.isExternalVerticalScroll = false;
    }
  };

  const handleVerticalScrollBarScroll = () => {
    if (!verticalScrollBarRef.current.isExternalVerticalScroll) {
      parentRef.current.scrollTop = verticalScrollBarRef.current.scrollTop;
      parentRef.current.isExternalVerticalScroll = true;
    }
    verticalScrollBarRef.current.isExternalVerticalScroll = false;
  };

  const tableClasses = clsx(
    classes.table,
    GlobalStyleClasses.sapScrollBar,
    withNavigationHighlight && classes.hasNavigationIndicator
  );

  return (
    <>
      <div className={className} style={inlineStyle} ref={analyticalTableRef} {...propsWithoutOmitted}>
        {header && (
          <TitleBar ref={titleBarRef} titleBarId={titleBarId}>
            {header}
          </TitleBar>
        )}
        {extension && <div ref={extensionRef}>{extension}</div>}
        <FlexBox
          className={classes.tableContainerWithScrollBar}
          data-component-name="AnalyticalTableContainerWithScrollbar"
        >
          {showOverlay && (
            <>
              <span id={invalidTableTextId} className={classes.hiddenA11yText} aria-hidden>
                {invalidTableA11yText}
              </span>
              <div
                tabIndex={0}
                aria-labelledby={`${titleBarId} ${invalidTableTextId}`}
                role="region"
                data-component-name="AnalyticalTableOverlay"
                className={classes.overlay}
              />
            </>
          )}
          <div
            aria-labelledby={titleBarId}
            {...getTableProps()}
            tabIndex={showOverlay ? -1 : 0}
            role="grid"
            aria-rowcount={rows.length}
            aria-colcount={visibleColumns.length}
            data-per-page={internalVisibleRowCount}
            data-component-name="AnalyticalTableContainer"
            ref={tableRef}
            data-native-scrollbar={props['data-native-scrollbar']}
            className={tableClasses}
          >
            <div className={classes.tableHeaderBackgroundElement} />
            {headerGroups.map((headerGroup) => {
              let headerProps: Record<string, unknown> = {};
              if (headerGroup.getHeaderGroupProps) {
                headerProps = headerGroup.getHeaderGroupProps();
              }

              return (
                tableRef.current && (
                  <ColumnHeaderContainer
                    ref={headerRef}
                    key={headerProps.key as string}
                    reactWindowRef={reactWindowRef}
                    tableRef={tableRef}
                    resizeInfo={tableState.columnResizing}
                    visibleColumnsWidth={visibleColumnsWidth}
                    headerProps={headerProps}
                    headerGroup={headerGroup}
                    overscanCountHorizontal={overscanCountHorizontal}
                    onSort={onSort}
                    onGroupByChanged={onGroupByChanged}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDrop={handleOnDrop}
                    onDragEnter={handleDragEnter}
                    onDragEnd={handleOnDragEnd}
                    dragOver={dragOver}
                    isRtl={isRtl}
                    portalContainer={portalContainer}
                  />
                )
              );
            })}
            {loading && props.data?.length > 0 && <LoadingComponent style={{ width: `${totalColumnsWidth}px` }} />}
            {loading && props.data?.length === 0 && (
              <TablePlaceholder
                isRtl={isRtl}
                columns={visibleColumns}
                rows={props.minRows}
                style={noDataStyles}
                rowHeight={internalRowHeight}
                tableWidth={totalColumnsWidth}
              />
            )}
            {!loading && props.data?.length === 0 && (
              <NoDataComponent noDataText={noDataText} className={classes.noDataContainer} style={noDataStyles} />
            )}
            {props.data?.length > 0 && tableRef.current && (
              <VirtualTableBodyContainer
                tableBodyHeight={tableBodyHeight}
                totalColumnsWidth={totalColumnsWidth}
                parentRef={parentRef}
                classes={classes}
                infiniteScroll={infiniteScroll}
                infiniteScrollThreshold={infiniteScrollThreshold}
                onLoadMore={onLoadMore}
                internalRowHeight={internalRowHeight}
                popInRowHeight={popInRowHeight}
                rows={rows}
                handleExternalScroll={handleBodyScroll}
                visibleRows={internalVisibleRowCount}
                dataLength={data?.length}
              >
                <VirtualTableBody
                  classes={classes}
                  prepareRow={prepareRow}
                  rows={rows}
                  minRows={minRows}
                  reactWindowRef={reactWindowRef}
                  isTreeTable={isTreeTable}
                  internalRowHeight={internalRowHeight}
                  popInRowHeight={popInRowHeight}
                  visibleRows={internalVisibleRowCount}
                  alternateRowColor={alternateRowColor}
                  overscanCount={overscanCount}
                  tableRef={tableRef}
                  parentRef={parentRef}
                  visibleColumns={visibleColumns}
                  visibleColumnsWidth={visibleColumnsWidth}
                  overscanCountHorizontal={overscanCountHorizontal}
                  renderRowSubComponent={renderRowSubComponent}
                  alwaysShowSubComponent={alwaysShowSubComponent}
                  markNavigatedRow={markNavigatedRow}
                  isRtl={isRtl}
                  subComponentsHeight={tableState.subComponentsHeight}
                  dispatch={dispatch}
                />
              </VirtualTableBodyContainer>
            )}
          </div>
          {(tableState.isScrollable === undefined || tableState.isScrollable) && (
            <VerticalScrollbar
              tableBodyHeight={tableBodyHeight}
              internalRowHeight={internalRowHeight}
              popInRowHeight={popInRowHeight}
              tableRef={tableRef}
              minRows={minRows}
              rows={rows}
              handleVerticalScrollBarScroll={handleVerticalScrollBarScroll}
              ref={verticalScrollBarRef}
              data-native-scrollbar={props['data-native-scrollbar']}
            />
          )}
        </FlexBox>
        {visibleRowCountMode === TableVisibleRowCountMode.Interactive && (
          <VerticalResizer
            popInRowHeight={popInRowHeight}
            hasPopInColumns={tableState?.popInColumns?.length > 0}
            analyticalTableRef={analyticalTableRef}
            dispatch={dispatch}
            extensionsHeight={extensionsHeight}
            internalRowHeight={internalRowHeight}
            portalContainer={portalContainer}
          />
        )}
      </div>
      <Text aria-hidden="true" id={`smartScaleModeHelper-${uniqueId}`} className={classes.hiddenSmartColMeasure}>
        {''}
      </Text>
    </>
  );
});

AnalyticalTable.displayName = 'AnalyticalTable';
AnalyticalTable.defaultProps = {
  infiniteScrollThreshold: 20,
  loading: false,
  sortable: true,
  filterable: false,
  groupable: false,
  selectionMode: TableSelectionMode.None,
  selectionBehavior: TableSelectionBehavior.Row,
  scaleWidthMode: TableScaleWidthMode.Default,
  data: [],
  columns: [],
  minRows: 5,
  groupBy: [],
  NoDataComponent: DefaultNoDataComponent,
  LoadingComponent: DefaultLoadingComponent,
  noDataText: 'No Data',
  reactTableOptions: {},
  tableHooks: [],
  visibleRows: 15,
  subRowsKey: 'subRows',
  highlightField: 'status',
  markNavigatedRow: () => false,
  selectedRowIds: {},
  onGroup: () => {},
  onRowExpandChange: () => {},
  onColumnsReordered: () => {},
  isTreeTable: false,
  alternateRowColor: false,
  overscanCountHorizontal: 5,
  visibleRowCountMode: TableVisibleRowCountMode.Fixed,
  alwaysShowSubComponent: false,
  portalContainer: document.body
};

export { AnalyticalTable };

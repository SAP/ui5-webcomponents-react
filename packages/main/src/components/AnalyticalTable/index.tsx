'use client';

import { useVirtualizer } from '@tanstack/react-virtual';
import {
  debounce,
  deprecationNotice,
  enrichEventWithDetails,
  useI18nBundle,
  useIsomorphicId,
  useIsomorphicLayoutEffect,
  useIsRTL
} from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ComponentType, CSSProperties, MutableRefObject, ReactNode, Ref } from 'react';
import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import type { PluginHook } from 'react-table';
import {
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
import type {
  AnalyticalTableScrollMode,
  TableScaleWidthMode,
  TableSelectionBehavior,
  TableSelectionMode,
  TableVisibleRowCountMode,
  TextAlign,
  ValueState,
  VerticalAlign
} from '../../enums/index.js';
import {
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableVisibleRowCountMode,
  AnalyticalTableSubComponentsBehavior,
  GlobalStyleClasses
} from '../../enums/index.js';
import {
  COLLAPSE_NODE,
  COLLAPSE_PRESS_SPACE,
  EXPAND_NODE,
  EXPAND_PRESS_SPACE,
  FILTERED,
  GROUPED,
  INVALID_TABLE,
  SELECT_PRESS_SPACE,
  UNSELECT_PRESS_SPACE,
  SELECT_ALL,
  DESELECT_ALL
} from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../interfaces/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { Text } from '../Text/index.js';
import styles from './AnayticalTable.jss.js';
import { ColumnHeaderContainer } from './ColumnHeader/ColumnHeaderContainer.js';
import { DefaultColumn } from './defaults/Column/index.js';
import { DefaultLoadingComponent } from './defaults/LoadingComponent/index.js';
import { TablePlaceholder } from './defaults/LoadingComponent/TablePlaceholder.js';
import { DefaultNoDataComponent } from './defaults/NoDataComponent/index.js';
import { useA11y } from './hooks/useA11y.js';
import { useColumnDragAndDrop } from './hooks/useDragAndDrop.js';
import { useDynamicColumnWidths } from './hooks/useDynamicColumnWidths.js';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation.js';
import { usePopIn } from './hooks/usePopIn.js';
import { useResizeColumnsConfig } from './hooks/useResizeColumnsConfig.js';
import { useRowHighlight } from './hooks/useRowHighlight.js';
import { useRowNavigationIndicators } from './hooks/useRowNavigationIndicator.js';
import { useRowSelectionColumn } from './hooks/useRowSelectionColumn.js';
import { useSelectionChangeCallback } from './hooks/useSelectionChangeCallback.js';
import { useSingleRowStateSelection } from './hooks/useSingleRowStateSelection.js';
import { useStyling } from './hooks/useStyling.js';
import { useTableScrollHandles } from './hooks/useTableScrollHandles.js';
import { useToggleRowExpand } from './hooks/useToggleRowExpand.js';
import { useVisibleColumnsWidth } from './hooks/useVisibleColumnsWidth.js';
import { VerticalScrollbar } from './scrollbars/VerticalScrollbar.js';
import { VirtualTableBody } from './TableBody/VirtualTableBody.js';
import { VirtualTableBodyContainer } from './TableBody/VirtualTableBodyContainer.js';
import { stateReducer } from './tableReducer/stateReducer.js';
import { TitleBar } from './TitleBar/index.js';
import { getRowHeight, getSubRowsByString, tagNamesWhichShouldNotSelectARow } from './util/index.js';
import { VerticalResizer } from './VerticalResizer.js';

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
   * String or custom sort function.
   *
   * Supported String Values:
   * * `basic`
   * * `datetime`
   * * `alphanumeric`
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
  /**
   * Allows passing a custom string for the internal width calculation of custom cells for `scaleWidthMode` `Grow` and `Smart`.
   *
   * You can find out more about it here [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-analyticaltable-recipes--docs#how-to-scale-custom-cells).
   *
   * __Note:__ This property has no effect when used with `AnalyticalTableScaleWidthMode.Default`.
   *
   * @since 1.22.0
   */
  scaleWidthModeOptions: ScaleWidthModeOptions;

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
   * __Note:__ When `"Auto"` is enabled, we recommend to use a fixed height for the outer container.
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
   * __Note:__ Custom cells with components instead of text as children are ignored by the `Smart` and `Grow` modes. To support them you can use the `scaleWidthModeOptions` column option.
   * __Note:__ For performance reasons, the `Smart` and `Grow` modes base their calculation for table cell width on a subset of column cells. If the first 20 cells of a column are significantly smaller than the rest of the column cells, the content may still not be fully displayed for all cells.
   *
   */
  scaleWidthMode?: AnalyticalTableScaleWidthMode | keyof typeof AnalyticalTableScaleWidthMode | TableScaleWidthMode;
  /**
   * Defines the number of the CSS `scaleX(sx: number)` function. `sx` is representing the abscissa of the scaling vector.
   *
   * __Note:__ As of `v1.20.0` this prop has no effect, since scaling is now supported out of the box.
   *
   * @deprecated: This prop has no effect, since scaling is now supported out of the box. It will be removed with our next major release.
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
   * You can use this prob to add custom hooks to the table.
   */
  tableHooks?: PluginHook<any>[];
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
   *
   * __Default:__ `"Expandable"`
   *
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

// When a sorted column is removed from the visible columns array (e.g. when "popped-in"), it doesn't clean up the sorted columns leading to an undefined `sortType`.
const sortTypesFallback = {
  undefined: () => undefined
};

const useStyles = createUseStyles(styles, { name: 'AnalyticalTable' });
/**
 * The `AnalyticalTable` provides a set of convenient functions for responsive table design, including virtualization of rows and columns, infinite scrolling and customizable columns that will, unless otherwise defined, distribute the available space equally among themselves.
 * It also provides several possibilities for working with the data, including sorting, filtering, grouping and aggregation.
 */
const AnalyticalTable = forwardRef<AnalyticalTableDomRef, AnalyticalTablePropTypes>((props, ref) => {
  const {
    alternateRowColor,
    adjustTableHeightOnPopIn,
    className,
    columnOrder,
    columns,
    data: rawData,
    extension,
    filterable,
    globalFilterValue,
    groupBy,
    groupable,
    header,
    headerRowHeight,
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
    retainColumnWidth,
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
    subComponentsBehavior,
    subRowsKey,
    tableHooks,
    tableInstance,
    visibleRowCountMode,
    visibleRows,
    withNavigationHighlight,
    withRowHighlight,
    onColumnsReorder,
    onGroup,
    onLoadMore,
    onRowClick,
    onRowExpandChange,
    onRowSelect,
    onSort,
    onTableScroll,
    LoadingComponent,
    NoDataComponent,
    alwaysShowSubComponent: _omit,
    ...rest
  } = props;

  useEffect(() => {
    if (props.alwaysShowSubComponent != undefined) {
      deprecationNotice(
        'alwaysShowSubComponent',
        '`alwaysShowSubComponent` is deprecated. Please use `subComponentsBehavior` instead!'
      );
    }
  }, [props.alwaysShowSubComponent]);

  const alwaysShowSubComponent =
    subComponentsBehavior === AnalyticalTableSubComponentsBehavior.Visible ||
    subComponentsBehavior === AnalyticalTableSubComponentsBehavior.IncludeHeight ||
    props.alwaysShowSubComponent;

  const uniqueId = useIsomorphicId();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const titleBarId = useRef(`titlebar-${uniqueId}`).current;
  const invalidTableTextId = useRef(`invalidTableText-${uniqueId}`).current;

  const classes = useStyles();

  const [analyticalTableRef, scrollToRef] = useTableScrollHandles(ref);
  const tableRef = useRef<DivWithCustomScrollProp>(null);

  const isRtl = useIsRTL(analyticalTableRef);

  const getSubRows = useCallback((row) => getSubRowsByString(subRowsKey, row) || [], [subRowsKey]);

  const invalidTableA11yText = i18nBundle.getText(INVALID_TABLE);
  const tableInstanceRef = useRef<Record<string, any>>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  tableInstanceRef.current = useTable(
    {
      columns,
      data: rawData,
      defaultColumn: DefaultColumn,
      getSubRows,
      stateReducer,
      disableFilters: !filterable,
      disableSortBy: !sortable,
      disableGroupBy: isTreeTable || (!alwaysShowSubComponent && renderRowSubComponent) ? true : !groupable,
      selectSubRows: false,
      sortTypes: sortTypesFallback,
      webComponentsReactProperties: {
        translatableTexts: {
          selectAllText: i18nBundle.getText(SELECT_ALL),
          deselectAllText: i18nBundle.getText(DESELECT_ALL),
          expandA11yText: i18nBundle.getText(EXPAND_PRESS_SPACE),
          collapseA11yText: i18nBundle.getText(COLLAPSE_PRESS_SPACE),
          selectA11yText: i18nBundle.getText(SELECT_PRESS_SPACE),
          unselectA11yText: i18nBundle.getText(UNSELECT_PRESS_SPACE),
          expandNodeA11yText: i18nBundle.getText(EXPAND_NODE),
          collapseNodeA11yText: i18nBundle.getText(COLLAPSE_NODE),
          filteredA11yText: i18nBundle.getText(FILTERED),
          groupedA11yText: i18nBundle.getText(GROUPED)
        },
        tagNamesWhichShouldNotSelectARow,
        tableRef,
        selectionMode,
        selectionBehavior,
        classes,
        onRowSelect: onRowSelect,
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
        scrollToRef,
        showOverlay,
        uniqueId,
        subRowsKey,
        onColumnsReorder
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
    useResizeColumnsConfig,
    useRowSelectionColumn,
    useSingleRowStateSelection,
    useSelectionChangeCallback,
    useRowHighlight,
    useRowNavigationIndicators,
    useDynamicColumnWidths,
    useStyling,
    useToggleRowExpand,
    useA11y,
    usePopIn,
    useVisibleColumnsWidth,
    useKeyboardNavigation,
    useColumnDragAndDrop,
    ...tableHooks
  );

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    state: tableState,
    setColumnOrder,
    dispatch,
    totalColumnsWidth,
    visibleColumns,
    visibleColumnsWidth,
    setGroupBy,
    setGlobalFilter
  } = tableInstanceRef.current;

  const includeSubCompRowHeight =
    !!renderRowSubComponent &&
    subComponentsBehavior === AnalyticalTableSubComponentsBehavior.IncludeHeight &&
    !!tableState.subComponentsHeight &&
    !!Object.keys(tableState.subComponentsHeight);

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

  const internalRowHeight = getRowHeight(rowHeight, tableRef);
  const internalHeaderRowHeight = headerRowHeight ?? internalRowHeight;
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
    if (visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Auto && analyticalTableRef.current?.parentElement) {
      const parentElement = analyticalTableRef.current?.parentElement;
      const tableYPosition =
        parentElement &&
        getComputedStyle(parentElement).position === 'relative' &&
        analyticalTableRef.current?.offsetTop
          ? analyticalTableRef.current?.offsetTop
          : 0;
      const parentHeight = parentElement?.getBoundingClientRect().height;
      const tableHeight = parentHeight ? parentHeight - tableYPosition : 0;
      const bodyHeight = tableHeight - extensionsHeight;
      let subCompsRowCount = 0;
      if (includeSubCompRowHeight) {
        let localBodyHeight = 0;
        let i = 0;
        while (localBodyHeight < bodyHeight) {
          if (tableState.subComponentsHeight[i]) {
            localBodyHeight += tableState.subComponentsHeight[i].subComponentHeight + popInRowHeight;
          } else if (rows[i]) {
            localBodyHeight += popInRowHeight;
          } else {
            break;
          }
          if (localBodyHeight >= bodyHeight) {
            break;
          }
          subCompsRowCount++;
          i++;
        }
        dispatch({
          type: 'VISIBLE_ROWS',
          payload: { visibleRows: Math.max(1, subCompsRowCount) }
        });
      } else {
        const rowCount = Math.max(1, Math.floor(bodyHeight / popInRowHeight));
        dispatch({
          type: 'VISIBLE_ROWS',
          payload: { visibleRows: rowCount }
        });
      }
    }
  }, [
    analyticalTableRef.current?.parentElement?.getBoundingClientRect().height,
    analyticalTableRef.current?.getBoundingClientRect().y,
    extensionsHeight,
    popInRowHeight,
    visibleRowCountMode,
    includeSubCompRowHeight,
    tableState.subComponentsHeight
  ]);

  useEffect(() => {
    setGlobalFilter(globalFilterValue);
  }, [globalFilterValue, setGlobalFilter]);

  useEffect(() => {
    const debouncedWidthObserverFn = debounce(updateTableClientWidth, 60);
    const tableWidthObserver = new ResizeObserver(debouncedWidthObserverFn);
    tableWidthObserver.observe(tableRef.current);

    const debouncedHeightObserverFn = debounce(updateRowsCount, 60);
    const parentHeightObserver = new ResizeObserver(debouncedHeightObserverFn);
    if (analyticalTableRef.current?.parentElement) {
      parentHeightObserver.observe(analyticalTableRef.current?.parentElement);
    }
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
    if (tableState.visibleRows !== undefined && visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Fixed) {
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
      visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Auto ||
      tableState?.interactiveRowsHavePopIn ||
      adjustTableHeightOnPopIn
        ? popInRowHeight
        : internalRowHeight;

    if (includeSubCompRowHeight) {
      let initialBodyHeightWithSubComps = 0;
      for (let i = 0; i < rowNum; i++) {
        if (tableState.subComponentsHeight[i]) {
          initialBodyHeightWithSubComps += tableState.subComponentsHeight[i].subComponentHeight + rowHeight;
        } else if (rows[i]) {
          initialBodyHeightWithSubComps += rowHeight;
        }
      }
      return initialBodyHeightWithSubComps;
    }

    return rowHeight * rowNum;
  }, [
    internalRowHeight,
    rows.length,
    internalVisibleRowCount,
    minRows,
    popInRowHeight,
    visibleRowCountMode,
    tableState?.interactiveRowsHavePopIn,
    adjustTableHeightOnPopIn,
    includeSubCompRowHeight,
    tableState.subComponentsHeight
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
      let groupedColumns;
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

  const inlineStyle = useMemo(() => {
    const tableStyles = {
      maxWidth: '100%',
      overflowX: 'auto',
      display: 'flex',
      flexDirection: 'column'
    };
    if (!!rowHeight) {
      tableStyles['--_ui5wcr-AnalyticalTableRowHeight'] = `${rowHeight}px`;
      tableStyles['--_ui5wcr-AnalyticalTableHeaderRowHeight'] = `${rowHeight}px`;
    }
    if (!!headerRowHeight) {
      tableStyles['--_ui5wcr-AnalyticalTableHeaderRowHeight'] = `${headerRowHeight}px`;
    }

    if (tableState.tableClientWidth > 0) {
      return {
        ...tableStyles,
        ...style
      } as CSSProperties;
    }
    return {
      ...tableStyles,
      ...style,
      visibility: 'hidden'
    } as CSSProperties;
  }, [tableState.tableClientWidth, style, rowHeight, headerRowHeight]);

  useEffect(() => {
    if (retainColumnWidth && tableState.columnResizing?.isResizingColumn && tableState.tableColResized == null) {
      dispatch({ type: 'TABLE_COL_RESIZED', payload: true });
    }
    if (tableState.tableColResized && !retainColumnWidth) {
      dispatch({ type: 'TABLE_COL_RESIZED', payload: undefined });
    }
  }, [tableState.columnResizing, retainColumnWidth, tableState.tableColResized]);

  const parentRef = useRef<DivWithCustomScrollProp>(null);
  const verticalScrollBarRef = useRef<DivWithCustomScrollProp>(null);

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
    if (parentRef.current && !verticalScrollBarRef.current.isExternalVerticalScroll) {
      parentRef.current.scrollTop = verticalScrollBarRef.current.scrollTop;
      parentRef.current.isExternalVerticalScroll = true;
    }
    verticalScrollBarRef.current.isExternalVerticalScroll = false;
  };

  const columnVirtualizer = useVirtualizer({
    count: visibleColumnsWidth.length,
    getScrollElement: () => tableRef.current,
    estimateSize: useCallback((index) => visibleColumnsWidth[index], [visibleColumnsWidth]),
    horizontal: true,
    overscan: isRtl ? Infinity : overscanCountHorizontal,
    indexAttribute: 'data-column-index',
    // necessary as otherwise values are rounded which leads to wrong total width calculation
    measureElement: (el) => el.getBoundingClientRect().width
  });

  useEffect(() => {
    columnVirtualizer.measure();
  }, [columnVirtualizer, tableState.columnOrder, tableState.columnResizing]);

  const totalSize = columnVirtualizer.getTotalSize();
  const showVerticalEndBorder = tableState.tableClientWidth > totalSize;

  const tableClasses = clsx(
    classes.table,
    GlobalStyleClasses.sapScrollBar,
    withNavigationHighlight && classes.hasNavigationIndicator,
    showVerticalEndBorder && classes.showVerticalEndBorder
  );

  scrollToRef.current = {
    ...scrollToRef.current,
    horizontalScrollToOffset: columnVirtualizer.scrollToOffset,
    horizontalScrollToIndex: columnVirtualizer.scrollToIndex
  };

  return (
    <>
      <div className={className} style={inlineStyle} ref={analyticalTableRef} {...rest}>
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
            <div className={classes.tableBodyBackgroundElement} />
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
                    resizeInfo={tableState.columnResizing}
                    headerProps={headerProps}
                    headerGroup={headerGroup}
                    onSort={onSort}
                    onGroupByChanged={onGroupByChanged}
                    isRtl={isRtl}
                    portalContainer={portalContainer}
                    columnVirtualizer={columnVirtualizer}
                    uniqueId={uniqueId}
                    showVerticalEndBorder={showVerticalEndBorder}
                  />
                )
              );
            })}
            {loading && rawData?.length > 0 && <LoadingComponent style={{ width: `${totalColumnsWidth}px` }} />}
            {loading && rawData?.length === 0 && (
              <TablePlaceholder columns={visibleColumns} rows={minRows} style={noDataStyles} />
            )}
            {!loading && rawData?.length === 0 && (
              <NoDataComponent noDataText={noDataText} className={classes.noDataContainer} style={noDataStyles} />
            )}
            {rawData?.length > 0 && tableRef.current && (
              <VirtualTableBodyContainer
                rowCollapsedFlag={tableState.rowCollapsed}
                dispatch={dispatch}
                tableBodyHeight={tableBodyHeight}
                totalColumnsWidth={columnVirtualizer.getTotalSize()}
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
              >
                <VirtualTableBody
                  scrollContainerRef={scrollContainerRef}
                  classes={classes}
                  prepareRow={prepareRow}
                  rows={rows}
                  minRows={minRows}
                  scrollToRef={scrollToRef}
                  isTreeTable={isTreeTable}
                  internalRowHeight={internalRowHeight}
                  popInRowHeight={popInRowHeight}
                  visibleRows={internalVisibleRowCount}
                  alternateRowColor={alternateRowColor}
                  overscanCount={overscanCount}
                  parentRef={parentRef}
                  visibleColumns={visibleColumns}
                  renderRowSubComponent={renderRowSubComponent}
                  alwaysShowSubComponent={alwaysShowSubComponent}
                  markNavigatedRow={markNavigatedRow}
                  isRtl={isRtl}
                  subComponentsHeight={tableState.subComponentsHeight}
                  dispatch={dispatch}
                  columnVirtualizer={columnVirtualizer}
                  manualGroupBy={reactTableOptions?.manualGroupBy as boolean | undefined}
                  subRowsKey={subRowsKey}
                />
              </VirtualTableBodyContainer>
            )}
          </div>
          {(tableState.isScrollable === undefined || tableState.isScrollable) && (
            <VerticalScrollbar
              tableBodyHeight={tableBodyHeight}
              internalRowHeight={internalHeaderRowHeight}
              tableRef={tableRef}
              handleVerticalScrollBarScroll={handleVerticalScrollBarScroll}
              ref={verticalScrollBarRef}
              data-native-scrollbar={props['data-native-scrollbar']}
              scrollContainerRef={scrollContainerRef}
            />
          )}
        </FlexBox>
        {visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Interactive && (
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
  selectionMode: AnalyticalTableSelectionMode.None,
  selectionBehavior: AnalyticalTableSelectionBehavior.Row,
  scaleWidthMode: AnalyticalTableScaleWidthMode.Default,
  subComponentsBehavior: AnalyticalTableSubComponentsBehavior.Expandable,
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
  isTreeTable: false,
  alternateRowColor: false,
  overscanCountHorizontal: 5,
  visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Fixed
};

export { AnalyticalTable };

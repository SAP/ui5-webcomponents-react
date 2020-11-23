import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';
import { TableScaleWidthMode } from '@ui5/webcomponents-react/lib/TableScaleWidthMode';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import debounce from 'lodash/debounce';
import React, {
  ComponentType,
  CSSProperties,
  FC,
  forwardRef,
  ReactNode,
  ReactText,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react';
import {
  PluginHook,
  useColumnOrder,
  useExpanded,
  useFilters,
  useGroupBy,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable
} from 'react-table';
import { AnalyticalTableColumnDefinition } from '../../interfaces/AnalyticalTableColumnDefinition';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './AnayticalTable.jss';
import { ColumnHeaderContainer } from './ColumnHeader/ColumnHeaderContainer';
import { DefaultColumn } from './defaults/Column';
import { DefaultLoadingComponent } from './defaults/LoadingComponent';
import { TablePlaceholder } from './defaults/LoadingComponent/TablePlaceholder';
import { DefaultNoDataComponent } from './defaults/NoDataComponent';
import { useDragAndDrop } from './hooks/useDragAndDrop';
import { useDynamicColumnWidths } from './hooks/useDynamicColumnWidths';
import { useRowHighlight } from './hooks/useRowHighlight';
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
import { orderByFn } from './util';

interface DivWithCustomScrollProp extends HTMLDivElement {
  isExternalVerticalScroll?: boolean;
}

export interface TableProps extends Omit<CommonProps, 'title'> {
  /**
   * Defines the columns array where you can define the configuration for each column.<br />
   * __Note:__ Please look at the [AnalyticalTableColumnDefinition interface](#column-properties) for a full list of options.
   */
  columns: AnalyticalTableColumnDefinition[];
  /**
   * The data array that you want to display on the table.
   */
  data: Record<any, any>[];
  /**
   * Component or text rendered in the title section of the `AnalyticalTable`.<br />
   * __Note:__ If not set, it will be hidden.
   */
  title?: ReactText | ReactNode;
  /**
   * Extension section of the Table. If not set, no extension area will be rendered
   */
  extension?: ReactNode;

  // appearance
  /**
   * The minimum number of rows that are displayed. If the data contains less entries than `minRows`, it will be filled with empty rows.
   */
  minRows?: number;
  /**
   * The number of rows visible without going into overflow.<br />
   * __Note:__ If the data contains more entries than the `visibleRow` count, a vertical scrollbar is rendered and the table goes into overflow.
   */
  visibleRows?: number;
  /**
   * Indicates whether a loading indicator should be shown.<br />
   * __Note:__ If the data array is not empty and loading is set to `true` a `Loader` will be displayed underneath the header, otherwise a loading placeholder will be shown.
   * You can use your own placeholder by passing it to the `LoadingComponent` prop.
   */
  loading?: boolean;
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
   * Flag whether the table should add an extra column for displaying row highlights, based on the `highlightField` prop.
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

  // features
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
   * Defines the selection behavior of the table.<br />
   * - __"Row":__ A selection column is rendered along with the normal columns. The whole row is selectable.
   * - __"RowOnly":__ No selection column is rendered along with the normal columns. The whole row is selectable.
   * - __"RowSelector":__ The row is only selectable by clicking on the corresponding field in the selection column.
   */
  selectionBehavior?: TableSelectionBehavior;
  /**
   * Defines the `SelectionMode` of the table.<br />
   * - __"None":__ The rows are not selectable.
   * - __"SingleSelect":__ You can select only one row at once. Clicking on another row will unselect the previously selected row.
   * - __"MultiSelect":__ You can select multiple rows.
   */
  selectionMode?: TableSelectionMode;
  /**
   * Defines the column growing behaviour. Possible Values:
   *
   * - **Default**: Every column without fixed width gets the maximum available space of the table.
   * - **Smart**: Every column gets the space it needs for displaying the full header text. If all headers need more space than the available table width, horizontal scrolling will be enabled. If there is space left, columns with a long content will get more space until there is no more table space left.
   * - **Grow**: Every column gets the space it needs for displaying its full header text and full content of all cells. If it requires more space than the table has, horizontal scrolling will be enabled.
   *
   */
  scaleWidthMode?: TableScaleWidthMode;
  /**
   * Defines the columns order by their `accessor` or `id`.
   */
  columnOrder?: string[];
  /**
   * Defines whether infinite scroll is active.
   */
  infiniteScroll?: boolean;
  /**
   * The `infiniteScrollThreshold` defines at how many remaining rows the `onLoadMore` event should be fired.<br />
   * Example: Your initial dataset consists of 50 entries and you want to load more data when the user scrolled to the 40th row. Then you should set the `infiniteScrollThreshold` to 10.
   */
  infiniteScrollThreshold?: number;

  // events
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
  onRowSelected?: (e?: CustomEvent<{ allRowsSelected?: boolean; row?: unknown; isSelected?: boolean }>) => any;
  /**
   * Fired when a row is expanded or collapsed
   */
  onRowExpandChange?: (e?: CustomEvent<{ row: unknown; column: unknown }>) => any;
  /**
   * Fired when the columns order is changed.
   */
  onColumnsReordered?: (e?: CustomEvent<{ columnsNewOrder: string[]; column: unknown }>) => void;
  /**
   * Fired when the `infiniteScrollThreshold` is reached.
   */
  onLoadMore?: (e?: { detail: { rowCount: number } }) => void;
  /**
   * Additional options which will be passed to [react-table´s useTable hook](https://react-table.tanstack.com/docs/api/useTable#table-options)
   */
  reactTableOptions?: Record<string, unknown>;
  /**
   * You can use this prob to add custom hooks to the table.
   */
  tableHooks?: PluginHook<any>[];
  /**
   * Defines the key for nested rows. <br />
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

  // default components
  /**
   * Component that will be rendered when the table is not loading and has no data.
   */
  NoDataComponent?: ComponentType<any>;
  /**
   * Component that will be rendered when the table is loading and has no data.
   */
  LoadingComponent?: ComponentType<any>;
}

const useStyles = createComponentStyles(styles, { name: 'AnalyticalTable' });
/**
 * The `AnalyticalTable` provides a set of convenient functions for responsive table design, including virtualization of rows and columns, infinite scrolling and customizable columns that will, unless otherwise defined, distribute the available space equally among themselves.
 * It also provides several possibilities for working with the data, including sorting, filtering, grouping and aggregation.
 */
const AnalyticalTable: FC<TableProps> = forwardRef((props: TableProps, ref: Ref<HTMLDivElement>) => {
  const {
    columns,
    className,
    style,
    tooltip,
    title,
    loading,
    groupBy,
    selectionMode,
    selectionBehavior,
    onRowSelected,
    onSort,
    reactTableOptions,
    tableHooks,
    subRowsKey,
    onGroup,
    rowHeight,
    selectedRowIds,
    LoadingComponent,
    onRowExpandChange,
    noDataText,
    NoDataComponent,
    visibleRows,
    minRows,
    isTreeTable,
    alternateRowColor,
    overscanCount,
    overscanCountHorizontal,
    scaleWidthMode,
    withRowHighlight,
    highlightField,
    groupable,
    sortable,
    filterable,
    infiniteScroll,
    infiniteScrollThreshold,
    onLoadMore,
    extension,
    columnOrder,
    renderRowSubComponent
  } = props;

  const classes = useStyles();

  const [analyticalTableRef, reactWindowRef] = useTableScrollHandles(ref);
  const tableRef: RefObject<DivWithCustomScrollProp> = useRef();

  const getSubRows = useCallback((row) => row[subRowsKey] || [], [subRowsKey]);

  const data = useMemo(() => {
    if (minRows > props.data.length) {
      const missingRows: number = minRows - props.data.length;
      const emptyRows = Array.from({ length: missingRows }, (v, i) => i).map(() => ({ emptyRow: true }));

      return [...props.data, ...emptyRows];
    }
    return props.data;
  }, [props.data, minRows]);

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
    setGroupBy
  } = useTable(
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
        tableRef,
        selectionMode,
        selectionBehavior,
        classes,
        onRowSelected,
        onRowExpandChange,
        isTreeTable,
        alternateRowColor,
        scaleWidthMode,
        loading,
        withRowHighlight,
        highlightField,
        renderRowSubComponent
      },
      ...reactTableOptions
    },
    useFilters,
    useColumnOrder,
    useGroupBy,
    useSortBy,
    useExpanded,
    useRowSelect,
    useResizeColumns,
    useRowSelectionColumn,
    useSingleRowStateSelection,
    useRowHighlight,
    useDynamicColumnWidths,
    useStyling,
    useToggleRowExpand,
    useVisibleColumnsWidth,
    ...tableHooks
  );

  // scroll bar detection
  useEffect(() => {
    const visibleRowCount = rows.length < visibleRows ? Math.max(rows.length, minRows) : visibleRows;
    dispatch({ type: 'TABLE_SCROLLING_ENABLED', payload: { isScrollable: rows.length > visibleRowCount } });
  }, [rows.length, minRows, visibleRows]);

  const updateTableClientWidth = useCallback(() => {
    if (tableRef.current) {
      dispatch({ type: 'TABLE_RESIZE', payload: { tableClientWidth: tableRef.current.clientWidth } });
    }
  }, [tableRef.current]);

  useEffect(() => {
    // @ts-ignore
    const tableWidthObserver = new ResizeObserver(debounce(updateTableClientWidth, 500));
    tableWidthObserver.observe(tableRef.current);
    return () => {
      tableWidthObserver.disconnect();
    };
  }, [updateTableClientWidth]);

  useIsomorphicLayoutEffect(() => {
    updateTableClientWidth();
  }, [updateTableClientWidth]);

  useEffect(() => {
    setGroupBy(groupBy);
  }, [groupBy, setGroupBy]);

  useEffect(() => {
    dispatch({ type: 'SET_SELECTED_ROW_IDS', payload: { selectedRowIds } });
  }, [selectedRowIds]);

  const calcRowHeight = parseInt(
    getComputedStyle(tableRef.current ?? document.body).getPropertyValue('--sapWcrAnalyticalTableRowHeight') || '44'
  );

  const internalRowHeight = rowHeight ?? calcRowHeight;

  const tableBodyHeight = useMemo(() => {
    const rowNum = rows.length < visibleRows ? Math.max(rows.length, minRows) : visibleRows;
    return internalRowHeight * rowNum;
  }, [internalRowHeight, rows.length, visibleRows, minRows]);

  const noDataStyles = useMemo(() => {
    return {
      height: `${tableBodyHeight}px`,
      width: `${totalColumnsWidth}px`
    };
  }, [tableBodyHeight, totalColumnsWidth]);

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
    setColumnOrder,
    tableState.columnOrder,
    tableState.columnResizing,
    tableInternalColumns
  );

  const passThroughProps = usePassThroughHtmlProps(props, [
    'onSort',
    'onGroup',
    'onRowSelected',
    'onRowExpandChange',
    'onColumnsReordered',
    'onLoadMore'
  ]);

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

  const handleBodyScroll = () => {
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

  return (
    <div className={className} style={inlineStyle} title={tooltip} ref={analyticalTableRef} {...passThroughProps}>
      {title && <TitleBar>{title}</TitleBar>}
      {extension && <div>{extension}</div>}
      <FlexBox>
        <div
          {...getTableProps()}
          role="grid"
          aria-rowcount={rows.length}
          aria-colcount={tableInternalColumns.length}
          data-per-page={visibleRows}
          ref={tableRef}
          className={StyleClassHelper.of(classes.table, GlobalStyleClasses.sapScrollBar).className}
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
                  key={headerProps.key}
                  reactWindowRef={reactWindowRef}
                  tableRef={tableRef}
                  resizeInfo={tableState.columnResizing}
                  visibleColumnsWidth={visibleColumnsWidth}
                  headerProps={headerProps}
                  headerGroup={headerGroup}
                  overscanCountHorizontal={overscanCountHorizontal}
                  onSort={onSort}
                  onGroupBy={onGroupByChanged}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleOnDrop}
                  onDragEnter={handleDragEnter}
                  onDragEnd={handleOnDragEnd}
                  dragOver={dragOver}
                />
              )
            );
          })}
          {loading && props.data?.length > 0 && <LoadingComponent style={{ width: `${totalColumnsWidth}px` }} />}
          {loading && props.data?.length === 0 && (
            <TablePlaceholder
              columns={tableInternalColumns.filter(
                (col) => (col.isVisible ?? true) && !tableState.hiddenColumns.includes(col.accessor)
              )}
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
              rows={rows}
              handleExternalScroll={handleBodyScroll}
              visibleRows={visibleRows}
            >
              <VirtualTableBody
                classes={classes}
                prepareRow={prepareRow}
                rows={rows}
                minRows={minRows}
                reactWindowRef={reactWindowRef}
                isTreeTable={isTreeTable}
                internalRowHeight={internalRowHeight}
                visibleRows={visibleRows}
                alternateRowColor={alternateRowColor}
                overscanCount={overscanCount}
                tableRef={tableRef}
                parentRef={parentRef}
                visibleColumns={visibleColumns}
                visibleColumnsWidth={visibleColumnsWidth}
                overscanCountHorizontal={overscanCountHorizontal}
                renderRowSubComponent={renderRowSubComponent}
              />
            </VirtualTableBodyContainer>
          )}
        </div>
        {(tableState.isScrollable === undefined || tableState.isScrollable) && (
          <VerticalScrollbar
            internalRowHeight={internalRowHeight}
            tableRef={tableRef}
            minRows={minRows}
            rows={rows}
            handleVerticalScrollBarScroll={handleVerticalScrollBarScroll}
            ref={verticalScrollBarRef}
          />
        )}
      </FlexBox>
    </div>
  );
});

AnalyticalTable.displayName = 'AnalyticalTable';
AnalyticalTable.defaultProps = {
  infiniteScrollThreshold: 20,
  loading: false,
  sortable: true,
  filterable: false,
  groupable: false,
  selectionMode: TableSelectionMode.NONE,
  selectionBehavior: TableSelectionBehavior.ROW,
  scaleWidthMode: TableScaleWidthMode.Default,
  data: [],
  columns: [],
  title: null,
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
  selectedRowIds: {},
  onGroup: () => {},
  onRowExpandChange: () => {},
  onColumnsReordered: () => {},
  isTreeTable: false,
  alternateRowColor: false,
  overscanCountHorizontal: 5
};

export { AnalyticalTable };

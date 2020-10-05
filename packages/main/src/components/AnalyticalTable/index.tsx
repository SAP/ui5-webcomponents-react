import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
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
import { HorizontalScrollbar } from './scrollbars/HorizontalScrollbar';
import { VerticalScrollbar } from './scrollbars/VerticalScrollbar';
import { VirtualTableBody } from './TableBody/VirtualTableBody';
import { VirtualTableBodyContainer } from './TableBody/VirtualTableBodyContainer';
import { stateReducer } from './tableReducer/stateReducer';
import { TitleBar } from './TitleBar';
import { orderByFn } from './util';

export interface TableProps extends Omit<CommonProps, 'title'> {
  /**
   * Please look at the [AnalyticalTableColumnDefinition interface](#column-properties) for a full list of options.
   */
  columns: AnalyticalTableColumnDefinition[];
  data: Record<any, any>[];

  /**
   * Component or text of title section of the Table (if not set it will be hidden)
   */
  title?: ReactText | ReactNode;
  /**
   * Extension section of the Table. If not set, no extension area will be rendered
   */
  extension?: ReactNode;

  // appearance

  minRows?: number;
  visibleRows?: number;
  loading?: boolean;
  noDataText?: string;
  rowHeight?: number;
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
  filterable?: boolean;
  sortable?: boolean;
  groupable?: boolean;
  groupBy?: string[];
  selectionBehavior?: TableSelectionBehavior;
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
  columnOrder?: string[];
  infiniteScroll?: boolean;
  infiniteScrollThreshold?: number;

  // events
  onSort?: (e: CustomEvent<{ column: unknown; sortDirection: string }>) => void;
  onGroup?: (e: CustomEvent<{ column: unknown; groupedColumns: string[] }>) => void;
  onRowSelected?: (e?: CustomEvent<{ allRowsSelected?: boolean; row?: unknown; isSelected?: boolean }>) => any;
  onRowExpandChange?: (e?: CustomEvent<{ row: unknown; column: unknown }>) => any;
  onColumnsReordered?: (e?: CustomEvent<{ columnsNewOrder: string[]; column: unknown }>) => void;
  onLoadMore?: (e?: { detail: { rowCount: number } }) => void;
  /**
   * Additional options which will be passed to [react-table´s useTable hook](https://react-table.tanstack.com/docs/api/useTable#table-options)
   */
  reactTableOptions?: Record<string, unknown>;
  tableHooks?: PluginHook<any>[];
  subRowsKey?: string;
  /**
   * The key must consist of a valid `rowId` like `{ 2: true }` or `{ '0.2.0': true }` for nested rows.
   */
  selectedRowIds?: { [key: string]: boolean };
  isTreeTable?: boolean;
  /**
   * The amount of columns to load both behind and ahead of the current window range.
   */
  overscanCountHorizontal?: number;
  /**
   * The amount of rows to load both behind and ahead of the current window range.
   */
  overscanCount?: number;

  // default components
  NoDataComponent?: ComponentType<any>;
  LoadingComponent?: ComponentType<any>;
}

const useStyles = createComponentStyles(styles, { name: 'AnalyticalTable' });

/**
 * ### Usage Notes
 * By default, the `AnalyticalTable` will not select any rows after clicking on active elements like a `Button`, `Link`,
 * etc. <br />
 * In case you want to select the row anyways, you can "mark" the event to allow such a behaviour. <br />
 * Example: `<Link onClick={(e) => {e.markerAllowTableRowSelection = true;}>My Link Text</Link>`
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
    highlightField = 'status',
    groupable,
    sortable,
    filterable,
    infiniteScroll,
    infiniteScrollThreshold = 20,
    onLoadMore,
    extension,
    columnOrder
  } = props;

  const classes = useStyles();

  const [analyticalTableRef, reactWindowRef] = useTableScrollHandles(ref);
  const tableRef: RefObject<HTMLDivElement> = useRef();

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
      disableGroupBy: isTreeTable ? true : !groupable,
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
        highlightField
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
  }, []);

  useEffect(() => {
    // @ts-ignore
    const tableWidthObserver = new ResizeObserver(debounce(updateTableClientWidth, 500));
    tableWidthObserver.observe(tableRef.current);
    return () => {
      tableWidthObserver.disconnect();
    };
  }, [updateTableClientWidth]);

  useEffect(() => {
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
  }, [tableState.tableClientWidth, style, rowHeight]);

  const parentRef = useRef(null);

  const scrollBarRef = useRef(null);
  const verticalScrollBarRef = useRef(null);

  const handleTableScroll = () => {
    if (scrollBarRef.current && scrollBarRef.current.scrollLeft !== tableRef.current.scrollLeft) {
      if (!tableRef.current.isExternalHorizontalScroll) {
        scrollBarRef.current.scrollLeft = tableRef.current.scrollLeft;
        scrollBarRef.current.isExternalHorizontalScroll = true;
      }
      tableRef.current.isExternalHorizontalScroll = false;
    }
  };

  const handleBodyScroll = () => {
    if (verticalScrollBarRef.current && verticalScrollBarRef.current.scrollTop !== parentRef.current.scrollTop) {
      if (!parentRef.current.isExternalVerticalScroll) {
        verticalScrollBarRef.current.scrollTop = parentRef.current.scrollTop;
        verticalScrollBarRef.current.isExternalVerticalScroll = true;
      }
      parentRef.current.isExternalVerticalScroll = false;
    }
  };

  const handleHorizontalScrollBarScroll = (e) => {
    if (!scrollBarRef.current.isExternalHorizontalScroll) {
      tableRef.current.scrollLeft = scrollBarRef.current.scrollLeft;
      tableRef.current.isExternalHorizontalScroll = true;
    }
    scrollBarRef.current.isExternalHorizontalScroll = false;
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
          onScroll={handleTableScroll}
          aria-rowcount={rows.length}
          aria-colcount={tableInternalColumns.length}
          data-per-page={visibleRows}
          ref={tableRef}
          className={StyleClassHelper.of(classes.table).className}
        >
          {headerGroups.map((headerGroup) => {
            let headerProps = {};
            if (headerGroup.getHeaderGroupProps) {
              headerProps = headerGroup.getHeaderGroupProps();
            }

            return (
              tableRef.current && (
                <ColumnHeaderContainer
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
              />
            </VirtualTableBodyContainer>
          )}
        </div>
        {tableState.isScrollable && (
          <VerticalScrollbar
            internalRowHeight={internalRowHeight}
            tableRef={tableRef}
            minRows={minRows}
            rows={rows}
            handleVerticalScrollBarScroll={handleVerticalScrollBarScroll}
            verticalScrollBarRef={verticalScrollBarRef}
          />
        )}
      </FlexBox>
      {tableRef?.current?.clientWidth !== tableRef?.current?.scrollWidth && (
        <HorizontalScrollbar
          scrollBarRef={scrollBarRef}
          handleHorizontalScrollBarScroll={handleHorizontalScrollBarScroll}
          totalColumnsWidth={totalColumnsWidth}
        />
      )}
    </div>
  );
});

AnalyticalTable.displayName = 'AnalyticalTable';
AnalyticalTable.defaultProps = {
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

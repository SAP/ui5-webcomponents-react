import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import React, {
  ComponentType,
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
import { createUseStyles } from 'react-jss';
import {
  Column,
  PluginHook,
  useAbsoluteLayout,
  useColumnOrder,
  useExpanded,
  useFilters,
  useGroupBy,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable
} from 'react-table';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './AnayticalTable.jss';
import { ColumnHeader } from './ColumnHeader';
import { DefaultColumn } from './defaults/Column';
import { DefaultLoadingComponent } from './defaults/LoadingComponent';
import { TablePlaceholder } from './defaults/LoadingComponent/TablePlaceholder';
import { DefaultNoDataComponent } from './defaults/NoDataComponent';
import { useDragAndDrop } from './hooks/useDragAndDrop';
import { useTableCellStyling } from './hooks/useTableCellStyling';
import { useTableHeaderGroupStyling } from './hooks/useTableHeaderGroupStyling';
import { useTableHeaderStyling } from './hooks/useTableHeaderStyling';
import { useTableRowStyling } from './hooks/useTableRowStyling';
import { useTableScrollHandles } from './hooks/useTableScrollHandles';
import { useTableStyling } from './hooks/useTableStyling';
import { useToggleRowExpand } from './hooks/useToggleRowExpand';
import { stateReducer } from './tableReducer/stateReducer';
import { TitleBar } from './TitleBar';
import { VirtualTableBody } from './virtualization/VirtualTableBody';
import { useDynamicColumnWidths } from './hooks/useDynamicColumnWidths';
import { TableScaleWidthMode } from '../../enums/TableScaleWidthMode';
import { useColumnsDependencies } from './hooks/useColumnsDependencies';

export interface ColumnConfiguration extends Column {
  accessor?: string;
  width?: number;
  hAlign?: TextAlign;
  vAlign?: VerticalAlign;
  canResize?: boolean;
  minWidth?: number;

  [key: string]: any;
}

export interface TableProps extends CommonProps {
  /**
   * In addition to the standard 'react-table' column config you can pass the properties 'hAlign' and 'vAlign'.
   * These will align the text inside the column accordingly.
   * values for hAlign: Begin | End | Left | Right | Center | Initial (default)
   * values for vAlign: Bottom | Middle | Top | Inherit (default)
   */
  columns: ColumnConfiguration[];
  data: object[];

  /**
   * Component or text of title section of the Table (if not set it will be hidden)
   */
  title?: ReactText | ReactNode;
  /**
   * Extension section of the Table. If not set, no extension area will be rendered
   */
  renderExtension?: () => ReactNode;

  // appearance

  minRows?: number;
  visibleRows?: number;
  loading?: boolean;
  busyIndicatorEnabled?: boolean;
  noDataText?: string;
  rowHeight?: number;
  alternateRowColor?: boolean;

  // features

  filterable?: boolean;
  sortable?: boolean;
  groupable?: boolean;
  groupBy?: string[];
  selectionMode?: TableSelectionMode;
  scaleWidthMode?: TableScaleWidthMode;
  columnOrder?: object[];

  // events

  onSort?: (e?: Event) => void;
  onGroup?: (e?: Event) => void;
  onRowSelected?: (e?: Event) => any;
  onRowExpandChange?: (e?: Event) => any;
  onColumnsReordered?: (e?: Event) => void;
  /**
   * additional options which will be passed to [react-table´s useTable hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#table-options)
   */
  reactTableOptions?: object;
  tableHooks?: Array<PluginHook<any>>;
  subRowsKey?: string;
  selectedRowIds?: { [key: string]: boolean };
  isTreeTable?: boolean;
  overscanCount?: number;

  // default components

  NoDataComponent?: ComponentType<any>;
  LoadingComponent?: ComponentType<any>;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'AnalyticalTable' });

/**
 * <code>import { AnalyticalTable } from '@ui5/webcomponents-react/lib/AnalyticalTable';</code>
 */
const AnalyticalTable: FC<TableProps> = forwardRef((props: TableProps, ref: Ref<HTMLDivElement>) => {
  const {
    columns,
    className,
    style,
    tooltip,
    title,
    renderExtension,
    loading,
    groupBy,
    selectionMode,
    onRowSelected,
    reactTableOptions,
    tableHooks,
    busyIndicatorEnabled,
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
    scaleWidthMode
  } = props;

  const classes = useStyles({ rowHeight: props.rowHeight });

  const [analyticalTableRef, reactWindowRef] = useTableScrollHandles(ref);
  const tableRef: RefObject<HTMLDivElement> = useRef();

  const getSubRows = useCallback((row) => row[subRowsKey] || [], [subRowsKey]);

  const data = useMemo(() => {
    if (minRows > props.data.length) {
      const missingRows = minRows - props.data.length;
      // @ts-ignore
      const emptyRows = [...Array(missingRows).keys()].map(() => ({ emptyRow: true }));

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
    setColumnOrder,
    dispatch,
    totalColumnsWidth,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      defaultColumn: DefaultColumn,
      getSubRows,
      stateReducer,
      webComponentsReactProperties: {
        selectionMode,
        classes,
        onRowSelected,
        onRowExpandChange,
        isTreeTable,
        alternateRowColor,
        scaleWidthMode,
        loading
      },
      ...reactTableOptions
    },
    useAbsoluteLayout,
    useFilters,
    useGroupBy,
    useColumnOrder,
    useSortBy,
    useExpanded,
    useRowSelect,
    useResizeColumns,
    useTableStyling,
    useTableHeaderGroupStyling,
    useTableHeaderStyling,
    useTableRowStyling,
    useDynamicColumnWidths,
    useColumnsDependencies,
    useTableCellStyling,
    useToggleRowExpand,
    ...tableHooks
  );

  const updateTableClientWidth = useCallback(() => {
    requestAnimationFrame(() => {
      if (tableRef.current) {
        dispatch({ type: 'TABLE_RESIZE', payload: { tableClientWidth: tableRef.current.clientWidth } });
      }
    });
  }, []);

  // @ts-ignore
  const tableWidthObserver = useRef(new ResizeObserver(updateTableClientWidth));

  useEffect(() => {
    tableWidthObserver.current.observe(tableRef.current);
    return () => {
      tableWidthObserver.current.disconnect();
    };
  }, [tableWidthObserver.current, tableRef.current]);

  useEffect(() => {
    dispatch({ type: 'SET_GROUP_BY', payload: groupBy });
  }, [groupBy, dispatch]);

  useEffect(() => {
    dispatch({ type: 'SET_SELECTED_ROWS', selectedIds: selectedRowIds });
  }, [selectedRowIds, dispatch]);

  useEffect(() => {
    dispatch({
      type: 'SET_HIDDEN_COLUMNS',
      hiddenColumns: columns
        .filter((col) => {
          if (col.hasOwnProperty('isVisible')) {
            return !col.isVisible;
          }
          return false;
        })
        .map((col) => col.accessor)
    });
  }, [columns]);

  const tableContainerClasses = StyleClassHelper.of(classes.tableContainer);

  if (!!rowHeight) {
    tableContainerClasses.put(classes.modifiedRowHeight);
  }

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
      height: `${tableBodyHeight}px`
    };
  }, [tableBodyHeight]);

  const onGroupByChanged = useCallback(
    (e) => {
      const { column, isGrouped } = e.getParameters();
      let groupedColumns = [];
      if (isGrouped) {
        groupedColumns = [...tableState.groupBy, column.id];
      } else {
        groupedColumns = tableState.groupBy.filter((group) => group !== column.id);
      }
      dispatch({ type: 'SET_GROUP_BY', payload: groupedColumns });
      onGroup(
        Event.of(null, e.getOriginalEvent(), {
          column,
          groupedColumns
        })
      );
    },
    [tableState.groupBy, onGroup, dispatch]
  );

  const [dragOver, handleDragEnter, handleDragStart, handleDragOver, handleOnDrop, handleOnDragEnd] = useDragAndDrop(
    props,
    setColumnOrder,
    tableState.columnOrder,
    tableState.columnResizing
  );

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div className={className} style={style} title={tooltip} ref={analyticalTableRef} {...passThroughProps}>
      {title && <TitleBar>{title}</TitleBar>}
      {typeof renderExtension === 'function' && <div>{renderExtension()}</div>}
      <div className={tableContainerClasses.valueOf()} ref={tableRef}>
        {
          <div {...getTableProps()} role="table" aria-rowcount={rows.length}>
            {headerGroups.map((headerGroup) => {
              let headerProps = {};
              if (headerGroup.getHeaderGroupProps) {
                headerProps = headerGroup.getHeaderGroupProps();
              }
              return (
                <header {...headerProps} role="rowgroup">
                  {headerGroup.headers.map((column, index) => (
                    <ColumnHeader
                      id={column.id}
                      {...column.getHeaderProps()}
                      isLastColumn={index === headerGroup.headers.length - 1}
                      groupable={column.groupable ?? props.groupable}
                      sortable={column.sortable ?? props.sortable}
                      filterable={column.filterable ?? props.filterable}
                      onSort={props.onSort}
                      onGroupBy={onGroupByChanged}
                      onDragStart={handleDragStart}
                      onDragOver={handleDragOver}
                      onDrop={handleOnDrop}
                      onDragEnter={handleDragEnter}
                      onDragEnd={handleOnDragEnd}
                      dragOver={column.id === dragOver}
                      column={column}
                      isDraggable={!isTreeTable}
                    >
                      {column.render('Header')}
                    </ColumnHeader>
                  ))}
                </header>
              );
            })}
            {loading && busyIndicatorEnabled && props.data?.length > 0 && <LoadingComponent />}
            {loading && props.data?.length === 0 && (
              <TablePlaceholder
                columns={
                  columns.filter((col) => (col.isVisible ?? true) && !tableState.hiddenColumns.includes(col.accessor))
                    .length
                }
                rows={props.minRows}
                style={noDataStyles}
                rowHeight={internalRowHeight}
              />
            )}
            {!loading && props.data?.length === 0 && (
              <NoDataComponent noDataText={noDataText} className={classes.noDataContainer} style={noDataStyles} />
            )}
            {props.data?.length > 0 && (
              <VirtualTableBody
                classes={classes}
                prepareRow={prepareRow}
                rows={rows}
                minRows={minRows}
                columns={columns}
                selectionMode={selectionMode}
                reactWindowRef={reactWindowRef}
                isTreeTable={isTreeTable}
                internalRowHeight={internalRowHeight}
                tableBodyHeight={tableBodyHeight}
                visibleRows={visibleRows}
                alternateRowColor={alternateRowColor}
                overscanCount={overscanCount}
                totalColumnsWidth={totalColumnsWidth}
                selectedFlatRows={selectedFlatRows}
              />
            )}
          </div>
        }
      </div>
    </div>
  );
});

AnalyticalTable.displayName = 'AnalyticalTable';
AnalyticalTable.defaultProps = {
  loading: false,
  busyIndicatorEnabled: true,
  sortable: true,
  filterable: false,
  groupable: false,
  selectionMode: TableSelectionMode.NONE,
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
  selectedRowIds: {},
  onGroup: () => {},
  onRowExpandChange: () => {},
  onColumnsReordered: () => {},
  isTreeTable: false,
  alternateRowColor: false
};

export { AnalyticalTable };

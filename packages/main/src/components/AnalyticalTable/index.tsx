'use client';

import { useVirtualizer } from '@tanstack/react-virtual';
import {
  debounce,
  deprecationNotice,
  enrichEventWithDetails,
  useI18nBundle,
  useIsomorphicId,
  useIsomorphicLayoutEffect,
  useIsRTL,
  useStylesheet,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, MutableRefObject } from 'react';
import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';
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
import {
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableSubComponentsBehavior,
  AnalyticalTableVisibleRowCountMode,
  GlobalStyleClasses
} from '../../enums/index.js';
import {
  COLLAPSE_NODE,
  COLLAPSE_PRESS_SPACE,
  DESELECT_ALL,
  EXPAND_NODE,
  EXPAND_PRESS_SPACE,
  FILTERED,
  GROUPED,
  INVALID_TABLE,
  LIST_NO_DATA,
  NO_DATA_FILTERED,
  SELECT_ALL,
  SELECT_PRESS_SPACE,
  UNSELECT_PRESS_SPACE
} from '../../i18n/i18n-defaults.js';
import { FlexBox } from '../FlexBox/index.js';
import { Text } from '../Text/index.js';
import { classNames, styleData } from './AnalyticalTable.module.css.js';
import { ColumnHeaderContainer } from './ColumnHeader/ColumnHeaderContainer.js';
import { DefaultColumn } from './defaults/Column/index.js';
import { DefaultLoadingComponent } from './defaults/LoadingComponent/index.js';
import { TablePlaceholder } from './defaults/LoadingComponent/TablePlaceholder.js';
import { DefaultNoDataComponent } from './defaults/NoDataComponent/index.js';
import { useA11y } from './hooks/useA11y.js';
import { useAutoResize } from './hooks/useAutoResize.js';
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
import type {
  AnalyticalTableColumnDefinition,
  AnalyticalTableDomRef,
  AnalyticalTablePropTypes,
  AnalyticalTableState,
  DivWithCustomScrollProp
} from './types/index.js';
import { getRowHeight, getSubRowsByString, tagNamesWhichShouldNotSelectARow } from './util/index.js';
import { VerticalResizer } from './VerticalResizer.js';

// When a sorted column is removed from the visible columns array (e.g. when "popped-in"), it doesn't clean up the sorted columns leading to an undefined `sortType`.
const sortTypesFallback = {
  undefined: () => undefined
};

const measureElement = (el: HTMLElement) => {
  return el.offsetHeight;
};

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
    scaleXFactor,
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
    onAutoResize,
    LoadingComponent,
    NoDataComponent,
    additionalEmptyRowsCount = 0,
    alwaysShowSubComponent: _omit,
    ...rest
  } = props;

  useStylesheet(styleData, AnalyticalTable.displayName);

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

  const tableRef = useRef<DivWithCustomScrollProp>(null);
  const parentRef = useRef<DivWithCustomScrollProp>(null);
  const verticalScrollBarRef = useRef<DivWithCustomScrollProp>(null);

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
        classes: classNames,
        onAutoResize,
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
    useAutoResize,
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
    setColumnOrder,
    dispatch,
    totalColumnsWidth,
    visibleColumns,
    visibleColumnsWidth,
    setGroupBy,
    setGlobalFilter
  } = tableInstanceRef.current;

  const tableState: AnalyticalTableState = tableInstanceRef.current.state;
  const { triggerScroll } = tableState;

  const noDataTextI18n = i18nBundle.getText(LIST_NO_DATA);
  const noDataTextFiltered = i18nBundle.getText(NO_DATA_FILTERED);
  const noDataTextLocal =
    noDataText ?? (tableState.filters?.length > 0 || tableState.globalFilter ? noDataTextFiltered : noDataTextI18n);

  const [componentRef, updatedRef] = useSyncRef<AnalyticalTableDomRef>(ref);
  //@ts-expect-error: types are compatible
  const isRtl = useIsRTL(updatedRef);

  const columnVirtualizer = useVirtualizer({
    count: visibleColumnsWidth.length,
    getScrollElement: () => tableRef.current,
    estimateSize: useCallback((index) => visibleColumnsWidth[index], [visibleColumnsWidth]),
    horizontal: true,
    overscan: isRtl ? Infinity : overscanCountHorizontal,
    indexAttribute: 'data-column-index',
    // necessary as otherwise values are rounded which leads to wrong total width calculation leading to unnecessary scrollbar
    measureElement: !scaleXFactor || scaleXFactor === 1 ? (el) => el.getBoundingClientRect().width : undefined
  });
  const [analyticalTableRef, scrollToRef] = useTableScrollHandles(updatedRef, dispatch);

  if (parentRef.current) {
    scrollToRef.current = {
      ...scrollToRef.current,
      horizontalScrollToOffset: columnVirtualizer.scrollToOffset,
      horizontalScrollToIndex: columnVirtualizer.scrollToIndex
    };
  }
  useEffect(() => {
    if (triggerScroll && triggerScroll.direction === 'horizontal') {
      if (triggerScroll.type === 'offset') {
        columnVirtualizer.scrollToOffset(...triggerScroll.args);
      } else {
        columnVirtualizer.scrollToIndex(...triggerScroll.args);
      }
    }
  }, [triggerScroll]);

  const includeSubCompRowHeight =
    !!renderRowSubComponent &&
    (subComponentsBehavior === AnalyticalTableSubComponentsBehavior.IncludeHeight ||
      subComponentsBehavior === AnalyticalTableSubComponentsBehavior.IncludeHeightExpandable) &&
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
      dispatch({
        type: 'TABLE_RESIZE',
        payload: {
          tableClientWidth:
            !scaleXFactor || scaleXFactor === 1
              ? tableRef.current.getBoundingClientRect().width
              : tableRef.current.clientWidth
        }
      });
    }
  }, [tableRef.current, scaleXFactor]);

  const updateRowsCount = useCallback(() => {
    if (
      (visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Auto ||
        visibleRowCountMode === AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows) &&
      analyticalTableRef.current?.parentElement
    ) {
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
    if (typeof tableState.bodyHeight === 'number') {
      return tableState.bodyHeight;
    }
    let rowNum;
    if (visibleRowCountMode === AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows) {
      rowNum = internalVisibleRowCount;
    } else {
      rowNum = rows.length < internalVisibleRowCount ? Math.max(rows.length, minRows) : internalVisibleRowCount;
    }

    const rowHeight =
      visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Auto ||
      visibleRowCountMode === AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows ||
      tableState.interactiveRowsHavePopIn ||
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
    tableState.interactiveRowsHavePopIn,
    adjustTableHeightOnPopIn,
    includeSubCompRowHeight,
    tableState.subComponentsHeight,
    tableState.bodyHeight
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

  const handleBodyScroll = (e) => {
    if (typeof onTableScroll === 'function') {
      onTableScroll(e);
    }
    const targetScrollTop = e.currentTarget.scrollTop;

    if (verticalScrollBarRef.current) {
      const vertScrollbarScrollElement = verticalScrollBarRef.current.firstElementChild as HTMLDivElement;
      if (vertScrollbarScrollElement.offsetHeight !== scrollContainerRef.current?.offsetHeight) {
        vertScrollbarScrollElement.style.height = `${scrollContainerRef.current.offsetHeight}px`;
      }
      if (verticalScrollBarRef.current.scrollTop !== targetScrollTop) {
        if (!e.currentTarget.isExternalVerticalScroll) {
          verticalScrollBarRef.current.scrollTop = targetScrollTop;
          verticalScrollBarRef.current.isExternalVerticalScroll = true;
        }
        e.currentTarget.isExternalVerticalScroll = false;
      }
    }
  };

  const handleVerticalScrollBarScroll = useCallback((e) => {
    if (parentRef.current && !e.currentTarget.isExternalVerticalScroll) {
      parentRef.current.scrollTop = e.currentTarget.scrollTop;
      parentRef.current.isExternalVerticalScroll = true;
    }
    e.currentTarget.isExternalVerticalScroll = false;
  }, []);

  useEffect(() => {
    columnVirtualizer.measure();
  }, [columnVirtualizer, tableState.columnOrder, tableState.columnResizing?.isResizingColumn, columns]);

  const totalSize = columnVirtualizer.getTotalSize();
  const showVerticalEndBorder = tableState.tableClientWidth > totalSize;

  const tableClasses = clsx(
    classNames.table,
    GlobalStyleClasses.sapScrollBar,
    withNavigationHighlight && classNames.hasNavigationIndicator,
    showVerticalEndBorder && classNames.showVerticalEndBorder
  );

  const handleOnLoadMore = (e) => {
    const rootNodes = rows.filter((row) => row.depth === 0);
    onLoadMore(
      enrichEventWithDetails(e, {
        rowCount: rootNodes.length,
        totalRowCount: rows.length
      })
    );
  };

  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);
  const rHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;

  const itemCount =
    Math.max(
      minRows,
      rows.length,
      visibleRowCountMode === AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows ? internalVisibleRowCount : 0
    ) + (!tableState.isScrollable ? additionalEmptyRowsCount : 0);

  const rowVirtualizer = useVirtualizer({
    count: itemCount,
    getScrollElement: () => parentRef.current,
    estimateSize: useCallback(
      (index) => {
        if (
          renderRowSubComponent &&
          (rows[index]?.isExpanded || alwaysShowSubComponent) &&
          tableState.subComponentsHeight?.[index]?.rowId === rows[index]?.id
        ) {
          return rHeight + (tableState.subComponentsHeight?.[index]?.subComponentHeight ?? 0);
        }
        return rHeight;
      },
      [rHeight, rows, renderRowSubComponent, alwaysShowSubComponent, tableState.subComponentsHeight]
    ),
    overscan,
    measureElement,
    indexAttribute: 'data-virtual-row-index'
  });
  // add range to instance for `useAutoResize` plugin hook
  tableInstanceRef.current.virtualRowsRange = rowVirtualizer.range;

  return (
    <>
      <div
        className={className}
        style={inlineStyle}
        //@ts-expect-error: types are compatible
        ref={componentRef}
        {...rest}
      >
        {header && (
          <TitleBar ref={titleBarRef} titleBarId={titleBarId}>
            {header}
          </TitleBar>
        )}
        {extension && <div ref={extensionRef}>{extension}</div>}
        <FlexBox
          className={classNames.tableContainerWithScrollBar}
          data-component-name="AnalyticalTableContainerWithScrollbar"
        >
          {showOverlay && (
            <>
              <span id={invalidTableTextId} className={classNames.hiddenA11yText} aria-hidden>
                {invalidTableA11yText}
              </span>
              <div
                tabIndex={0}
                aria-labelledby={`${titleBarId} ${invalidTableTextId}`}
                role="region"
                data-component-name="AnalyticalTableOverlay"
                className={classNames.overlay}
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
            <div className={classNames.tableHeaderBackgroundElement} />
            <div className={classNames.tableBodyBackgroundElement} />
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
            {loading && rows?.length > 0 && <LoadingComponent style={{ width: `${totalColumnsWidth}px` }} />}
            {loading && rows?.length === 0 && (
              <TablePlaceholder columns={visibleColumns} rows={minRows} style={noDataStyles} />
            )}
            {!loading && rows?.length === 0 && (
              <NoDataComponent
                noDataText={noDataTextLocal}
                className={classNames.noDataContainer}
                style={noDataStyles}
              />
            )}
            {rows?.length > 0 && tableRef.current && (
              <VirtualTableBodyContainer
                rowCollapsedFlag={tableState.rowCollapsed}
                dispatch={dispatch}
                tableBodyHeight={tableBodyHeight}
                totalColumnsWidth={columnVirtualizer.getTotalSize()}
                parentRef={parentRef}
                classes={classNames}
                infiniteScroll={infiniteScroll}
                infiniteScrollThreshold={infiniteScrollThreshold}
                onLoadMore={handleOnLoadMore}
                internalRowHeight={internalRowHeight}
                popInRowHeight={popInRowHeight}
                rows={rows}
                handleExternalScroll={handleBodyScroll}
                visibleRows={internalVisibleRowCount}
              >
                <VirtualTableBody
                  scrollContainerRef={scrollContainerRef}
                  classes={classNames}
                  prepareRow={prepareRow}
                  rows={rows}
                  scrollToRef={scrollToRef}
                  isTreeTable={isTreeTable}
                  internalRowHeight={internalRowHeight}
                  popInRowHeight={popInRowHeight}
                  alternateRowColor={alternateRowColor}
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
                  subComponentsBehavior={subComponentsBehavior}
                  triggerScroll={tableState.triggerScroll}
                  rowVirtualizer={rowVirtualizer}
                />
              </VirtualTableBodyContainer>
            )}
          </div>
          {(additionalEmptyRowsCount || tableState.isScrollable === undefined || tableState.isScrollable) && (
            <VerticalScrollbar
              tableBodyHeight={tableBodyHeight}
              internalRowHeight={internalHeaderRowHeight}
              tableRef={tableRef}
              handleVerticalScrollBarScroll={handleVerticalScrollBarScroll}
              ref={verticalScrollBarRef}
              data-native-scrollbar={props['data-native-scrollbar']}
              scrollContainerRef={scrollContainerRef}
              parentRef={parentRef}
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
            rowsLength={rows.length}
            visibleRows={internalVisibleRowCount}
            handleOnLoadMore={handleOnLoadMore}
          />
        )}
      </div>
      <Text
        aria-hidden="true"
        id={`scaleModeHelper-${uniqueId}`}
        className={classNames.hiddenSmartColMeasure}
        data-component-name="AnalyticalTableScaleModeHelper"
      >
        {''}
      </Text>
      <Text
        aria-hidden="true"
        id={`scaleModeHelperHeader-${uniqueId}`}
        className={clsx(classNames.hiddenSmartColMeasure, classNames.hiddenSmartColMeasureHeader)}
        data-component-name="AnalyticalTableScaleModeHelperHeader"
      >
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
export type {
  AnalyticalTableColumnDefinition,
  AnalyticalTableDomRef,
  AnalyticalTablePropTypes,
  DivWithCustomScrollProp
};

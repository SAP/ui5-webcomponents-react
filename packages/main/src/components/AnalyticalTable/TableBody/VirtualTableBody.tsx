import { useVirtualizer } from '@tanstack/react-virtual';
import '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
import React, { MutableRefObject, ReactNode, useCallback, useMemo } from 'react';
import { ScrollToRefType } from '../interfaces';
import { RowSubComponent as SubComponent } from './RowSubComponent';

interface VirtualTableBodyProps {
  classes: Record<string, string>;
  prepareRow: (row: unknown) => void;
  rows: Record<string, any>[];
  minRows: number;
  scrollToRef: MutableRefObject<ScrollToRefType>;
  isTreeTable: boolean;
  internalRowHeight: number;
  visibleRows: number;
  alternateRowColor: boolean;
  overscanCount: number;
  visibleColumns: Record<string, unknown>[];
  parentRef: MutableRefObject<HTMLDivElement>;
  renderRowSubComponent: (row?: Record<string, unknown>) => ReactNode;
  popInRowHeight: number;
  isRtl: boolean;
  markNavigatedRow?: (row?: Record<string, unknown>) => boolean;
  alwaysShowSubComponent: boolean;
  dispatch?: (e: { type: string; payload?: Record<string, unknown> }) => void;
  subComponentsHeight?: Record<string, { rowId: string; subComponentHeight?: number }>;
  columnVirtualizer: Record<string, any>;
}

const measureElement = (el) => el.offsetHeight;

export const VirtualTableBody = (props: VirtualTableBodyProps) => {
  const {
    classes,
    prepareRow,
    rows,
    minRows,
    scrollToRef,
    isTreeTable,
    internalRowHeight,
    visibleRows,
    overscanCount,
    visibleColumns,
    parentRef,
    renderRowSubComponent,
    popInRowHeight,
    markNavigatedRow,
    isRtl,
    alwaysShowSubComponent,
    dispatch,
    subComponentsHeight,
    columnVirtualizer
  } = props;

  const itemCount = Math.max(minRows, rows.length);
  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);
  const rowHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;

  const rowVirtualizer = useVirtualizer({
    count: itemCount,
    getScrollElement: () => parentRef.current,
    estimateSize: useCallback(
      (index) => {
        if (
          renderRowSubComponent &&
          (rows[index]?.isExpanded || alwaysShowSubComponent) &&
          subComponentsHeight?.[index]?.rowId === rows[index]?.id
        ) {
          return rowHeight + (subComponentsHeight?.[index]?.subComponentHeight ?? 0);
        }
        return rowHeight;
      },
      [rowHeight, rows, renderRowSubComponent, alwaysShowSubComponent, subComponentsHeight]
    ),
    overscan,
    measureElement
  });
  scrollToRef.current = {
    ...scrollToRef.current,
    scrollToOffset: rowVirtualizer.scrollToOffset,
    scrollToIndex: rowVirtualizer.scrollToIndex
  };

  const popInColumn = useMemo(
    () =>
      visibleColumns.filter(
        (item) =>
          item.id !== '__ui5wcr__internal_highlight_column' &&
          item.id !== '__ui5wcr__internal_selection_column' &&
          item.id !== '__ui5wcr__internal_navigation_column'
      )[0],
    [visibleColumns]
  );
  return (
    <div
      data-component-name="AnalyticalTableBodyScrollableContainer"
      style={{
        position: 'relative',
        height: `${rowVirtualizer.getTotalSize()}px`,
        width: `${columnVirtualizer.getTotalSize()}px`
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow, visibleRowIndex) => {
        const row = rows[virtualRow.index];
        const rowIndexWithHeader = virtualRow.index + 1;
        if (!row || row.groupByVal === 'undefined') {
          return (
            <div
              key={`empty_row_${virtualRow.index}`}
              className={classes.tr}
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
                boxSizing: 'border-box'
              }}
            />
          );
        }
        prepareRow(row);
        const rowProps = row.getRowProps();
        const isNavigatedCell = markNavigatedRow(row);
        const RowSubComponent = typeof renderRowSubComponent === 'function' ? renderRowSubComponent(row) : undefined;

        if (!RowSubComponent && subComponentsHeight && subComponentsHeight?.[virtualRow.index]?.subComponentHeight) {
          dispatch({
            type: 'SUB_COMPONENTS_HEIGHT',
            payload: {
              ...subComponentsHeight,
              [virtualRow.index]: { subComponentHeight: 0, rowId: row.id }
            }
          });
        }
        let updatedHeight = rowHeight;
        if (
          renderRowSubComponent &&
          (rows[virtualRow.index]?.isExpanded || alwaysShowSubComponent) &&
          subComponentsHeight?.[virtualRow.index]?.rowId === rows[virtualRow.index]?.id
        ) {
          updatedHeight += subComponentsHeight?.[virtualRow.index]?.subComponentHeight ?? 0;
        }
        return (
          // eslint-disable-next-line react/jsx-key
          <div
            {...rowProps}
            style={{
              ...(rowProps.style ?? {}),
              transform: `translateY(${virtualRow.start}px)`,
              position: 'absolute',
              boxSizing: 'border-box',
              height: `${updatedHeight}px`
            }}
            ref={(node) => {
              virtualRow.measureElement(node);
            }}
            aria-rowindex={virtualRow.index + 1}
          >
            {RowSubComponent && (row.isExpanded || alwaysShowSubComponent) && (
              <SubComponent
                subComponentsHeight={subComponentsHeight}
                virtualRow={virtualRow}
                dispatch={dispatch}
                row={row}
                rowHeight={rowHeight}
                rows={rows}
                alwaysShowSubComponent={alwaysShowSubComponent}
              >
                {RowSubComponent}
              </SubComponent>
            )}
            {columnVirtualizer.getVirtualItems().map((virtualColumn, visibleColumnIndex) => {
              const cell = row.cells[virtualColumn.index];
              const directionStyles = isRtl
                ? {
                    transform: `translateX(-${virtualColumn.start}px)`,
                    right: 0
                  }
                : { transform: `translateX(${virtualColumn.start}px)`, left: 0 };
              if (!cell) {
                return null;
              }
              const cellProps = cell.getCellProps();
              const allCellProps = {
                ...cellProps,
                ['data-visible-column-index']: visibleColumnIndex,
                ['data-column-index']: virtualColumn.index,
                ['data-visible-row-index']: visibleRowIndex + 1,
                ['data-row-index']: rowIndexWithHeader,
                style: {
                  ...cellProps.style,
                  position: 'absolute',
                  width: `${virtualColumn.size}px`,
                  top: 0,
                  height: `${rowHeight}px`,
                  ...directionStyles
                }
              };
              if (row.original?.emptyRow) {
                // eslint-disable-next-line react/jsx-key
                return <div {...allCellProps} />;
              }
              let contentToRender;
              if (
                cell.column.id === '__ui5wcr__internal_highlight_column' ||
                cell.column.id === '__ui5wcr__internal_selection_column' ||
                cell.column.id === '__ui5wcr__internal_navigation_column'
              ) {
                contentToRender = 'Cell';
              } else if (isTreeTable || (!alwaysShowSubComponent && RowSubComponent)) {
                contentToRender = 'Expandable';
              } else if (cell.isGrouped) {
                contentToRender = 'Grouped';
              } else if (cell.isAggregated) {
                contentToRender = 'Aggregated';
              } else if (cell.isPlaceholder) {
                contentToRender = 'RepeatedValue';
              } else {
                contentToRender = 'Cell';
              }

              return (
                // eslint-disable-next-line react/jsx-key
                <div {...allCellProps} data-selection-cell={cell.column.id === '__ui5wcr__internal_selection_column'}>
                  {popInRowHeight !== internalRowHeight && popInColumn.id === cell.column.id
                    ? cell.render('PopIn', { contentToRender, internalRowHeight })
                    : cell.render(contentToRender, isNavigatedCell === true ? { isNavigatedCell } : {})}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

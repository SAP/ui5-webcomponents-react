import '@ui5/webcomponents-icons/dist/navigation-down-arrow';
import '@ui5/webcomponents-icons/dist/navigation-right-arrow';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/useConsolidatedRef';
import React, { MutableRefObject, ReactNode, useCallback, useMemo, useRef } from 'react';
import { useVirtual } from 'react-virtual';
import { RowSubComponent as SubComponent } from './RowSubComponent';

interface VirtualTableBodyProps {
  classes: Record<string, string>;
  prepareRow: (row: unknown) => void;
  rows: any[];
  minRows: number;
  reactWindowRef: MutableRefObject<any>;
  isTreeTable: boolean;
  internalRowHeight: number;
  visibleRows: number;
  alternateRowColor: boolean;
  overscanCount: number;
  visibleColumns: any[];
  tableRef: MutableRefObject<any>;
  visibleColumnsWidth: any[];
  parentRef: MutableRefObject<any>;
  overscanCountHorizontal: number;
  renderRowSubComponent: (row?: any) => ReactNode;
  popInRowHeight: number;
  isRtl: boolean;
  markNavigatedRow?: (row?: Record<any, any>) => boolean;
  alwaysShowSubComponent: boolean;
  dispatch?: (e: { type: string; payload?: any }) => void;
  subComponentsHeight?: Record<string, { rowId: string; subComponentHeight?: number }>;
}

export const VirtualTableBody = (props: VirtualTableBodyProps) => {
  const {
    classes,
    prepareRow,
    rows,
    minRows,
    reactWindowRef,
    isTreeTable,
    internalRowHeight,
    visibleRows,
    overscanCount,
    visibleColumns,
    tableRef,
    visibleColumnsWidth,
    parentRef,
    overscanCountHorizontal,
    renderRowSubComponent,
    popInRowHeight,
    markNavigatedRow,
    isRtl,
    alwaysShowSubComponent,
    dispatch,
    subComponentsHeight
  } = props;

  const itemCount = Math.max(minRows, rows.length);
  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);
  const consolidatedParentRef = useConsolidatedRef(parentRef);
  const rowHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;

  const rowVirtualizer = useVirtual({
    size: itemCount,
    parentRef: consolidatedParentRef,
    estimateSize: React.useCallback(
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
    overscan
  });
  const columnVirtualizer = useVirtual({
    size: visibleColumns.length,
    parentRef: tableRef,
    estimateSize: useCallback(
      (index) => {
        return visibleColumnsWidth[index];
      },
      [visibleColumnsWidth]
    ),
    horizontal: true,
    overscan: overscanCountHorizontal
  });

  reactWindowRef.current = {
    ...reactWindowRef.current,
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
      style={{
        position: 'relative',
        height: `${rowVirtualizer.totalSize}px`,
        width: `${columnVirtualizer.totalSize}px`
      }}
    >
      {rowVirtualizer.virtualItems.map((virtualRow, visibleRowIndex) => {
        const row = rows[virtualRow.index];
        const rowIndexWithHeader = virtualRow.index + 1;
        if (!row) {
          return (
            <div
              key={`empty_row_${virtualRow.index}`}
              className={classes.tr}
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`
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
        return (
          <div
            {...rowProps}
            style={{
              ...(rowProps.style ?? {}),
              height: `${rowHeight}px`,
              transform: `translateY(${virtualRow.start}px)`,
              position: 'absolute'
            }}
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
            {columnVirtualizer.virtualItems.map((virtualColumn, visibleColumnIndex) => {
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
              if (row.original?.emptyRow) {
                return <div {...cellProps} />;
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
                <div
                  {...cellProps}
                  data-visible-column-index={visibleColumnIndex}
                  data-column-index={virtualColumn.index}
                  data-visible-row-index={visibleRowIndex + 1}
                  data-row-index={rowIndexWithHeader}
                  style={{
                    ...cellProps.style,
                    position: 'absolute',
                    width: `${virtualColumn.size}px`,
                    top: 0,
                    ...directionStyles
                  }}
                >
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

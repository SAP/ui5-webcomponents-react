import '@ui5/webcomponents-icons/dist/navigation-down-arrow';
import '@ui5/webcomponents-icons/dist/navigation-right-arrow';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import React, { MutableRefObject, ReactNode, useCallback, useMemo, useRef } from 'react';
import { useVirtual } from 'react-virtual';

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
  markNavigatedRow?: (row?: Record<any, any>) => boolean;
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
    markNavigatedRow
  } = props;

  const rowSubComponentsHeight = useRef({});

  const itemCount = Math.max(minRows, rows.length);
  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);
  const consolidatedParentRef = useConsolidatedRef(parentRef);
  const rowHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;

  const rowVirtualizer = useVirtual({
    size: itemCount,
    parentRef: consolidatedParentRef,
    estimateSize: React.useCallback(
      (index) => {
        if (renderRowSubComponent && rows[index].isExpanded && rowSubComponentsHeight.current.hasOwnProperty(index)) {
          return rowHeight + (rowSubComponentsHeight.current?.[index] ?? 0);
        }
        return rowHeight;
      },
      [rowHeight, rows, renderRowSubComponent]
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

  const currentlyFocusedCell = useRef<HTMLDivElement>(null);
  const onTableFocus = useCallback(
    (e) => {
      const firstCell: HTMLDivElement = e.target.querySelector(
        'div[role="row"]:first-child div[role="cell"]:first-child'
      );
      if (firstCell) {
        firstCell.tabIndex = 0;
        firstCell.focus();
        currentlyFocusedCell.current = firstCell;
      }
    },
    [currentlyFocusedCell]
  );

  const onKeyboardNavigation = useCallback(
    (e) => {
      if (currentlyFocusedCell.current) {
        switch (e.key) {
          case 'ArrowRight': {
            const newElement = currentlyFocusedCell.current.nextElementSibling as HTMLDivElement;
            if (newElement) {
              currentlyFocusedCell.current.tabIndex = -1;
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            }
            break;
          }
          case 'ArrowLeft': {
            const newElement = currentlyFocusedCell.current.previousElementSibling as HTMLDivElement;
            if (newElement) {
              currentlyFocusedCell.current.tabIndex = -1;
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            }
            break;
          }
          case 'ArrowDown': {
            const nextRow = currentlyFocusedCell.current.parentElement.nextElementSibling as HTMLDivElement;
            if (nextRow) {
              currentlyFocusedCell.current.tabIndex = -1;
              const currentColumnIndex = currentlyFocusedCell.current.getAttribute('aria-colindex');
              const newElement: HTMLDivElement = nextRow.querySelector(`div[aria-colindex="${currentColumnIndex}"]`);
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            }
            break;
          }
          case 'ArrowUp': {
            const previousRow = currentlyFocusedCell.current.parentElement.previousElementSibling as HTMLDivElement;
            if (previousRow) {
              currentlyFocusedCell.current.tabIndex = -1;
              const currentColumnIndex = currentlyFocusedCell.current.getAttribute('aria-colindex');
              const newElement: HTMLDivElement = previousRow.querySelector(
                `div[aria-colindex="${currentColumnIndex}"]`
              );
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            }
            break;
          }
        }
      }
    },
    [currentlyFocusedCell]
  );

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
      tabIndex={0}
      onFocus={onTableFocus}
      onKeyDown={onKeyboardNavigation}
      style={{
        position: 'relative',
        height: `${rowVirtualizer.totalSize}px`,
        width: `${columnVirtualizer.totalSize}px`
      }}
    >
      {rowVirtualizer.virtualItems.map((virtualRow) => {
        const row = rows[virtualRow.index];
        const setSubcomponentsRefs = (el) => {
          if (el?.offsetHeight) {
            rowSubComponentsHeight.current[virtualRow.index] = el.offsetHeight;
          }
        };
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
        const RowSubComponent = typeof renderRowSubComponent === 'function' ? renderRowSubComponent(row) : null;
        return (
          <div
            {...rowProps}
            style={{
              height: `${rowHeight}px`,
              transform: `translateY(${virtualRow.start}px)`,
              position: 'absolute'
            }}
          >
            {RowSubComponent && row.isExpanded && (
              <div
                ref={setSubcomponentsRefs}
                style={{
                  transform: `translateY(${rowHeight}px)`,
                  position: 'absolute',
                  width: '100%'
                }}
              >
                {RowSubComponent}
              </div>
            )}
            {columnVirtualizer.virtualItems.map((virtualColumn, index) => {
              const cell = row.cells[virtualColumn.index];

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
              } else if (isTreeTable || RowSubComponent) {
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
                  style={{
                    ...cellProps.style,
                    position: 'absolute',
                    width: `${virtualColumn.size}px`,
                    transform: `translateX(${virtualColumn.start}px)`,
                    top: 0,
                    left: 0
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

import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow';
import '@ui5/webcomponents-icons/dist/icons/navigation-right-arrow';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React, { MutableRefObject, useCallback, useRef } from 'react';
import { useVirtual } from 'react-virtual';

interface VirtualTableBodyProps {
  classes: Record<string, string>;
  prepareRow: (row: unknown) => void;
  rows: any[];
  minRows: number;
  selectionMode: TableSelectionMode;
  reactWindowRef: MutableRefObject<any>;
  isTreeTable: boolean;
  internalRowHeight: number;
  tableBodyHeight: number;
  visibleRows: number;
  alternateRowColor: boolean;
  overscanCount: number;
  totalColumnsWidth: number;
  infiniteScroll: boolean;
  infiniteScrollThreshold: number;
  onLoadMore?: (e?: { detail: { rowCount: number } }) => void;
}

export const VirtualTableBody = (props: VirtualTableBodyProps) => {
  const {
    classes,
    prepareRow,
    rows,
    minRows,
    selectionMode,
    reactWindowRef,
    isTreeTable,
    internalRowHeight,
    tableBodyHeight,
    visibleRows,
    overscanCount,
    totalColumnsWidth,
    infiniteScroll,
    infiniteScrollThreshold,
    onLoadMore
  } = props;

  const firedInfiniteLoadEvents = useRef(new Set());

  const itemCount = Math.max(minRows, rows.length);
  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);

  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: itemCount,
    parentRef,
    estimateSize: React.useCallback(() => internalRowHeight, [internalRowHeight]),
    overscan
  });

  reactWindowRef.current = {
    scrollToOffset: rowVirtualizer.scrollToOffset,
    scrollToIndex: rowVirtualizer.scrollToIndex
  };

  const classNames = StyleClassHelper.of(classes.tbody, GlobalStyleClasses.sapScrollBar);
  if (selectionMode === TableSelectionMode.SINGLE_SELECT || selectionMode === TableSelectionMode.MULTI_SELECT) {
    classNames.put(classes.selectable);
  }

  const lastScrollTop = useRef(0);

  const onScroll = useCallback(
    (event) => {
      const scrollOffset = event.target.scrollTop;
      const isScrollingDown = lastScrollTop.current < scrollOffset;
      if (isScrollingDown && infiniteScroll) {
        lastScrollTop.current = scrollOffset;
        const currentTopRow = Math.floor(scrollOffset / internalRowHeight);
        if (rows.length - currentTopRow < infiniteScrollThreshold) {
          if (!firedInfiniteLoadEvents.current.has(rows.length)) {
            onLoadMore({
              detail: {
                rowCount: rows.length
              }
            });
          }
          firedInfiniteLoadEvents.current.add(rows.length);
        }
      }
    },
    [
      infiniteScroll,
      infiniteScrollThreshold,
      onLoadMore,
      rows.length,
      internalRowHeight,
      firedInfiniteLoadEvents,
      lastScrollTop
    ]
  );

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
    [currentlyFocusedCell, parentRef]
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

  return (
    <div
      className={classNames.valueOf()}
      ref={parentRef}
      onScroll={onScroll}
      style={{
        height: `${tableBodyHeight}px`,
        width: `${totalColumnsWidth}px`
      }}
    >
      <div
        tabIndex={0}
        onFocus={onTableFocus}
        onKeyDown={onKeyboardNavigation}
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: `${totalColumnsWidth}px`,
          position: 'relative'
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          const row = rows[virtualRow.index];
          prepareRow(row);
          const rowProps = row.getRowProps();

          return (
            <div
              {...rowProps}
              key={virtualRow.index}
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`
              }}
            >
              {row.cells.map((cell) => {
                const cellProps = cell.getCellProps();
                if (row.original?.emptyRow) {
                  return <div {...cellProps} />;
                }

                let contentToRender = 'Cell';
                if (isTreeTable) {
                  contentToRender = 'Expandable';
                } else if (cell.isGrouped) {
                  contentToRender = 'Grouped';
                } else if (cell.isAggregated) {
                  contentToRender = 'Aggregated';
                } else if (cell.isPlaceholder || cell.column.isGrouped) {
                  contentToRender = 'RepeatedValue';
                }
                // eslint-disable-next-line react/jsx-key
                return <div {...cellProps}>{cell.render(contentToRender)}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

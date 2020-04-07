import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow';
import '@ui5/webcomponents-icons/dist/icons/navigation-right-arrow';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { FixedSizeList } from 'react-window';
import { VirtualTableRow } from './VirtualTableRow';

interface VirtualTableBodyProps {
  infiniteScroll: boolean;
  infiniteScrollThreshold: number;
  onLoadMore?: (e?: { detail: { rowCount: number } }) => void;

  [key: string]: any;
}

export const VirtualTableBody = (props: VirtualTableBodyProps) => {
  const {
    classes,
    prepareRow,
    rows,
    minRows,
    columns,
    selectionMode,
    reactWindowRef,
    isTreeTable,
    internalRowHeight,
    tableBodyHeight,
    visibleRows,
    alternateRowColor,
    overscanCount,
    totalColumnsWidth,
    selectedFlatRows,
    infiniteScroll,
    infiniteScrollThreshold,
    onLoadMore
  } = props;

  const innerDivRef = useRef<HTMLElement>();
  const firedInfiniteLoadEvents = useRef(new Set());

  const itemCount = Math.max(minRows, rows.length);
  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);

  const tableData = useMemo(() => {
    return {
      rows,
      additionalProps: {
        alternateRowColor,
        isTreeTable,
        classes,
        columns
      }
    };
  }, [rows, prepareRow, isTreeTable, classes, columns, selectedFlatRows, selectionMode]);

  const getItemKey = useCallback(
    (index, data) => {
      const row = data.rows[index];
      if (row) {
        if (!row.getRowProps) {
          prepareRow(row);
        }
        if (row.getRowProps) {
          return row.getRowProps().key;
        }
      }
      return index;
    },
    [prepareRow]
  );

  const classNames = StyleClassHelper.of(classes.tbody, GlobalStyleClasses.sapScrollBar);
  if (selectionMode === TableSelectionMode.SINGLE_SELECT || selectionMode === TableSelectionMode.MULTI_SELECT) {
    classNames.put(classes.selectable);
  }

  const onScroll = useCallback(
    ({ scrollDirection, scrollOffset }) => {
      if (scrollDirection === 'forward' && infiniteScroll) {
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
    [infiniteScroll, infiniteScrollThreshold, onLoadMore, rows.length, internalRowHeight, firedInfiniteLoadEvents]
  );

  const currentlyFocusedCell = useRef<HTMLDivElement>(null);
  const onTableFocus = useCallback(
    (e) => {
      const firstCell: HTMLDivElement = e.target.querySelector(
        'div[role="row"]:first-child div[role="cell"]:first-child'
      );
      firstCell.tabIndex = 0;
      firstCell.focus();
      currentlyFocusedCell.current = firstCell;
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

  useEffect(() => {
    if (innerDivRef.current) {
      innerDivRef.current.tabIndex = 0;
      innerDivRef.current.addEventListener('keydown', onKeyboardNavigation);
      innerDivRef.current.addEventListener('focus', onTableFocus);
    }
    return () => {
      innerDivRef.current.removeEventListener('keydown', onKeyboardNavigation);
    };
  }, [onKeyboardNavigation, reactWindowRef, onTableFocus]);

  return (
    <FixedSizeList
      className={classNames.valueOf()}
      ref={reactWindowRef}
      height={tableBodyHeight}
      width={totalColumnsWidth}
      itemData={tableData}
      itemCount={itemCount}
      itemSize={internalRowHeight}
      itemKey={getItemKey}
      innerRef={innerDivRef}
      overscanCount={overscan}
      onScroll={onScroll}
    >
      {VirtualTableRow}
    </FixedSizeList>
  );
};

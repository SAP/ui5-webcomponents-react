import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow';
import '@ui5/webcomponents-icons/dist/icons/navigation-right-arrow';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React, { useCallback, useMemo, useRef } from 'react';
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

  const classNames = StyleClassHelper.of(classes.tbody);
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

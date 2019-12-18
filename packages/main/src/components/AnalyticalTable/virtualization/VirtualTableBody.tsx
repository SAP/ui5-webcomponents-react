import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow';
import '@ui5/webcomponents-icons/dist/icons/navigation-right-arrow';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { FixedSizeList } from 'react-window';
import { VirtualTableRow } from './VirtualTableRow';

export const VirtualTableBody = (props) => {
  const {
    classes,
    prepareRow,
    rows,
    minRows,
    columns,
    selectable,
    reactWindowRef,
    isTreeTable,
    internalRowHeight,
    tableBodyHeight,
    visibleRows,
    alternateRowColor,
    overscanCount,
    totalColumnsWidth,
    selectedFlatRows
  } = props;

  const innerDivRef = useRef(null);

  useEffect(() => {
    if (innerDivRef.current) {
      innerDivRef.current.classList = '';
      innerDivRef.current.classList.add(classes.tbody);
      if (selectable) {
        innerDivRef.current.classList.add(classes.selectable);
      }
      if (alternateRowColor) {
        innerDivRef.current.classList.add(classes.alternateRowColor);
      }
    }
  }, [
    innerDivRef.current,
    selectable,
    classes.tbody,
    classes.selectable,
    alternateRowColor,
    classes.alternateRowColor
  ]);

  const itemCount = Math.max(minRows, rows.length);
  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);

  const tableData = useMemo(() => {
    return {
      rows,
      additionalProps: {
        isTreeTable,
        classes,
        columns
      }
    };
  }, [rows, prepareRow, isTreeTable, classes, columns, selectedFlatRows]);

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

  return (
    <FixedSizeList
      ref={reactWindowRef}
      height={tableBodyHeight}
      width={totalColumnsWidth}
      itemData={tableData}
      itemCount={itemCount}
      itemSize={internalRowHeight}
      itemKey={getItemKey}
      innerRef={innerDivRef}
      overscanCount={overscan}
    >
      {VirtualTableRow}
    </FixedSizeList>
  );
};

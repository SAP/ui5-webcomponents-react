import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow';
import '@ui5/webcomponents-icons/dist/icons/navigation-right-arrow';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React, { useCallback, useMemo, useRef } from 'react';
import { FixedSizeList } from 'react-window';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';
import { VirtualTableRow } from './VirtualTableRow';

export const VirtualTableBody = (props) => {
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
    totalColumnsWidth
  } = props;

  const innerDivRef = useRef<HTMLElement>();

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
  }, [rows, isTreeTable, classes, columns]);

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
    >
      {VirtualTableRow}
    </FixedSizeList>
  );
};

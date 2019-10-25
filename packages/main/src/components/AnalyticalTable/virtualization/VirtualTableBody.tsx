import '@ui5/webcomponents/dist/icons/navigation-down-arrow';
import '@ui5/webcomponents/dist/icons/navigation-right-arrow';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { FixedSizeList } from 'react-window';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column';
import { Cell } from './Cell';

export const VirtualTableBody = (props) => {
  const {
    classes,
    rowContainerStyling,
    onRowClicked,
    prepareRow,
    rows,
    minRows,
    columns,
    selectedRow,
    selectable,
    reactWindowRef,
    tableWidth,
    resizedColumns,
    isTreeTable,
    internalRowHeight,
    tableBodyHeight
  } = props;

  const innerDivRef = useRef(null);

  const VirtualTableItem = useCallback(
    (itemProps) => {
      const { style, index } = itemProps;
      const row = rows[index];

      const rowStyle = {
        ...style,
        gridTemplateColumns: rowContainerStyling.gridTemplateColumns
      };

      if (!row) {
        return (
          <div key={`minRow-${index}`} className={classes.tr} style={rowStyle}>
            {columns.map((col, colIndex) => (
              <div className={classes.tableCell} key={`minRow-${index}-${colIndex}`} />
            ))}
          </div>
        );
      }

      prepareRow(row);

      const rowProps = row.getRowProps();

      return (
        <div key={rowProps.key} className={rowProps.className} style={rowStyle} onClick={onRowClicked(row)}>
          {row.cells.map((cell, i) => {
            const cellProps = cell.getCellProps();
            const key = cellProps && cellProps.key ? cellProps.key : `cell-${i}`;
            return <Cell key={key} row={row} cell={cell} columnIndex={i} classes={classes} isTreeTable={isTreeTable} />;
          })}
        </div>
      );
    },
    [classes, columns, rows, prepareRow, rowContainerStyling, selectedRow, selectable, isTreeTable]
  );

  useEffect(() => {
    if (innerDivRef.current) {
      innerDivRef.current.classList = '';
      innerDivRef.current.classList.add(classes.tbody);
      if (selectable) {
        innerDivRef.current.classList.add(classes.selectable);
      }
    }
  }, [innerDivRef.current, selectable, classes.tbody, classes.selectable]);

  const itemCount = Math.max(minRows, rows.length);
  const overscanCount = Math.floor(itemCount / 2);

  const columnsWidth = useMemo(() => {
    const aggregatedWidth = columns
      .map((item) => {
        if (resizedColumns.hasOwnProperty(item.accessor)) {
          return resizedColumns[item.accessor];
        }
        return item.minWidth ? item.minWidth : DEFAULT_COLUMN_WIDTH;
      })
      .reduce((acc, val) => acc + val, 0);
    return tableWidth > aggregatedWidth || tableWidth === 0 ? null : aggregatedWidth;
  }, [columns, tableWidth, resizedColumns]);

  return (
    <FixedSizeList
      ref={reactWindowRef}
      height={tableBodyHeight}
      width={columnsWidth}
      itemCount={itemCount}
      itemSize={internalRowHeight}
      innerRef={innerDivRef}
      overscanCount={overscanCount}
    >
      {VirtualTableItem}
    </FixedSizeList>
  );
};

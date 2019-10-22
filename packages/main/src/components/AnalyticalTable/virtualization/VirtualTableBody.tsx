import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import '@ui5/webcomponents/dist/icons/navigation-down-arrow';
import '@ui5/webcomponents/dist/icons/navigation-right-arrow';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useTheme } from 'react-jss';
import { FixedSizeList } from 'react-window';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { Cell } from './Cell';

const ROW_HEIGHT_COMPACT = 32;
const ROW_HEIGHT_COZY = 44;

export const VirtualTableBody = (props) => {
  const {
    classes,
    tableBodyClasses,
    rowContainerStyling,
    onRowClicked,
    prepareRow,
    rows,
    visibleRows,
    minRows,
    columns,
    loading,
    noDataText,
    NoDataComponent,
    selectedRow,
    selectable,
    reactWindowRef,
    tableWidth,
    defaultColumnWidth,
    resizedColumns,
    isTreeTable
  } = props;

  const innerDivRef = useRef(null);
  const theme: JSSTheme = useTheme() as JSSTheme;

  const VirtualTableItem = useCallback(
    (itemProps) => {
      const { style, index } = itemProps;
      const row = rows[index];
      if (rows.length === 0 && !loading && index === 0) {
        return (
          <div style={style}>
            <NoDataComponent noDataText={noDataText} className={classes.noDataContainer} />
          </div>
        );
      }

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
    [classes, columns, rows, prepareRow, rowContainerStyling, selectedRow, selectable, theme, props]
  );

  useEffect(() => {
    if (innerDivRef.current) {
      innerDivRef.current.classList = '';
      tableBodyClasses.split(' ').forEach((cssClass) => {
        innerDivRef.current.classList.add(cssClass);
      });
    }
  }, [innerDivRef.current, tableBodyClasses]);

  const { listHeight, itemCount, rowHeight } = useMemo(() => {
    let internalRowHeight = theme.contentDensity === ContentDensity.Compact ? ROW_HEIGHT_COMPACT : ROW_HEIGHT_COZY;
    if (props.rowHeight) {
      internalRowHeight = props.rowHeight;
    }

    return {
      listHeight: internalRowHeight * Math.max(rows.length < visibleRows ? rows.length : visibleRows, minRows),
      itemCount: Math.max(minRows, rows.length),
      rowHeight: internalRowHeight
    };
  }, [rows, visibleRows, minRows, props.rowHeight]);

  const columnsWidth = useMemo(() => {
    const aggregatedWidth = columns
      .map((item) => {
        if (resizedColumns.hasOwnProperty(item.accessor)) {
          return resizedColumns[item.accessor];
        }
        return item.minWidth ? item.minWidth : defaultColumnWidth;
      })
      .reduce((acc, val) => acc + val, 0);
    return tableWidth > aggregatedWidth ? null : aggregatedWidth;
  }, [columns, tableWidth, resizedColumns]);

  return (
    <FixedSizeList
      ref={reactWindowRef}
      height={listHeight}
      width={columnsWidth}
      itemCount={itemCount}
      itemSize={rowHeight}
      innerRef={innerDivRef}
      overscanCount={5}
    >
      {VirtualTableItem}
    </FixedSizeList>
  );
};

import React from 'react';
import { Cell } from './Cell';

export const VirtualTableRow = (props) => {
  const { style, index, data } = props;
  const { additionalProps, rows } = data;
  const { isTreeTable, classes, columns, rowContainerStyling } = additionalProps;
  const row = rows[index];

  const rowStyle = {
    ...style,
    gridTemplateColumns: rowContainerStyling.gridTemplateColumns
  };

  if (!row) {
    return (
      <div key={`minRow-${index}`} className={classes.tr} style={rowStyle}>
        {columns.map((col, colIndex) => {
          let classNames = classes.tableCell;
          if (col.className) {
            classNames += ` ${col.className}`;
          }
          return <div className={classNames} key={`minRow-${index}-${colIndex}`} />;
        })}
      </div>
    );
  }

  return (
    <div {...row.getRowProps()} style={rowStyle}>
      {row.cells.map((cell, i) => {
        const cellProps = cell.getCellProps();
        const key = cellProps && cellProps.key ? cellProps.key : `cell-${i}`;
        return <Cell key={key} row={row} cell={cell} columnIndex={i} classes={classes} isTreeTable={isTreeTable} />;
      })}
    </div>
  );
};

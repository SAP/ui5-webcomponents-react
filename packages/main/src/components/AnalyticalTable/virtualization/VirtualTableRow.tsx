import React from 'react';

export const VirtualTableRow = (props) => {
  const { style, index, data } = props;
  const { additionalProps, rows } = data;
  const { isTreeTable, classes, columns } = additionalProps;
  const row = rows[index];

  if (!row) {
    return (
      <div key={`minRow-${index}`} className={classes.tr} style={style} role="row">
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
    <div {...row.getRowProps()} style={style} aria-rowindex={index}>
      {row.cells.map((cell, i) => {
        if (index <= 3) {
          console.log(cell);
        }
        let contentToRender = 'Cell';
        if (isTreeTable) {
          contentToRender = 'Expandable';
        } else if (cell.isGrouped) {
          contentToRender = 'Grouped';
        } else if (row.isGrouped) {
          contentToRender = 'Aggregated';
        } else if (cell.isRepeatedValue || cell.column.isGrouped) {
          contentToRender = 'RepeatedValue';
        }
        return <div {...cell.getCellProps()}>{cell.render(contentToRender)}</div>;
      })}
    </div>
  );
};

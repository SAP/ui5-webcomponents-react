import React from 'react';

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
      <div key={`minRow-${index}`} className={classes.tr} style={rowStyle} role="row">
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
    <div {...row.getRowProps()} style={rowStyle} role="row" aria-rowindex={index}>
      {row.cells.map((cell, i) => {
        let contentToRender = 'Cell';
        if (isTreeTable) {
          contentToRender = 'Expandable';
        } else if (cell.isGrouped) {
          contentToRender = 'Grouped';
        } else if (cell.isAggregated) {
          contentToRender = 'Aggregated';
        } else if (cell.isRepeatedValue) {
          contentToRender = 'RepeatedValue';
        }
        return <div {...cell.getCellProps()}>{cell.render(contentToRender)}</div>;
      })}
    </div>
  );
};

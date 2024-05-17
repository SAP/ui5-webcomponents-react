import React from 'react';

export const Cell = ({ cell: { value = '', isGrouped }, column, row, webComponentsReactProperties }) => {
  let cellContent = `${value ?? ''}`;
  if (isGrouped) {
    cellContent += ` (${row.subRows.length})`;
  }
  return (
    <span title={cellContent} className={webComponentsReactProperties.classes.tableText} data-id={column.id}>
      {cellContent}
    </span>
  );
};

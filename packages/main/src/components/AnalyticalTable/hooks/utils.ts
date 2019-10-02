export const makeTemplateColumns = (columns, resizedColumns) => {
  return columns
    .map((column) => {
      if (resizedColumns[column.id]) {
        return `${resizedColumns[column.id]}px`;
      }

      let columnWidth = column.width;
      if (typeof columnWidth === 'number') {
        columnWidth = `${columnWidth}px`;
      }
      if (!columnWidth) {
        columnWidth = '1fr';
      }
      return `minmax(${column.minWidth}px, ${columnWidth})`;
    })
    .join(' ');
};

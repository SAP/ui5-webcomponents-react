export const makeTemplateColumns = (columns, resizedColumns) => {
  return columns
    .map((column) => {
      if (resizedColumns[column.id]) {
        return `${resizedColumns[column.id]}px`;
      }
      return `minmax(${column.minWidth}px, ${column.width || '1fr'})`;
    })
    .join(' ');
};

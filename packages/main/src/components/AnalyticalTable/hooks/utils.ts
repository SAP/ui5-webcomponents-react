export const makeTemplateColumns = (columns) => {
  return columns
    .map((column) => {
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

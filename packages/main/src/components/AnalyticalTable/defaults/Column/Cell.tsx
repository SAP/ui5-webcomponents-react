import type { CellInstance } from '../../types/index.js';

export const Cell = (props: CellInstance) => {
  const {
    cell: { value = '', isGrouped },
    column,
    row,
    webComponentsReactProperties,
  } = props;
  let cellContent = `${value ?? ''}`;
  if (isGrouped) {
    cellContent += ` (${row.subRows.length})`;
  }
  return (
    <span
      title={cellContent}
      className={webComponentsReactProperties.classes.tableText}
      data-column-id-cell-text={column.id}
    >
      {cellContent}
    </span>
  );
};

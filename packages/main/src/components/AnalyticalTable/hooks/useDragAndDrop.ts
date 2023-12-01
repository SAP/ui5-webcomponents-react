import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import type { ReactTableHooks } from '../types/index.js';

const getColumnId = (column) => {
  return typeof column.accessor === 'string' ? column.accessor : column.id;
};

function getHeaderProps(
  props: Record<string, unknown>,
  { instance: { dispatch, state, columns, setColumnOrder, webComponentsReactProperties } }
) {
  const { columnOrder, columnResizing, isRtl, dndColumn } = state;
  const { onColumnsReorder } = webComponentsReactProperties;

  const handleDragStart = (e) => {
    if (columnResizing.isResizingColumn || !e.target.draggable) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('text', e.currentTarget.dataset.columnId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    dispatch({ type: 'COLUMN_DND_START', payload: e.currentTarget.dataset.columnId });
  };

  const handleOnDragEnd = () => {
    dispatch({ type: 'COLUMN_DND_END' });
  };

  const handleOnDrop = (e) => {
    dispatch({ type: 'COLUMN_DND_END' });

    const droppedColId = e.currentTarget.dataset.columnId;
    const draggedColId = e.dataTransfer.getData('text');
    if (droppedColId === draggedColId) return;

    const internalColumnOrder = columnOrder.length > 0 ? columnOrder : columns.map((col) => getColumnId(col));
    const droppedColIdx = internalColumnOrder.findIndex((col) => col === droppedColId);
    const draggedColIdx = internalColumnOrder.findIndex((col) => col === draggedColId);

    const tempCols = [...internalColumnOrder];
    const targetIndex = droppedColIdx > draggedColIdx ? (isRtl ? droppedColIdx : droppedColIdx - 1) : droppedColIdx;

    tempCols.splice(targetIndex, 0, tempCols.splice(draggedColIdx, 1)[0]);
    setColumnOrder(tempCols);

    if (typeof onColumnsReorder === 'function') {
      const columnsNewOrder = tempCols.map((tempColId) => columns.find((col) => getColumnId(col) === tempColId));
      onColumnsReorder(
        enrichEventWithDetails(e, {
          columnsNewOrder,
          column: columns[draggedColIdx]
        })
      );
    }
  };

  return [
    props,
    {
      onDragStart: handleDragStart,
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragEnd: handleOnDragEnd,
      onDrop: handleOnDrop,
      dragOver: dndColumn === props.id
    }
  ];
}

export function useColumnDragAndDrop(hooks: ReactTableHooks) {
  hooks.getHeaderProps.push(getHeaderProps);
}

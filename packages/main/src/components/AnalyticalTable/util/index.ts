import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { defaultOrderByFn } from 'react-table';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';

export const orderByFn = (rows, functions, directions) => {
  const wrapSortFn = (sortFn, index) => {
    const desc = directions[index] === false || directions[index] === 'desc';

    return (rowA, rowB) => {
      if (rowA.original?.emptyRow && !rowB.original?.emptyRow) {
        return desc ? -1 : 1;
      }
      if (!rowA.original?.emptyRow && rowB.original?.emptyRow) {
        return desc ? 1 : -1;
      }
      if (rowA.original?.emptyRow && rowB.original?.emptyRow) {
        return 0;
      }
      return sortFn(rowA, rowB);
    };
  };

  const wrappedSortfunctions = functions.map(wrapSortFn);

  return defaultOrderByFn(rows, wrappedSortfunctions, directions);
};

export const toggleSelected = (e, row, instance) => {
  const { isTreeTable, selectionMode, onRowSelected } = instance.webComponentsReactProperties;
  if (isTreeTable) {
    if (selectionMode === TableSelectionMode.MULTI_SELECT) {
      instance.dispatch({
        type: 'SET_SELECTED_ROWS',
        selectedIds: Object.assign({}, ...instance.selectedFlatRows.map((item) => ({ [item.id]: true })), {
          [row.id]: !row.isSelected
        })
      });
    } else {
      instance.dispatch({ type: 'SET_SELECTED_ROWS', selectedIds: { [row.id]: !row.isSelected } });
    }
  } else {
    row.toggleRowSelected();
  }
  if (typeof onRowSelected === 'function') {
    const payload = {
      row,
      isSelected: !row.isSelected
    };
    const payloadWithFlatRows = {
      ...payload,
      selectedFlatRows: !row.isSelected
        ? [...instance.selectedFlatRows, row]
        : instance.selectedFlatRows.filter((prevRow) => prevRow.id !== row.id)
    };
    onRowSelected(
      enrichEventWithDetails(e, TableSelectionMode.MULTI_SELECT === selectionMode ? payloadWithFlatRows : payload)
    );
  }
  if (selectionMode === TableSelectionMode.SINGLE_SELECT && !isTreeTable) {
    instance.selectedFlatRows.forEach(({ id }) => {
      instance.toggleRowSelected(id, false);
    });
  }
};

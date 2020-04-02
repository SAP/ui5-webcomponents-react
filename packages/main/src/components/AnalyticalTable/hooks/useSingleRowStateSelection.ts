import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import { PluginHook } from 'react-table';

export const useSingleRowStateSelection: PluginHook<{}> = (hooks) => {
  hooks.getRowProps.push((passedRowProps, { instance, row }) => {
    const { webComponentsReactProperties, dispatch, toggleRowSelected, selectedFlatRows } = instance;
    const { isTreeTable, selectionMode, onRowSelected, selectionBehavior } = webComponentsReactProperties;
    const rowProps = { ...passedRowProps };
    const isEmptyRow = row.original?.emptyRow;

    if ([TableSelectionMode.SINGLE_SELECT, TableSelectionMode.MULTI_SELECT].includes(selectionMode) && !isEmptyRow) {
      rowProps.onClick = (e, selectionCellClick = false) => {
        if (row.isGrouped || (TableSelectionBehavior.ROW_SELECTOR === selectionBehavior && !selectionCellClick)) {
          return;
        }
        if (isTreeTable) {
          if (selectionMode === TableSelectionMode.MULTI_SELECT) {
            dispatch({
              type: 'SET_SELECTED_ROWS',
              selectedIds: Object.assign({}, ...selectedFlatRows.map((item) => ({ [item.id]: true })), {
                [row.id]: !row.isSelected
              })
            });
          } else {
            dispatch({ type: 'SET_SELECTED_ROWS', selectedIds: { [row.id]: !row.isSelected } });
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
              ? [...selectedFlatRows, row]
              : selectedFlatRows.filter((prevRow) => prevRow.id !== row.id)
          };
          onRowSelected(
            enrichEventWithDetails(e, TableSelectionMode.MULTI_SELECT === selectionMode ? payloadWithFlatRows : payload)
          );
        }
        if (selectionMode === TableSelectionMode.SINGLE_SELECT && !isTreeTable) {
          selectedFlatRows.forEach(({ id }) => {
            toggleRowSelected(id, false);
          });
        }
      };
    }

    return rowProps;
  });
};

useSingleRowStateSelection.pluginName = 'useSingleRowStateSelection';

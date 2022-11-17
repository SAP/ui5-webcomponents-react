import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { useEffect } from 'react';
import { TableSelectionMode } from '../../../enums';

export const useSelectionChangeCallback = (hooks) => {
  hooks.useControlledState.push((state, { instance }) => {
    const { selectedRowPayload, selectedRowIds } = state;
    const { rowsById, preFilteredRowsById, webComponentsReactProperties, dispatch, filters } = instance;
    useEffect(() => {
      if (selectedRowPayload?.fired) {
        const { event: e, row: selRow } = selectedRowPayload;
        const row = rowsById[selRow?.id];

        if (row) {
          const payload = {
            row: row,
            isSelected: row.isSelected,
            selectedFlatRows: row.isSelected ? [row] : [],
            allRowsSelected: false
          };

          if (webComponentsReactProperties.selectionMode === TableSelectionMode.MultiSelect) {
            const selectedRowIdsArray = Object.entries(selectedRowIds).reduce((acc, [key, val]) => {
              if (val) {
                return [...acc, key];
              }
              return acc;
            }, []);
            // when selecting a row on a filtered table, `preFilteredRowsById` has to be used, otherwise filtered out rows are undefined
            const tempRowsById = filters?.length > 0 ? preFilteredRowsById : rowsById;
            const selectedRowIdsArrayMapped = selectedRowIdsArray.map((item) => tempRowsById[item]);
            payload.selectedFlatRows = selectedRowIdsArrayMapped;
            if (selectedRowIdsArrayMapped.length === Object.keys(tempRowsById).length) {
              payload.allRowsSelected = true;
            }
          }
          dispatch({ type: 'SELECT_ROW_CB', payload: { event: e, row, fired: false } });
          webComponentsReactProperties?.onRowSelect(enrichEventWithDetails(e, payload));
        }
      }
    }, [selectedRowPayload, rowsById, webComponentsReactProperties.selectionMode, selectedRowIds]);

    return state;
  });
};

useSelectionChangeCallback.pluginName = 'useSelectionChangeCallback';

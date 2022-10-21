import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/src';
import { useEffect } from 'react';
import { TableSelectionMode } from '../../../enums';

export const useSelectionChangeCallback = (hooks) => {
  hooks.useControlledState.push((state, { instance }) => {
    const { selectedRowPayload, selectedRowIds } = state;
    const { rowsById, webComponentsReactProperties, selectedFlatRows } = instance;
    useEffect(() => {
      if (selectedRowPayload) {
        const { event: e, row: selRow } = selectedRowPayload;
        const row = rowsById[selRow.id];
        const payload = {
          row: row,
          isSelected: row.isSelected,
          selectedFlatRows,
          allRowsSelected: false
        };

        if (webComponentsReactProperties.selectionMode === TableSelectionMode.MultiSelect) {
          const selectedRowIdsArray = Object.keys(selectedRowIds);
          const selectedRowIdsArrayMapped = selectedRowIdsArray.map((item) => rowsById[item]);
          payload.selectedFlatRows = selectedRowIdsArrayMapped;
          if (selectedRowIdsArrayMapped.length === Object.keys(rowsById).length) {
            payload.allRowsSelected = true;
          }
        }
        webComponentsReactProperties.onRowSelect(enrichEventWithDetails(e, payload));
      }
    }, [selectedRowPayload, rowsById, webComponentsReactProperties.selectionMode, selectedRowIds]);

    return state;
  });
};

useSelectionChangeCallback.pluginName = 'useSelectionChangeCallback';

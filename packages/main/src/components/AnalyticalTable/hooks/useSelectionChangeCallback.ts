import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { useEffect } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/index.js';

export const useSelectionChangeCallback = (hooks) => {
  hooks.useControlledState.push((state, { instance }) => {
    const { selectedRowPayload, selectedRowIds } = state;
    const { rowsById, preFilteredRowsById, webComponentsReactProperties, dispatch, filters } = instance;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (selectedRowPayload?.fired) {
        const { event: e, row: selRow } = selectedRowPayload;
        const row = rowsById[selRow?.id];

        if (row) {
          const payload = {
            row: row,
            isSelected: row.isSelected,
            selectedFlatRows: row.isSelected ? [row] : [],
            allRowsSelected: false,
            selectedRowIds
          };

          if (webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.MultiSelect) {
            // when selecting a row on a filtered table, `preFilteredRowsById` has to be used, otherwise filtered out rows are undefined
            const tempRowsById = filters?.length > 0 ? preFilteredRowsById : rowsById;
            const selectedRowIdsArrayMapped = Object.keys(selectedRowIds).reduce((acc, key) => {
              if (selectedRowIds[key]) {
                acc.push(tempRowsById[key]);
              }
              return acc;
            }, []);

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

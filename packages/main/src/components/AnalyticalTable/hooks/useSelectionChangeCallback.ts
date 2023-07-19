import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { useEffect } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/index.js';

export const useSelectionChangeCallback = (hooks) => {
  hooks.useControlledState.push((state, { instance }) => {
    const { selectedRowPayload, selectedRowIds, filters, globalFilter } = state;
    const { rowsById, preFilteredRowsById, webComponentsReactProperties, dispatch } = instance;
    const isFiltered = filters?.length > 0 || !!globalFilter;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (selectedRowPayload?.fired) {
        const { event: e, row: selRow, selectAll } = selectedRowPayload;
        const row = rowsById[selRow?.id];

        if (row || selectAll) {
          const payload = {
            row: row,
            isSelected: row?.isSelected,
            selectedFlatRows: row?.isSelected ? [row] : [],
            allRowsSelected: false,
            selectedRowIds
          };

          if (webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.MultiSelect) {
            // when selecting a row on a filtered table, `preFilteredRowsById` has to be used, otherwise filtered out rows are undefined
            const tempRowsById = isFiltered ? preFilteredRowsById : rowsById;
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
            if (selectAll) {
              dispatch({ type: 'SELECT_ROW_CB', payload: { event: e, row, selectAll: false, fired: false } });
              webComponentsReactProperties?.onRowSelect(
                enrichEventWithDetails(e, {
                  selectedFlatRows: payload.selectedFlatRows,
                  allRowsSelected: payload.allRowsSelected,
                  selectedRowIds: payload.selectedRowIds
                })
              );
              return;
            }
          }
          dispatch({ type: 'SELECT_ROW_CB', payload: { event: e, row, fired: false } });
          webComponentsReactProperties?.onRowSelect(enrichEventWithDetails(e, payload));
        }
      }
    }, [selectedRowPayload?.fired, rowsById, webComponentsReactProperties.selectionMode, selectedRowIds, isFiltered]);

    return state;
  });
};

useSelectionChangeCallback.pluginName = 'useSelectionChangeCallback';

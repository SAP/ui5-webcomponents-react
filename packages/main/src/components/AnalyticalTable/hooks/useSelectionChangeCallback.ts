import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { useEffect } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/index.js';
import type { ReactTableHooks, TableInstance } from '../types/index.js';

export const useSelectionChangeCallback = (hooks: ReactTableHooks) => {
  hooks.useControlledState.push((state, { instance }: { instance: TableInstance }) => {
    const { selectedRowPayload, selectedRowIds, filters, globalFilter } = state;
    const { rowsById, preFilteredRowsById, webComponentsReactProperties, dispatch } = instance;
    const isFiltered = filters?.length > 0 || !!globalFilter;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (selectedRowPayload?.fired) {
        const { event: e, row: selRow, selectAll } = selectedRowPayload;
        const row = rowsById[selRow?.id];
        // when selecting a row on a filtered table, `preFilteredRowsById` has to be used, otherwise filtered out rows are undefined
        const _rowsById = isFiltered ? preFilteredRowsById : rowsById;

        if (row || selectAll) {
          const payload = {
            row: row,
            rowsById: _rowsById,
            isSelected: row?.isSelected,
            allRowsSelected: false,
            selectedRowIds
          };

          if (webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.Multiple) {
            if (Object.keys(selectedRowIds).length === Object.keys(_rowsById).length) {
              payload.allRowsSelected = true;
            }

            if (selectAll) {
              dispatch({ type: 'SELECT_ROW_CB', payload: { event: e, row, selectAll: false, fired: false } });
              webComponentsReactProperties?.onRowSelect(
                enrichEventWithDetails(e, {
                  rowsById: payload.rowsById,
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

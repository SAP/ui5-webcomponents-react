'use client';

import { useEffect, useRef } from 'react';
import { AnalyticalTableSelectionBehavior } from '../../../enums/AnalyticalTableSelectionBehavior.js';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import type {
  AnalyticalTablePluginHookOptions,
  AnalyticalTableState,
  ReactTableHooks,
  RowType,
  TableInstance,
} from '../types/index.js';

type onIndeterminateChange = (e: {
  indeterminateRowsById: Record<string | number, boolean>;
  tableInstance: TableInstance;
}) => void;

/**
 * Marks a row indeterminate if its subtree contains a node whose direct sub-rows are partially selected (some, not all).
 * A single O(n) post-order traversal visits each row once and reads every sub-row reference once.
 */
const getIndeterminate = (
  rows: RowType[],
  state: { selectedRowIds: AnalyticalTableState['selectedRowIds'] },
): Record<string, boolean> => {
  const indeterminateRowsById: Record<string, boolean> = {};
  const { selectedRowIds } = state;

  const markSubtree = (row: RowType): boolean => {
    const subRows = row.subRows;
    if (!subRows?.length) {
      return false;
    }
    let selectedCount = 0;
    let subtreeHasIndeterminate = false;
    for (const subRow of subRows) {
      if (selectedRowIds[subRow.id]) {
        selectedCount++;
      }
      if (markSubtree(subRow)) {
        subtreeHasIndeterminate = true;
      }
    }
    const isPartiallySelected = selectedCount > 0 && selectedCount < subRows.length;
    if (isPartiallySelected || subtreeHasIndeterminate) {
      indeterminateRowsById[row.id] = true;
      return true;
    }
    return false;
  };

  for (const row of rows) {
    markSubtree(row);
  }
  return indeterminateRowsById;
};

/**
 * A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.
 * When using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)
 *
 * __Note:__
 * - This functionality is not covered by SAP UXC design guidelines and should be avoided if UXC is required.
 * - The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.
 * - This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!
 *
 * @param {event} onIndeterminateChange Fired when the indeterminate state of rows is changed.
 * @param {object} [options] - Additional options.
 * @param {boolean} [options.disabled=false] - If `true`, the hook does nothing. To toggle at runtime, re-create the hook at the same position in the (memoized) `tableHooks` array — never add or remove array entries.
 */
export const useIndeterminateRowSelection = (
  onIndeterminateChange?: onIndeterminateChange,
  options?: AnalyticalTablePluginHookOptions,
) => {
  const { disabled = false } = options ?? {};
  const toggleRowProps = (
    rowProps: { checked?: boolean },
    { row, instance }: { row: RowType; instance: TableInstance },
  ) => {
    let indeterminate: boolean;
    if (instance.isAllRowsSelected) {
      indeterminate = false;
    } else {
      indeterminate = instance?.state?.indeterminateRows?.[row.id] ?? false;
    }

    return [
      rowProps,
      {
        indeterminate: indeterminate,
        checked: indeterminate ? true : rowProps.checked,
      },
    ];
  };

  const stateReducer: TableInstance['stateReducer'] = (newState, action, _prevState, instance) => {
    const { rowsById, rows } = instance;

    // check if parent row should be auto-selected
    if (action.type === 'toggleRowSelected') {
      const rowId = action.id;
      const isSelected = newState.selectedRowIds[rowId];
      if (isSelected) {
        // check if row has parent and if all subRows are selected
        const parentId = rowId.substring(0, rowId.lastIndexOf('.'));
        if (parentId && rowsById[parentId]) {
          const parentRow = rowsById[parentId];
          const allSiblingsSelected = parentRow.subRows?.every((subRow: RowType) => newState.selectedRowIds[subRow.id]);
          if (allSiblingsSelected && !newState.selectedRowIds[parentId]) {
            // auto-select parent row
            return {
              ...newState,
              selectedRowIds: {
                ...newState.selectedRowIds,
                [parentId]: true,
              },
            };
          }
        }
      }
    }

    if (action.type === 'INDETERMINATE_ROW_IDS') {
      if (action.payload === 'reset') {
        return {
          ...newState,
          indeterminateRows: {},
        };
      }

      const indeterminateRowsById = getIndeterminate(rows, { selectedRowIds: newState.selectedRowIds });

      return {
        ...newState,
        indeterminateRows: indeterminateRowsById,
      };
    }
  };

  const useInstanceAfterData = (instance: TableInstance) => {
    const {
      data,
      dispatch,
      rowsById,
      state: { selectedRowIds, indeterminateRows },
      webComponentsReactProperties: { selectionMode, selectionBehavior, isTreeTable },
    } = instance;

    const lastProcessedSelectedRowIdsRef = useRef(selectedRowIds);

    useEffect(() => {
      if (disabled || lastProcessedSelectedRowIdsRef.current === selectedRowIds) {
        return;
      }
      lastProcessedSelectedRowIdsRef.current = selectedRowIds;

      if (
        isTreeTable &&
        selectionMode === AnalyticalTableSelectionMode.Multiple &&
        selectionBehavior !== AnalyticalTableSelectionBehavior.RowOnly &&
        Object.keys(selectedRowIds).length &&
        Object.keys(rowsById).length !== Object.keys(selectedRowIds).length
      ) {
        dispatch({ type: 'INDETERMINATE_ROW_IDS' });
      } else if (typeof indeterminateRows === 'object' && Object.keys(indeterminateRows).length) {
        dispatch({ type: 'INDETERMINATE_ROW_IDS', payload: 'reset' });
      }
    }, [data, selectedRowIds, isTreeTable, selectionMode, selectionBehavior, dispatch, disabled]);

    useEffect(() => {
      if (disabled) {
        return;
      }
      if (typeof onIndeterminateChange === 'function' && indeterminateRows) {
        onIndeterminateChange({ indeterminateRowsById: indeterminateRows, tableInstance: instance });
      }
    }, [indeterminateRows, disabled]);
  };

  const useIndeterminate = (hooks: ReactTableHooks) => {
    hooks.useInstanceAfterData.push(useInstanceAfterData);
    if (disabled) {
      return;
    }
    hooks.getToggleRowSelectedProps.push(toggleRowProps);
    hooks.stateReducers.push(stateReducer);
  };

  useIndeterminate.pluginName = 'useIndeterminate';

  return useIndeterminate;
};

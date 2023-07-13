'use client';

import { useEffect } from 'react';
import { AnalyticalTableSelectionBehavior, AnalyticalTableSelectionMode } from '../../../enums/index.js';

type onIndeterminateChange = (e: {
  indeterminateRowsById: Record<string | number, boolean>;
  tableInstance: Record<string, any>;
}) => void;

const getParentRow = (id, rowsById) => {
  let lastDotIndex = id.lastIndexOf('.');
  if (lastDotIndex === -1) {
    lastDotIndex = Infinity;
  }
  const parentRowId = id.slice(0, lastDotIndex);
  return [rowsById[parentRowId], lastDotIndex];
};

const getIndeterminateRowIds = (id) => {
  const indeterminateRowsById = {};
  const lastDotIndex = id.lastIndexOf('.');
  indeterminateRowsById[id] = true;
  if (lastDotIndex !== -1) {
    // set all parent rows to indeterminate
    Object.assign(indeterminateRowsById, getIndeterminateRowIds(id.slice(0, lastDotIndex)));
  }
  return indeterminateRowsById;
};

const getIndeterminate = (rows, rowsById, state) => {
  const indeterminateRowsById = {};
  let usedParentIndex = '';
  const getIndeterminateRecursive = (subRows, rowIdScope = null) => {
    for (const row of subRows) {
      if (row.subRows.length > 0) {
        // find leaf nodes
        getIndeterminateRecursive(row.subRows, row.id);
      } else if (rowIdScope !== null && usedParentIndex !== rowIdScope) {
        usedParentIndex = rowIdScope;
        const checkIndeterminate = (rowId) => {
          const [parentRow, dotIndex] = getParentRow(rowId, rowsById);
          const selectedRows = parentRow.subRows.filter((item) => state.selectedRowIds[item.id]);
          const areAllSelected = parentRow.subRows.length === selectedRows.length;
          const isOneSelected = selectedRows.length > 0;

          // if not all, but at least one subRow is selected, set the parent row's state to indeterminate
          if (isOneSelected && !areAllSelected) {
            const parentRowId = parentRow.id;
            Object.assign(indeterminateRowsById, getIndeterminateRowIds(parentRowId));
            return;
          }
          if (dotIndex !== Infinity) {
            // recursively check indeterminate state until root nodes are reached
            checkIndeterminate(parentRow.id);
          }
          return;
        };

        checkIndeterminate(row.id);
      }
    }
  };
  getIndeterminateRecursive(rows);
  return indeterminateRowsById;
};

/**
 * A plugin hook that marks parent rows as indeterminate if a child row is selected in `MultiSelect` mode.
 * When using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)
 *
 * __Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.
 *
 * __Note:__ This hook has to traverse the whole data tree on each selection, which will lead to performance degradation for large datasets. Please use with caution!
 *
 * @param {event} onIndeterminateChange Fired when the indeterminate state of rows is changed.
 */
export const useIndeterminateRowSelection = (onIndeterminateChange?: onIndeterminateChange) => {
  const toggleRowProps = (rowProps, { row, instance }) => {
    let indeterminate;
    if (instance.isAllRowsSelected) {
      indeterminate = false;
    } else {
      indeterminate = instance?.state?.indeterminateRows?.[row.id] ?? false;
    }
    return [
      rowProps,
      {
        indeterminate: indeterminate,
        checked: indeterminate ? true : rowProps.checked
      }
    ];
  };

  const stateReducer = (newState, action, prevState, instance) => {
    const { rowsById, state, rows } = instance;
    if (action.type === 'INDETERMINATE_ROW_IDS') {
      if (action.payload === 'reset') {
        return {
          ...newState,
          indeterminateRows: {}
        };
      }

      const indeterminateRowsById = getIndeterminate(rows, rowsById, state);

      return {
        ...newState,
        indeterminateRows: indeterminateRowsById
      };
    }
  };

  const useInstanceAfterData = (instance) => {
    const {
      data,
      dispatch,
      rowsById,
      state: { selectedRowIds, indeterminateRows },
      webComponentsReactProperties: { selectionMode, selectionBehavior, isTreeTable }
    } = instance;

    useEffect(() => {
      if (
        isTreeTable &&
        selectionMode === AnalyticalTableSelectionMode.MultiSelect &&
        selectionBehavior !== AnalyticalTableSelectionBehavior.RowOnly &&
        Object.keys(selectedRowIds).length &&
        Object.keys(rowsById).length !== Object.keys(selectedRowIds).length
      ) {
        dispatch({ type: 'INDETERMINATE_ROW_IDS' });
      } else if (typeof indeterminateRows === 'object' && Object.keys(indeterminateRows).length) {
        dispatch({ type: 'INDETERMINATE_ROW_IDS', payload: 'reset' });
      }
    }, [data, selectedRowIds, isTreeTable, selectionMode, selectionBehavior]);

    useEffect(() => {
      if (typeof onIndeterminateChange === 'function' && indeterminateRows) {
        onIndeterminateChange({ indeterminateRowsById: indeterminateRows, tableInstance: instance });
      }
    }, [indeterminateRows]);
  };

  const useIndeterminate = (hooks) => {
    hooks.getToggleRowSelectedProps.push(toggleRowProps);
    hooks.stateReducers.push(stateReducer);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
  };

  useIndeterminate.pluginName = 'useIndeterminate';

  return useIndeterminate;
};

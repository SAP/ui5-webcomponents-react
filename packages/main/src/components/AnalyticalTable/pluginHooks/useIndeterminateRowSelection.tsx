import { useEffect } from 'react';
import { TableSelectionBehavior, TableSelectionMode } from '../../../enums';

/**
 * A plugin hook that marks parent rows as indeterminate if a child row is selected in `MultiSelect` mode.
 * When using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)
 */
export const useIndeterminateRowSelection = () => {
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

      const indeterminateRowsById = {};
      let usedParentIndex = '';
      const getIndeterminate = (rows, rowIdScope = null) => {
        rows.forEach((row) => {
          if (row.subRows.length > 0) {
            // find leaf nodes
            getIndeterminate(row.subRows, row.id);
          } else if (rowIdScope !== null && usedParentIndex !== rowIdScope) {
            usedParentIndex = rowIdScope;
            const checkIndeterminate = (rowId) => {
              const getParentRow = (id) => {
                let lastDotIndex = id.lastIndexOf('.');
                if (lastDotIndex === -1) {
                  lastDotIndex = Infinity;
                }
                const parentRowId = id.slice(0, lastDotIndex);
                return [rowsById[parentRowId], lastDotIndex];
              };
              const [parentRow, dotIndex] = getParentRow(rowId);
              const selectedRows = parentRow.subRows.filter((item) => state.selectedRowIds[item.id]);
              const areAllSelected = parentRow.subRows.length === selectedRows.length;
              const isOneSelected = selectedRows.length > 0;

              // if not all, but at least one subRow is selected, set the parent row's state to indeterminate
              if (isOneSelected && !areAllSelected) {
                const parentRowId = parentRow.id;

                const indeterminateRowIds = (id) => {
                  const lastDotIndex = id.lastIndexOf('.');
                  indeterminateRowsById[id] = true;
                  if (lastDotIndex !== -1) {
                    // set all parent rows to indeterminate
                    indeterminateRowIds(id.slice(0, lastDotIndex));
                  }
                };
                indeterminateRowIds(parentRowId);
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
        });
      };

      getIndeterminate(rows.filter((item) => !item.original.emptyRow));

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
      isAllRowsSelected,
      state: { selectedRowIds, indeterminateRows },
      webComponentsReactProperties: { selectionMode, selectionBehavior, isTreeTable }
    } = instance;

    useEffect(() => {
      if (
        isTreeTable &&
        selectionMode === TableSelectionMode.MultiSelect &&
        selectionBehavior !== TableSelectionBehavior.RowOnly &&
        Object.keys(selectedRowIds).length &&
        !isAllRowsSelected
      ) {
        dispatch({ type: 'INDETERMINATE_ROW_IDS' });
      } else if (typeof indeterminateRows === 'object' && Object.keys(indeterminateRows).length) {
        dispatch({ type: 'INDETERMINATE_ROW_IDS', payload: 'reset' });
      }
    }, [data, selectedRowIds, isTreeTable, selectionMode, selectionBehavior, isAllRowsSelected]);
  };

  const useIndeterminate = (hooks) => {
    hooks.getToggleRowSelectedProps.push(toggleRowProps);
    hooks.stateReducers.push(stateReducer);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
  };

  useIndeterminate.pluginName = 'useIndeterminate';

  return useIndeterminate;
};

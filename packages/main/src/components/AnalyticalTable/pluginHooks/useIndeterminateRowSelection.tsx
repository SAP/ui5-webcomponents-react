import React, { useEffect } from 'react';
const getParentIndicesRecursive = (rowId) => {
  const parentIndices = {};
  const getParentIndices = (internalRowId) => {
    const lastDotIndex = internalRowId.lastIndexOf('.');
    if (~lastDotIndex) {
      const parentRowId = internalRowId.slice(0, lastDotIndex);
      if (!parentIndices[parentRowId]) {
        parentIndices[parentRowId] = true;
        getParentIndices(parentRowId);
      }
    }
  };
  getParentIndices(rowId);
  return parentIndices;
};

/**
 * Todo
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
    if (action.type === 'INDETERMINATE_ROW_IDS') {
      let indeterminateRows = {};
      const allSelectedRows = {};
      let allSelected = true;
      let currentDepth = -1;

      instance.flatRows
        ?.filter((item) => !item.original.emptyRow)
        .sort((a, b) => b.id.localeCompare(a.id))
        .map((item) => {
          if (currentDepth === -1) {
            currentDepth = item.depth;
          } else if (currentDepth !== item.depth) {
            currentDepth = item.depth;
            if (allSelected && newState.selectedRowIds[item.id]) {
              allSelectedRows[item.id] = true;
              delete indeterminateRows[item.id];
            }
            allSelected = true;
          }

          if (newState.selectedRowIds[item.id]) {
            const parentRowId = item.id.slice(0, item.id.lastIndexOf('.'));
            if (parentRowId) {
              indeterminateRows = { ...indeterminateRows, ...getParentIndicesRecursive(item.id) };
            }
          } else {
            allSelected = false;
          }
          return item;
        });
      return {
        ...newState,
        indeterminateRows: indeterminateRows
      };
    }
  };

  const useInstanceAfterData = (instance) => {
    const {
      data,
      dispatch,
      state: { selectedRowIds }
    } = instance;

    useEffect(() => {
      dispatch({ type: 'INDETERMINATE_ROW_IDS' });
    }, [data, selectedRowIds]);
  };

  const useIndeterminate = (hooks) => {
    hooks.getToggleRowSelectedProps.push(toggleRowProps);
    hooks.stateReducers.push(stateReducer);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
  };

  useIndeterminate.pluginName = 'useIndeterminate';

  return useIndeterminate;
};

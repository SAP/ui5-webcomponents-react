import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { TableSelectionMode } from '@ui5/webcomponents-react/dist/TableSelectionMode';
import React from 'react';
import { TableSelectionBehavior } from '../../..';
import { tagNamesWhichShouldNotSelectARow } from '../hooks/useSingleRowStateSelection';

type DisableRowSelectionType = string | ((row: Record<any, any>) => boolean);

const customCheckBoxStyling = {
  verticalAlign: 'middle'
};

/**
 * todo
 */
export const useIndeterminateRowSelection = (selectSubRows: true) => {
  const selectedSubRows = () => {};
  const toggleRowProps = (rowProps, { row, instance }) => {
    let parentIndices = {};
    const getParentIndices = (rowId) => {
      const lastDotIndex = rowId.lastIndexOf('.');
      if (~lastDotIndex) {
        const parentRowId = rowId.slice(0, lastDotIndex);
        if (!parentIndices[parentRowId]) {
          parentIndices[parentRowId] = true;
          getParentIndices(parentRowId);
        }
      }
    };

    Object.entries(instance.state.selectedRowIds).forEach(([key, val]) => {
      if (val) {
        getParentIndices(key);
      }
    });
    const indeterminate = parentIndices[row.id] ?? false;
    return [rowProps, { indeterminate, checked: indeterminate ? true : rowProps.checked }];
  };

  // todo: check if it's possible to manipulate without copying
  const getRowProps = (rowProps, { row, instance }) => {
    const { webComponentsReactProperties, toggleRowSelected, selectedFlatRows, flatRows } = instance;
    const handleRowSelect = (e, selectionCellClick = false) => {
      if (
        e.target?.dataset?.name !== 'internal_selection_column' &&
        !(e.markerAllowTableRowSelection === true || e.nativeEvent?.markerAllowTableRowSelection === true) &&
        tagNamesWhichShouldNotSelectARow.has(e.target.tagName)
      ) {
        return;
      }

      // dont select empty rows
      const isEmptyRow = row.original?.emptyRow;
      if (isEmptyRow) {
        return;
      }

      // dont select grouped rows
      if (row.isGrouped) {
        return;
      }

      const { selectionBehavior, selectionMode, onRowSelected, onRowClick } = webComponentsReactProperties;

      if (typeof onRowClick === 'function' && e.target?.dataset?.name !== 'internal_selection_column') {
        onRowClick(enrichEventWithDetails(e, { row }));
      }

      if (webComponentsReactProperties.selectionMode === TableSelectionMode.None) {
        return;
      }

      // dont continue if the row was clicked and selection mode is row selector only
      if (selectionBehavior === TableSelectionBehavior.RowSelector && !selectionCellClick) {
        return;
      }

      if (selectionMode === TableSelectionMode.SingleSelect) {
        for (const selectedRow of selectedFlatRows) {
          if (selectedRow.id !== row.id) {
            toggleRowSelected(selectedRow.id, false);
          }
        }
      }
      instance.toggleRowSelected(row.id);

      // fire event
      if (typeof onRowSelected === 'function') {
        const payload = {
          row,
          isSelected: !row.isSelected,
          selectedFlatRows: !row.isSelected ? [row.id] : [],
          allRowsSelected: false
        };
        if (selectionMode === TableSelectionMode.MultiSelect) {
          const isRowSelected = selectionCellClick ? row.isSelected : !row.isSelected;
          if (selectionCellClick) {
            payload.isSelected = row.isSelected;
          }
          payload.selectedFlatRows = isRowSelected
            ? [...selectedFlatRows, row]
            : selectedFlatRows.filter((prevRow) => prevRow.id !== row.id);

          if (payload.selectedFlatRows.length === flatRows.length) {
            payload.allRowsSelected = true;
          }
        }
        onRowSelected(enrichEventWithDetails(e, payload));
      }
    };

    return [
      rowProps,
      {
        onKeyDown: (e, selectionCellClick = false) => {
          if (e.key === 'Enter' || e.code === 'Space') {
            if (!tagNamesWhichShouldNotSelectARow.has(e.target.tagName)) {
              e.preventDefault();
            }
            handleRowSelect(e, selectionCellClick);
          }
        },
        onClick: handleRowSelect
      }
    ];
  };

  const useIndeterminate = (hooks) => {
    hooks.getToggleRowSelectedProps.push(toggleRowProps);
    hooks.getRowProps.push(getRowProps);
  };

  useIndeterminate.pluginName = 'useIndeterminate';

  return useIndeterminate;
};

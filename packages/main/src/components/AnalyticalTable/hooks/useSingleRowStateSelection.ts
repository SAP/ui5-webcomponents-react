import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { TableSelectionBehavior } from '../../../enums/TableSelectionBehavior';
import { TableSelectionMode } from '../../../enums/TableSelectionMode';

const getRowProps = (rowProps, { row, instance }) => {
  const { webComponentsReactProperties, toggleRowSelected, selectedFlatRows, flatRows } = instance;
  const handleRowSelect = (e, selectionCellClick = false) => {
    const isSelectionCell = selectionCellClick || e.target.dataset.selectionCell === 'true';
    if (
      e.target?.dataset?.name !== 'internal_selection_column' &&
      !(e.markerAllowTableRowSelection === true || e.nativeEvent?.markerAllowTableRowSelection === true) &&
      webComponentsReactProperties.tagNamesWhichShouldNotSelectARow.has(e.target.tagName)
    ) {
      return;
    }

    // don't select empty rows
    const isEmptyRow = row.original?.emptyRow;
    if (isEmptyRow) {
      return;
    }

    // don't select grouped rows
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

    // don't continue if the row was clicked and selection mode is row selector only
    if (selectionBehavior === TableSelectionBehavior.RowSelector && !isSelectionCell) {
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
        payload.selectedFlatRows = !row.isSelected
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
      onKeyDown: (e) => {
        if (e.key === 'Enter' || e.code === 'Space') {
          if (!webComponentsReactProperties.tagNamesWhichShouldNotSelectARow.has(e.target.tagName)) {
            e.preventDefault();
          }
          handleRowSelect(e);
        }
      },
      onClick: handleRowSelect
    }
  ];
};

export const useSingleRowStateSelection = (hooks) => {
  hooks.getRowProps.push(getRowProps);
};
useSingleRowStateSelection.pluginName = 'useSingleRowStateSelection';

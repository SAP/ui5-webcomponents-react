import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { AnalyticalTableSelectionBehavior, AnalyticalTableSelectionMode } from '../../../enums/index.js';

const getRowProps = (rowProps, { row, instance }) => {
  const { webComponentsReactProperties, toggleRowSelected, selectedFlatRows, dispatch } = instance;
  const handleRowSelect = (e) => {
    const isSelectionCell = e.target.dataset.selectionCell === 'true';
    if (
      e.target?.dataset?.name !== 'internal_selection_column' &&
      !(e.markerAllowTableRowSelection === true || e.nativeEvent?.markerAllowTableRowSelection === true) &&
      webComponentsReactProperties.tagNamesWhichShouldNotSelectARow.has(e.target.tagName)
    ) {
      return;
    }

    // don't select grouped rows
    if (row.isGrouped) {
      return;
    }

    const { selectionBehavior, selectionMode, onRowSelect, onRowClick } = webComponentsReactProperties;

    if (typeof onRowClick === 'function' && e.target?.dataset?.name !== 'internal_selection_column') {
      onRowClick(enrichEventWithDetails(e, { row }));
    }

    if (selectionMode === AnalyticalTableSelectionMode.None) {
      return;
    }

    // don't continue if the row was clicked and selection mode is row selector only
    if (selectionBehavior === AnalyticalTableSelectionBehavior.RowSelector && !isSelectionCell) {
      return;
    }

    // deselect other rows
    if (selectionMode === AnalyticalTableSelectionMode.SingleSelect) {
      for (const selectedRow of selectedFlatRows) {
        if (selectedRow.id !== row.id) {
          toggleRowSelected(selectedRow.id, false);
        }
      }
    }

    toggleRowSelected(row.id);

    if (typeof onRowSelect === 'function') {
      // update state to return instance values after update (see useSelectionChangeCallback hook)
      dispatch({ type: 'SELECT_ROW_CB', payload: { event: e, row, fired: true } });
    }
  };

  return [
    rowProps,
    {
      onKeyDown: (e) => {
        if (
          (!e.target.hasAttribute('aria-expanded') || (e.shiftKey && e.code === 'Space')) &&
          (e.key === 'Enter' || e.code === 'Space')
        ) {
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

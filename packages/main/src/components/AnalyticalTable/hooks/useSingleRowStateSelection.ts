import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { AnalyticalTableSelectionBehavior, AnalyticalTableSelectionMode } from '../../../enums/index.js';
import { getTagNameWithoutScopingSuffix } from '../../../internal/utils.js';
import type { ReactTableHooks, RowType, TableInstance } from '../types/index.js';

const getRowProps = (rowProps, { row, instance }: { row: RowType; instance: TableInstance }) => {
  const { webComponentsReactProperties, toggleRowSelected, selectedFlatRows, dispatch } = instance;
  const handleRowSelect = (e) => {
    const isSelectionCell = e.target.dataset.selectionCell === 'true';
    if (
      e.target?.dataset?.name !== 'internal_selection_column' &&
      !(e.markerAllowTableRowSelection === true || e.nativeEvent?.markerAllowTableRowSelection === true) &&
      webComponentsReactProperties.tagNamesWhichShouldNotSelectARow.has(
        getTagNameWithoutScopingSuffix(e.target.tagName)
      )
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
    if (selectionMode === AnalyticalTableSelectionMode.Single) {
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

  const handleKeyDown = (e) => {
    if ((!e.target.hasAttribute('aria-expanded') || (e.shiftKey && e.code === 'Space')) && e.code === 'Enter') {
      if (
        !webComponentsReactProperties.tagNamesWhichShouldNotSelectARow.has(
          getTagNameWithoutScopingSuffix(e.target.tagName)
        )
      ) {
        e.preventDefault();
      }
      handleRowSelect(e);
    }
    if (e.code === 'Space') {
      e.preventDefault();
    }
  };

  const handleKeyUp = (e) => {
    if (!e.target.hasAttribute('aria-expanded') && !e.shiftKey && e.code === 'Space') {
      if (
        !webComponentsReactProperties.tagNamesWhichShouldNotSelectARow.has(
          getTagNameWithoutScopingSuffix(e.target.tagName)
        )
      ) {
        e.preventDefault();
      }
      handleRowSelect(e);
    }
  };

  return [
    rowProps,
    {
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleRowSelect
    }
  ];
};

export const useSingleRowStateSelection = (hooks: ReactTableHooks) => {
  hooks.getRowProps.push(getRowProps);
};
useSingleRowStateSelection.pluginName = 'useSingleRowStateSelection';

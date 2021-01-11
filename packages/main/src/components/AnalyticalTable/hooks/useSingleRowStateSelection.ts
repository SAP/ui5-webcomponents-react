import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';

const tagNamesWhichShouldNotSelectARow = new Set([
  'UI5-INPUT',
  'UI5-LINK',
  'UI5-BUTTON',
  'UI5-CHECKBOX',
  'UI5-COMBOBOX',
  'UI5-MULTI-COMBOBOX',
  'UI5-SELECT',
  'UI5-RADIOBUTTON',
  'UI5-SEGMENTEDBUTTON',
  'UI5-SWITCH',
  'UI5-TOGGLEBUTTON',
  'UI5-DATE-PICKER',
  'UI5-DATERANGE-PICKER',
  'UI5-DATETIME-PICKER',
  'UI5-DURATION-PICKER',
  'UI5-TIME-PICKER',
  'UI5-FILE-UPLOADER'
]);

const getRowProps = (rowProps, { row, instance }) => {
  const { webComponentsReactProperties, toggleRowSelected, selectedFlatRows } = instance;
  return [
    rowProps,
    {
      onClick: (e, selectionCellClick = false) => {
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

        if (webComponentsReactProperties.selectionMode === TableSelectionMode.NONE) {
          return;
        }

        // dont continue if the row was clicked and selection mode is row selector only
        if (selectionBehavior === TableSelectionBehavior.ROW_SELECTOR && !selectionCellClick) {
          return;
        }

        if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
          for (const row of selectedFlatRows) {
            toggleRowSelected(row.id, false);
          }
        }
        instance.toggleRowSelected(row.id);

        // fire event
        if (typeof onRowSelected === 'function') {
          const payload = {
            row,
            isSelected: !row.isSelected,
            selectedFlatRows: !row.isSelected ? [row.id] : []
          };
          if (selectionMode === TableSelectionMode.MULTI_SELECT) {
            payload.selectedFlatRows = !row.isSelected
              ? [...selectedFlatRows, row]
              : selectedFlatRows.filter((prevRow) => prevRow.id !== row.id);
          }
          onRowSelected(enrichEventWithDetails(e, payload));
        }
      }
    }
  ];
};

export const useSingleRowStateSelection = (hooks) => {
  hooks.getRowProps.push(getRowProps);
};
useSingleRowStateSelection.pluginName = 'useSingleRowStateSelection';

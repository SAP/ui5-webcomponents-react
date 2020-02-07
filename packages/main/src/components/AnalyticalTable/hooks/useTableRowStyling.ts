import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';

const ROW_SELECTION_ATTRIBUTE = 'data-is-selected';

export const useTableRowStyling = (hooks) => {
  hooks.getRowProps.push((passedRowProps, { instance, row }) => {
    const { classes, selectionMode, onRowSelected, alternateRowColor } = instance.webComponentsReactProperties;
    const isEmptyRow = row.original?.emptyRow;
    let className = classes.tr;
    if (row.isGrouped) {
      className += ` ${classes.tableGroupHeader}`;
    }

    if (isEmptyRow) {
      className += ` ${classes.emptyRow}`;
    }

    if (alternateRowColor && row.index % 2 !== 0) {
      className += ` ${classes.alternateRowColor}`;
    }

    const rowProps: any = {
      ...passedRowProps,
      className,
      role: 'row'
    };
    if ([TableSelectionMode.SINGLE_SELECT, TableSelectionMode.MULTI_SELECT].includes(selectionMode) && !isEmptyRow) {
      rowProps.onClick = (e) => {
        if (row.isGrouped) {
          return;
        }

        row.toggleRowSelected();

        if (typeof onRowSelected === 'function') {
          onRowSelected(Event.of(null, e, { row, isSelected: !row.isSelected }));
        }

        if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
          instance.selectedFlatRows.forEach(({ id }) => {
            instance.toggleRowSelected(id, false);
          });
        }
      };
      if (row.isSelected) {
        rowProps[ROW_SELECTION_ATTRIBUTE] = '';
      }
    }
    return rowProps;
  });
};

useTableRowStyling.pluginName = 'useTableRowStyling';

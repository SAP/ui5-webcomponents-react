import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { toggleSelected } from '../util';

const ROW_SELECTION_ATTRIBUTE = 'data-is-selected';

export const useTableRowStyling = (hooks) => {
  hooks.getRowProps.push((passedRowProps, { instance, row }) => {
    const { webComponentsReactProperties, dispatch, toggleRowSelected, selectedFlatRows } = instance;
    const { classes, selectionBehavior, selectionMode } = webComponentsReactProperties;
    const isEmptyRow = row.original?.emptyRow;
    let className = classes.tr;
    if (row.isGrouped) {
      className += ` ${classes.tableGroupHeader}`;
    }

    if (isEmptyRow) {
      className += ` ${classes.emptyRow}`;
    }

    if (TableSelectionBehavior.ROW_SELECTOR === selectionBehavior) {
      className += ` ${classes.selectableFirstCol}`;
    }

    const rowProps: any = {
      ...passedRowProps,
      className,
      role: 'row'
    };
    if ([TableSelectionMode.SINGLE_SELECT, TableSelectionMode.MULTI_SELECT].includes(selectionMode) && !isEmptyRow) {
      if ([TableSelectionBehavior.ROW_ONLY, TableSelectionBehavior.ROW].includes(selectionBehavior)) {
        rowProps.onClick = (e) => {
          if (row.isGrouped) {
            return;
          }
          toggleSelected(e, row, webComponentsReactProperties, dispatch, toggleRowSelected, selectedFlatRows);
        };
      }
      if (row.isSelected) {
        rowProps[ROW_SELECTION_ATTRIBUTE] = '';
      }
    }
    return rowProps;
  });
};

useTableRowStyling.pluginName = 'useTableRowStyling';

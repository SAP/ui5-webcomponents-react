import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';

const ROW_SELECTION_ATTRIBUTE = 'data-is-selected';

export const useTableRowStyling = (hooks) => {
  hooks.getRowProps.push((passedRowProps, { instance, row }) => {
    const { webComponentsReactProperties } = instance;
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
      className += ` ${classes.selectionModeRowSelector}`;
    }

    const rowProps: any = {
      ...passedRowProps,
      className,
      role: 'row'
    };
    if ([TableSelectionMode.SINGLE_SELECT, TableSelectionMode.MULTI_SELECT].includes(selectionMode) && !isEmptyRow) {
      if (row.isSelected) {
        rowProps[ROW_SELECTION_ATTRIBUTE] = '';
      }
    }
    return rowProps;
  });
};

useTableRowStyling.pluginName = 'useTableRowStyling';

import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';

const ROW_SELECTION_ATTRIBUTE = 'data-is-selected';

export const useTableRowStyling = (hooks) => {
  hooks.getRowProps.push((passedRowProps, { instance, row }) => {
    const { classes, selectionMode, onRowSelected, isTreeTable } = instance.webComponentsReactProperties;
    const isEmptyRow = row.original?.emptyRow;
    let className = classes.tr;
    if (row.isGrouped) {
      className += ` ${classes.tableGroupHeader}`;
    }

    if (isEmptyRow) {
      className += ` ${classes.emptyRow}`;
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
        if (isTreeTable) {
          if (selectionMode === TableSelectionMode.MULTI_SELECT) {
            instance.dispatch({
              type: 'SET_SELECTED_ROWS',
              selectedIds: Object.assign({}, ...instance.selectedFlatRows.map((item) => ({ [item.id]: true })), {
                [row.id]: !row.isSelected
              })
            });
          } else {
            instance.dispatch({ type: 'SET_SELECTED_ROWS', selectedIds: { [row.id]: !row.isSelected } });
          }
        } else {
          row.toggleRowSelected();
        }

        if (typeof onRowSelected === 'function') {
          const payload = {
            row,
            isSelected: !row.isSelected
          };
          const payloadWithFlatRows = {
            ...payload,
            selectedFlatRows: !row.isSelected
              ? [...instance.selectedFlatRows, row]
              : instance.selectedFlatRows.filter((prevRow) => prevRow.id !== row.id)
          };
          onRowSelected(
            enrichEventWithDetails(e, TableSelectionMode.MULTI_SELECT === selectionMode ? payloadWithFlatRows : payload)
          );
        }

        if (selectionMode === TableSelectionMode.SINGLE_SELECT && !isTreeTable) {
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

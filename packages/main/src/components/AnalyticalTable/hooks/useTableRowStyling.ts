import { Event } from '@ui5/webcomponents-react-base/lib/Event';

const ROW_SELECTION_ATTRIBUTE = 'data-is-selected';

export const useTableRowStyling = (classes, selectable, onRowSelected) => {
  const hook = (instance) => {
    instance.getRowProps.push((passedRowProps, instance, row) => {
      let className = classes.tr;
      if (row.isGrouped) {
        className += ` ${classes.tableGroupHeader}`;
      }

      const rowProps: any = {
        ...passedRowProps,
        className,
        role: 'row'
      };

      if (selectable) {
        rowProps.onClick = (e) => {
          if (row.isGrouped) {
            return;
          }

          row.toggleRowSelected();
          if (typeof onRowSelected === 'function') {
            onRowSelected(Event.of(null, e, { row, isSelected: !row.isSelected }));
          }
          const clickedRow = e.currentTarget as HTMLDivElement;
          if (clickedRow.hasAttribute(ROW_SELECTION_ATTRIBUTE)) {
            clickedRow.removeAttribute(ROW_SELECTION_ATTRIBUTE);
          } else {
            clickedRow.setAttribute(ROW_SELECTION_ATTRIBUTE, '');
          }
        };
        if (row.isSelected) {
          rowProps['data-is-selected'] = '';
        }
      }
      return rowProps;
    });

    return instance;
  };

  hook.pluginName = 'useTableRowStyling';
  return hook;
};

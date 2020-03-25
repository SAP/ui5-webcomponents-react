import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { PluginHook } from 'react-table';

export const useToggleRowExpand: PluginHook<any> = (hooks) => {
  hooks.getToggleRowExpandedProps.push((rowProps, { row, instance }) => {
    const { onRowExpandChange, isTreeTable } = instance.webComponentsReactProperties;
    return {
      ...rowProps,
      onClick: (e) => {
        e.stopPropagation();
        e.persist();
        row.toggleRowExpanded();
        let column = null;
        if (!isTreeTable) {
          column = row.cells.find((cell) => cell.column.id === row.groupByID).column;
        }

        onRowExpandChange(enrichEventWithDetails(e, { row, column }));
      }
    };
  });
};
useToggleRowExpand.pluginName = 'useToggleRowExpand';

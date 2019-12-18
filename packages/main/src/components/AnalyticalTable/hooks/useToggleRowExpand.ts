import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { PluginHook } from 'react-table';

export const useToggleRowExpand = (onRowExpandChange, isTreeTable) => {
  const hook: PluginHook<any> = (instance) => {
    instance.getExpandedToggleProps.push((rowProps, instance, row) => {
      return {
        ...rowProps,
        onClick: (e) => {
          e.stopPropagation();
          e.persist();
          row.toggleExpanded();
          let column = null;
          if (!isTreeTable) {
            column = row.cells.find((cell) => cell.column.id === row.groupByID).column;
          }

          onRowExpandChange(Event.of(null, e, { row, column }));
        }
      };
    });
  };
  hook.pluginName = 'useToggleRowExpand';
  return hook;
};

import { PluginHook } from 'react-table';

export const useTableStyling = (classes) => {
  const hook: PluginHook<{}> = (tableHooks) => {
    tableHooks.getTableProps.push((tableProps) => {
      return {
        ...tableProps,
        className: classes.table
      };
    });
  };
  hook.pluginName = 'useTableStyling';
  return hook;
};

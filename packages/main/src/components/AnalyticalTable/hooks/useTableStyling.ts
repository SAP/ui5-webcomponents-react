import { PluginHook } from 'react-table';

export const useTableStyling = (classes) => {
  const hook: PluginHook<{}> = (tableHooks) => {
    tableHooks.getTableProps.push(() => {
      return {
        className: classes.table
      };
    });
  };
  hook.pluginName = 'useTableStyling';
  return hook;
};

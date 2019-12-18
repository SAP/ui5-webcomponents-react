import { PluginHook } from 'react-table';

export const useTableHeaderGroupStyling = (classes) => {
  const hook: PluginHook<{}> = (instance) => {
    instance.getHeaderGroupProps.push((headerGroupProps) => {
      return {
        ...headerGroupProps,
        className: classes.tableHeaderRow
      };
    });
  };
  hook.pluginName = 'useTableHeaderGroupStyling';
  return hook;
};

import { PluginHook } from 'react-table';
import { makeTemplateColumns } from './utils';

export const useTableHeaderGroupStyling = (classes) => {
  const hook: PluginHook<{}> = (instance) => {
    instance.getHeaderGroupProps.push(() => {
      return {
        className: classes.tableHeaderRow
      };
    });
  };
  hook.pluginName = 'useTableHeaderGroupStyling';
  return hook;
};

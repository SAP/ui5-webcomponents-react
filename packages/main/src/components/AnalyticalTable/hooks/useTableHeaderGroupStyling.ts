import { PluginHook } from 'react-table';

export const useTableHeaderGroupStyling: PluginHook<{}> = (hooks) => {
  hooks.getHeaderGroupProps.push((headerGroupProps, { instance }) => {
    const { classes } = instance.webComponentsReactProperties;
    return {
      ...headerGroupProps,
      className: classes.tableHeaderRow
    };
  });
};
useTableHeaderGroupStyling.pluginName = 'useTableHeaderGroupStyling';

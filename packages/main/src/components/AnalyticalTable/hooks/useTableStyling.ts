export const useTableStyling = (tableHooks) => {
  tableHooks.getTableProps.push((tableProps, { instance }) => {
    const { classes } = instance.webComponentsReactProperties;
    return {
      ...tableProps,
      className: classes.table
    };
  });
};
useTableStyling.pluginName = 'useTableStyling';

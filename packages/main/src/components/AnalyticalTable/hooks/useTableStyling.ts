const getTableProps = (tableProps, { instance }) => {
  const { classes } = instance.webComponentsReactProperties;
  return [
    tableProps,
    {
      className: classes.table
    }
  ];
};

export const useTableStyling = (tableHooks) => {
  tableHooks.getTableProps.push(getTableProps);
};
useTableStyling.pluginName = 'useTableStyling';

const getHeaderGroupProps = (headerGroupProps, { instance }) => {
  const { classes } = instance.webComponentsReactProperties;
  return [
    headerGroupProps,
    {
      className: classes.tableHeaderRow
    }
  ];
};

export const useTableHeaderGroupStyling = (hooks) => {
  hooks.getHeaderGroupProps.push(getHeaderGroupProps);
};
useTableHeaderGroupStyling.pluginName = 'useTableHeaderGroupStyling';

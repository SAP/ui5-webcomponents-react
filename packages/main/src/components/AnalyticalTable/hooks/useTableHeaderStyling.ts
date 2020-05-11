const getHeaderProps = (columnProps, { instance, column }) => {
  const { classes } = instance.webComponentsReactProperties;
  return [
    columnProps,
    {
      className: classes.th,
      column,
      style: {
        width: column.width
      },
      id: column.id
    }
  ];
};

export const useTableHeaderStyling = (hooks) => {
  hooks.getHeaderProps.push(getHeaderProps);
};
useTableHeaderStyling.pluginName = 'useTableHeaderStyling';

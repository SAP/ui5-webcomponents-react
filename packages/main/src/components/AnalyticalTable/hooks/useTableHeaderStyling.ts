import { PluginHook } from 'react-table';

export const useTableHeaderStyling: PluginHook<{}> = (hooks) => {
  hooks.getHeaderProps.push((columnProps, { instance, column }) => {
    const { classes } = instance.webComponentsReactProperties;
    return {
      ...columnProps,
      className: classes.th,
      column,
      style: {
        ...columnProps.style,
        position: 'absolute' // TODO should be removed at some point in time
      },
      id: column.id
    };
  });
};
useTableHeaderStyling.pluginName = 'useTableHeaderStyling';

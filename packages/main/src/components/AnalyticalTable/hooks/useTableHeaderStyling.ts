import { PluginHook } from 'react-table';

export const useTableHeaderStyling = (classes) => {
  const hook: PluginHook<{}> = (instance) => {
    instance.getHeaderProps.push((columnProps, instance, column) => {
      return {
        ...columnProps,
        className: classes.th,
        column,
        style: {
          ...columnProps.style,
          position: 'absolute' // TODO should be removed at some point in time
        }
      };
    });
    return instance;
  };
  hook.pluginName = 'useTableHeaderStyling';
  return hook;
};

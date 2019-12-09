import { PluginHook } from 'react-table';

export const useTableHeaderStyling = (classes) => {
  const hook: PluginHook<{}> = (instance) => {
    instance.getHeaderProps.push((column) => {
      return {
        className: classes.th,
        column
      };
    });
    return instance;
  };
  hook.pluginName = 'useTableHeaderStyling';
  return hook;
};

import { PluginHook } from 'react-table';
import { useCellStyling } from './useCellStyling';

export const useTableCellStyling = (classes, rowHeight) => {
  const hook: PluginHook<{}> = (instance) => {
    instance.getCellProps.push(useCellStyling({ rowHeight }, classes));
  };
  hook.pluginName = 'useTableCellStyling';
  return hook;
};

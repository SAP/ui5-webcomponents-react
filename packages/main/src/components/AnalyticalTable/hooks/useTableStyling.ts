import { useCallback } from 'react';

export const useTableStyling = (classes) =>
  useCallback(
    (instance) => {
      instance.getTableProps.push(() => {
        return {
          className: classes.table
        };
      });
      return instance;
    },
    [classes.table]
  );

useTableStyling.pluginName = 'useTableStyling';

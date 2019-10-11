import { useCallback } from 'react';

export const useTableHeaderStyling = (classes, onColumnSizeChanged) =>
  useCallback(
    (instance) => {
      instance.getHeaderProps.push((column) => {
        return {
          className: classes.th,
          onColumnSizeChanged,
          column
        };
      });
      return instance;
    },
    [classes.th, onColumnSizeChanged]
  );

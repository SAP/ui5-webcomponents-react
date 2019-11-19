import { useCallback } from 'react';

export const useTableHeaderStyling = (classes, onColumnSizeChanged, onColumnBeingResized) =>
  useCallback(
    (instance) => {
      instance.getHeaderProps.push((column) => {
        return {
          className: classes.th,
          onColumnSizeChanged,
          onColumnBeingResized,
          column
        };
      });
      return instance;
    },
    [classes.th, onColumnSizeChanged, onColumnBeingResized]
  );

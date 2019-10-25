import { useCellStyling } from './useCellStyling';
import { useCallback } from 'react';

export const useTableCellStyling = (classes, rowHeight) =>
  useCallback(
    (instance) => {
      instance.getCellProps.push(useCellStyling({ rowHeight }, classes));
      return instance;
    },
    [rowHeight, classes]
  );

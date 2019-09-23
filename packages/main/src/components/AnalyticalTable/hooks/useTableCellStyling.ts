import { useCellStyling } from './useCellStyling';
import { useCallback } from 'react';

export const useTableCellStyling = (classes, cellHeight) =>
  useCallback(
    (instance) => {
      instance.getCellProps.push(useCellStyling({ cellHeight }, classes));
      return instance;
    },
    [cellHeight, classes]
  );

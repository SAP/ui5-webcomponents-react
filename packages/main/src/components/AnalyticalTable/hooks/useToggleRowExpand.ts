import { useCallback } from 'react';
import { Event } from '../../../../../base/src';

export const useToggleRowExpand = (onRowExpandChange) => {
  return useCallback(
    (instance) => {
      instance.getExpandedToggleProps.push((row) => {
        return {
          onClick: (e) => {
            e.stopPropagation();
            e.persist();
            row.toggleExpanded();
            const { column } = row.cells.find((cell) => cell.column.id === row.groupByID);
            onRowExpandChange(Event.of(null, e, { row, column }));
          }
        };
      });
    },
    [onRowExpandChange]
  );
};

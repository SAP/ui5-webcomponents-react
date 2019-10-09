import { useCallback } from 'react';

export const useTableRowStyling = (classes, resizedColumns, selectable, selectedRow) =>
  useCallback(
    (instance) => {
      instance.getRowProps.push((row) => {
        const pathsEqual =
          row.path.length === selectedRow.length && row.path.filter((item, i) => item !== selectedRow[i]).length === 0;
        let className = classes.tr;
        if (row.isAggregated) {
          className += ` ${classes.tableGroupHeader}`;
        }
        if (!row.isAggregated && selectable && pathsEqual) {
          className += ` ${classes.selectedRow}`;
        }
        return {
          className
        };
      });
      return instance;
    },
    [classes.tr, classes.tableGroupHeader, classes.selectedRow, resizedColumns, selectable, selectedRow]
  );

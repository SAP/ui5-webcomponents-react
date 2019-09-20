import { useCallback } from 'react';
import { makeTemplateColumns } from './utils';

export const useTableRowStyling = (classes, resizedColumns) =>
  useCallback(
    (instance) => {
      instance.getRowProps.push((row, table) => {
        let className = classes.tr;
        if (row.isAggregated) {
          className += ` ${classes.tableGroupHeader}`;
        }
        return {
          className,
          style: {
            gridTemplateColumns: makeTemplateColumns(table.columns, resizedColumns)
          }
        };
      });
      return instance;
    },
    [classes.tr, classes.tableGroupHeader, resizedColumns]
  );

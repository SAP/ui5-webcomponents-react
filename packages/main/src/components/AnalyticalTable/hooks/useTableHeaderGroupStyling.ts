import { useCallback } from 'react';
import { makeTemplateColumns } from './utils';

export const useTableHeaderGroupStyling = (classes, resizedColumns) =>
  useCallback(
    (instance) => {
      instance.getHeaderGroupProps.push((table) => {
        return {
          className: classes.tableHeaderRow,
          style: {
            gridTemplateColumns: makeTemplateColumns(table.headers, resizedColumns)
          }
        };
      });
      return instance;
    },
    [resizedColumns, classes.tableHeaderRow]
  );

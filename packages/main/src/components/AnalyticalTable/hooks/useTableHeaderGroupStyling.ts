import { useCallback } from 'react';
import { makeTemplateColumns } from './utils';

export const useTableHeaderGroupStyling = (classes, resizedColumns, stickyHeader) =>
  useCallback(
    (instance) => {
      instance.getHeaderGroupProps.push((table) => {
        return {
          className: classes.tableHeaderRow,
          style: {
            gridTemplateColumns: makeTemplateColumns(table.headers, resizedColumns),
            position: stickyHeader ? 'sticky' : 'relative',
            top: 0
          }
        };
      });
      return instance;
    },
    [resizedColumns, classes.tableHeaderRow, stickyHeader]
  );

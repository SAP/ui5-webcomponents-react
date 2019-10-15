import { useCallback, useEffect, useMemo, useRef } from 'react';

export const useTableRowStyling = (classes, resizedColumns, selectable, selectedRow, selectedRowKey) => {
  const prevSelectedRow = useRef(null);
  const prevSelectedRowKey = useRef(null);

  const applySelectedRow = useMemo(() => {
    if (selectedRow !== prevSelectedRow.current) {
      return true;
    }
    if (selectedRowKey !== prevSelectedRowKey.current) {
      return false;
    }
    return false;
  }, [selectedRow, selectedRowKey]);

  useEffect(() => {
    prevSelectedRow.current = selectedRow;
  }, [selectedRow]);

  useEffect(() => {
    prevSelectedRowKey.current = selectedRowKey;
  }, [selectedRowKey]);

  return useCallback(
    (instance) => {
      instance.getRowProps.push((row) => {
        const rowKey = `row_${row.index}`;
        let selected = false;

        if (!row.isAggregated && selectable) {
          if (applySelectedRow && selectedRow.length && selectedRow.length > 0) {
            selected = row.path.every((item, i) => item === selectedRow[i]);
          } else if (selectedRowKey && rowKey === selectedRowKey) {
            selected = true;
          }
        }

        let className = classes.tr;
        if (row.isAggregated) {
          className += ` ${classes.tableGroupHeader}`;
        }
        if (selected) {
          className += ` ${classes.selectedRow}`;
        }
        return {
          className
        };
      });
      return instance;
    },
    [classes.tr, classes.tableGroupHeader, classes.selectedRow, resizedColumns, selectable, selectedRow, selectedRowKey]
  );
};

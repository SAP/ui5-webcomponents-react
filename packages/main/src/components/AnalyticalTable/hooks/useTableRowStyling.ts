import { useEffect, useMemo, useRef } from 'react';
import { PluginHook } from 'react-table';

export const useTableRowStyling = (
  classes,
  selectable,
  selectedRow,
  selectedRowKey,
  onRowClicked,
  alternateRowColor
) => {
  const prevSelectedRow = useRef(null);
  const prevSelectedRowKey = useRef(null);

  const applySelectedRow = useMemo(() => {
    if (selectedRowKey !== prevSelectedRowKey.current) {
      return false;
    }
    if (selectedRow !== prevSelectedRow.current) {
      return true;
    }
    return false;
  }, [selectedRow, selectedRowKey]);

  useEffect(() => {
    prevSelectedRow.current = selectedRow;
  }, [selectedRow]);

  useEffect(() => {
    prevSelectedRowKey.current = selectedRowKey;
  }, [selectedRowKey]);

  const hook: PluginHook<{}> = (instance) => {
    instance.getRowProps.push((row) => {
      const rowKey = row.path.reduce((acc, val) => `${acc}_${val}`, 'row');
      let selected = false;

      if (!row.isAggregated && selectable) {
        if (applySelectedRow) {
          if (selectedRow.length && selectedRow.length > 0) {
            selected = row.path.length === selectedRow.length && row.path.every((item, i) => item === selectedRow[i]);
          }
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

      if (alternateRowColor) {
        if (row.index % 2 === 1) {
          className += ` ${classes.alternateRowColor}`;
        }
      }

      if (selectable) {
        return {
          className,
          onClick: onRowClicked(row)
        };
      }
      return {
        className
      };
    });
    return instance;
  };

  hook.pluginName = 'useTableRowStyling';
  return hook;
};

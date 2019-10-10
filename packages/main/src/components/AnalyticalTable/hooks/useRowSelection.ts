import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useCallback, useState } from 'react';

export const useRowSelection = (onRowSelected) => {
  const [selectedRowPath, setSelectedRowPath] = useState([]);
  const onRowClicked = useCallback(
    (row) => (e) => {
      if (row.isAggregated) return;
      const newKey = row.path;
      const pathsEqual =
        row.path.length === selectedRowPath.length && row.path.every((item, i) => item === selectedRowPath[i]);
      const newSelectedRow = pathsEqual ? [] : newKey;
      setSelectedRowPath(newSelectedRow);
      if (typeof onRowSelected === 'function') {
        onRowSelected(Event.of(null, e, { row, isSelected: newSelectedRow.length > 0 }));
      }
    },
    [selectedRowPath, setSelectedRowPath]
  );
  return [selectedRowPath, onRowClicked];
};

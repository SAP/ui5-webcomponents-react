import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useCallback, useState } from 'react';

export const useRowSelection = (onRowSelected) => {
  const [selectedRow, setSelectedRow] = useState([]);
  const onRowClicked = useCallback(
    (row) => (e) => {
      if (row.isAggregated) return;
      const newKey = row.path;
      const pathsEqual =
        row.path.length === selectedRow.length && row.path.filter((item, i) => item !== selectedRow[i]).length === 0;
      const newSelectedRow = pathsEqual ? [] : newKey;
      setSelectedRow(newSelectedRow);
      if (typeof onRowSelected === 'function') {
        onRowSelected(Event.of(null, e, { row, isSelected: newSelectedRow.length > 0 }));
      }
    },
    [selectedRow, setSelectedRow]
  );
  return [selectedRow, onRowClicked];
};

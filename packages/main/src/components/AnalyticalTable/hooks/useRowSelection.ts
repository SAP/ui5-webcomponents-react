import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useCallback, useState } from 'react';

export const useRowSelection = (onRowSelected) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const onRowClicked = useCallback(
    (row) => (e) => {
      if (row.isAggregated) return;
      const newKey = row.index;
      const newSelectedRow = selectedRow === newKey ? null : newKey;
      setSelectedRow(newSelectedRow);
      if (typeof onRowSelected === 'function') {
        onRowSelected(Event.of(null, e, { row, isSelected: !!newSelectedRow || newSelectedRow === 0 }));
      }
    },
    [selectedRow, setSelectedRow]
  );
  return [selectedRow, onRowClicked];
};

import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useCallback, useState, useRef } from 'react';

export const useRowSelection = (onRowSelected, selectedRowKeyProp) => {
  const [selectedRowPath, setSelectedRowPath] = useState([]);
  const prevSelectedRowKeyProp = useRef(null);
  const onRowClicked = useCallback(
    (row) => (e) => {
      if (row.isAggregated) return;
      const newKey = row.path;
      const pathsEqual =
        row.path.length === selectedRowPath.length && row.path.every((item, i) => item === selectedRowPath[i]);

      let newSelectedRow;

      const selectedIndexProp = typeof selectedRowKeyProp === 'string' ? selectedRowKeyProp.split('_')[1] : null;
      if (
        newKey.length === 1 &&
        prevSelectedRowKeyProp.current !== selectedRowKeyProp &&
        newKey[0] == selectedIndexProp
      ) {
        newSelectedRow = [];
        prevSelectedRowKeyProp.current = selectedRowKeyProp;
      } else {
        newSelectedRow = pathsEqual ? [] : newKey;
      }

      setSelectedRowPath(newSelectedRow);
      if (typeof onRowSelected === 'function') {
        onRowSelected(Event.of(null, e, { row, isSelected: newSelectedRow.length > 0 }));
      }
    },
    [selectedRowPath, setSelectedRowPath, selectedRowKeyProp, prevSelectedRowKeyProp.current]
  );
  return [selectedRowPath, onRowClicked];
};

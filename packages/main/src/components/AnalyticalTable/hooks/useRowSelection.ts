import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useCallback, useRef, useState } from 'react';

const comparePaths = (path1, path2) => {
  return path1.length === path2.length && path1.every((item, i) => item === path2[i]);
};

export const useRowSelection = (onRowSelected, selectedRowKeyProp) => {
  const [selectedRowPath, setSelectedRowPath] = useState([]);
  const prevSelectedRowKeyProp = useRef(selectedRowKeyProp);
  const onRowClicked = useCallback(
    (row) => (e) => {
      if (row.isAggregated) return;
      const newKey = row.path;
      const pathsEqual = comparePaths(row.path, selectedRowPath);

      let newSelectedRow;

      let selectedIndexProp = null;
      if (typeof selectedRowKeyProp === 'string') {
        const [_, ...path] = selectedRowKeyProp.split('_');
        selectedIndexProp = path;
      }

      if (prevSelectedRowKeyProp.current !== selectedRowKeyProp && comparePaths(selectedIndexProp, newKey)) {
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

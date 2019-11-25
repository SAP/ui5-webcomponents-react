import { useState, useCallback } from 'react';

export const useResizeColumns = () => {
  const [resizedColumns, setResizedColumns] = useState({});
  const onColumnSizeChanged = useCallback(
    ({ column, width }) => {
      setResizedColumns({
        ...resizedColumns,
        [column.id]: width
      });
    },
    [setResizedColumns, resizedColumns]
  );

  const [isBeingResized, setBeingResized] = useState(false);
  const onColumnBeingResized = useCallback(
    ({ value }) => {
      setBeingResized(value);
    },
    [setBeingResized]
  );

  return [resizedColumns, onColumnSizeChanged, isBeingResized, onColumnBeingResized];
};

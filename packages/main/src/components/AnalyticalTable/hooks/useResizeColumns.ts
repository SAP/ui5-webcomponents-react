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

  return [resizedColumns, onColumnSizeChanged];
};

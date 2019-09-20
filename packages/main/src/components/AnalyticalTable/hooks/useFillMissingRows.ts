import { useMemo } from 'react';

export const useFillMissingRows = (rows, minRows) => {
  const minimumRows = useMemo(() => {
    const missingRows = minRows - rows.length;

    if (missingRows > 0 && rows.length > 0) {
      const intData = [];
      for (let i = 0; i < missingRows; i++) {
        intData.push({
          key: `minRow-${i}`
        });
      }
      return intData;
    }

    return [];
  }, [rows, minRows]);
  return minimumRows;
};

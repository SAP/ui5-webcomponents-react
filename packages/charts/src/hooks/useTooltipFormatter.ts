import { useCallback } from 'react';

export const useTooltipFormatter = (measures) => {
  return useCallback(
    (value, name) => {
      const { formatter } = measures.find(({ accessor }) => accessor === name);
      if (formatter && typeof formatter === 'function') {
        return formatter(value);
      }
      return value;
    },
    [measures]
  );
};

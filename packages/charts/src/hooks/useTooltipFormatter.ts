import { useCallback } from 'react';

export const useTooltipFormatter = (measures) => {
  return useCallback(
    (value, name, props) => {
      const measure = measures.find(({ accessor }) => accessor === props.dataKey);
      if (measure && measure.formatter && typeof measure.formatter === 'function') {
        return measure.formatter(value);
      }
      return value;
    },
    [measures]
  );
};

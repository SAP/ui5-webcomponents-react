import { useCallback } from 'react';

export const useLabelFormatter = (primaryDimension) => {
  return useCallback(
    (name) => {
      if (primaryDimension && typeof primaryDimension?.formatter === 'function') {
        return primaryDimension.formatter(name);
      }
      return name;
    },
    [primaryDimension]
  );
};

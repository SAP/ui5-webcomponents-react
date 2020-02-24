import { useMemo } from 'react';

export const useResolveDataKeys = (dataKeys, labelKey, dataset): string[] => {
  return useMemo(() => {
    if (dataKeys) {
      // manually provided, let the user decide
      return dataKeys;
    }
    if (dataset && dataset[0]) {
      return Object.keys(dataset[0]).filter((key) => key !== labelKey);
    }
    return [];
  }, [dataKeys, labelKey, dataset]);
};

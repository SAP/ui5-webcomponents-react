import { useMemo } from 'react';

export const useResolveDataKeys = (dataKeys, labelKey, dataset, secondaryDimensionKey): string[] => {
  return useMemo(() => {
    if (dataKeys) {
      // manually provided, let the user decide
      return dataKeys;
    }
    if (dataset && dataset[0]) {
      return Object.keys(dataset[0]).filter((key) => key !== labelKey && key !== secondaryDimensionKey);
    }
    return [];
  }, [dataKeys, labelKey, dataset]);
};

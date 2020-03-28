import { useMemo } from 'react';

export const useResolveDataSet = (dataSet) => {
  return useMemo(() => {
    return dataSet.map((item) => {
      if (item.dimension) {
        const itemCopy = Object.assign({}, item);
        delete itemCopy.dimension;
        return itemCopy;
      } else {
        const itemCopy = Object.assign({}, item);
        return itemCopy;
      }
    });
  }, [dataSet]);
};

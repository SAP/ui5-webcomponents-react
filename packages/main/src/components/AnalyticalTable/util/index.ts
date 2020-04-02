import { defaultOrderByFn } from 'react-table';

export const orderByFn = (rows, functions, directions) => {
  const wrapSortFn = (sortFn, index) => {
    const desc = directions[index] === false || directions[index] === 'desc';

    return (rowA, rowB) => {
      if (rowA.original?.emptyRow && !rowB.original?.emptyRow) {
        return desc ? -1 : 1;
      }
      if (!rowA.original?.emptyRow && rowB.original?.emptyRow) {
        return desc ? 1 : -1;
      }
      if (rowA.original?.emptyRow && rowB.original?.emptyRow) {
        return 0;
      }
      return sortFn(rowA, rowB);
    };
  };

  const wrappedSortfunctions = functions.map(wrapSortFn);

  return defaultOrderByFn(rows, wrappedSortfunctions, directions);
};

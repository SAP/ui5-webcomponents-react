import type { ReactTableHooks, TableInstance } from '../types/index.js';

const popInVisibleColumnsDeps = (deps, { instance: { state } }: { instance: TableInstance }) => [
  ...deps,
  state.tableClientWidth
];

const popInVisibleColumns = (cols, { instance }: { instance: TableInstance }) => {
  const { state, dispatch } = instance;

  const tableClientWidth = state.isScrollable
    ? state?.tableClientWidth + 13 /*scrollbar width*/
    : state?.tableClientWidth;

  const popInColumns = cols
    .filter((item) => item.responsivePopIn && tableClientWidth < item.responsiveMinWidth)
    .map((item) => ({ id: item.id ?? item.accessor, column: item }));

  dispatch({ type: 'SET_POPIN_COLUMNS', payload: popInColumns });

  return cols.filter(
    (col) =>
      !popInColumns.some((item) => item.id === (col.id ?? col.accessor)) &&
      (Object.prototype.hasOwnProperty.call(col, 'responsiveMinWidth')
        ? !tableClientWidth || tableClientWidth >= col.responsiveMinWidth
        : true)
  );
};

export const usePopIn = (hooks: ReactTableHooks) => {
  hooks.visibleColumns.push(popInVisibleColumns);
  hooks.visibleColumnsDeps.push(popInVisibleColumnsDeps);
};

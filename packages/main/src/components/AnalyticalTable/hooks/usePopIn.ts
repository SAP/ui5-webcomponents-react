const popInVisibleColumnsDeps = (deps, { instance: { state } }) => [...deps, state.tableClientWidth];

const popInVisibleColumns = (cols, { instance }) => {
  const { state, dispatch } = instance;

  const tableClientWidth = state.isScrollable
    ? state?.tableClientWidth + 14 /*scrollbar width*/
    : state?.tableClientWidth;

  const popInColumns = cols
    .filter((item) => item.responsivePopIn && tableClientWidth < item.responsiveMinWidth)
    .map((item) => ({ id: item.id ?? item.accessor, column: item }));

  dispatch({ type: 'SET_POPIN_COLUMNS', payload: popInColumns });

  return cols.filter(
    (col) =>
      !popInColumns.some((item) => item.id === (col.id ?? col.accessor)) &&
      (col.hasOwnProperty('responsiveMinWidth')
        ? !tableClientWidth || tableClientWidth >= col.responsiveMinWidth
        : true)
  );
};

export const usePopIn = (hooks) => {
  hooks.visibleColumns.push(popInVisibleColumns);
  hooks.visibleColumnsDeps.push(popInVisibleColumnsDeps);
};

import { useEffect } from 'react';

const popInVisibleColumnsDeps = (deps, { instance: { state, webComponentsReactProperties } }) => {
  return [...deps, state.tableClientWidth];
};

const popInVisibleColumns = (cols, { instance }) => {
  const { state, dispatch } = instance;

  const popInColumns = cols
    .filter((item) => item.responsivePopIn && state?.tableClientWidth < item.responsiveMinWidth)
    .map((item) => ({ id: item.id ?? item.accessor, column: item }));

  dispatch({ type: 'SET_POPIN_COLUMNS', payload: popInColumns });

  return cols.filter(
    (col) =>
      !popInColumns.some((item) => item.id === (col.id ?? col.accessor)) &&
      (col.hasOwnProperty('responsiveMinWidth') ? state?.tableClientWidth >= col.responsiveMinWidth : true)
  );

};

export const usePopIn = (hooks) => {
  hooks.visibleColumns.push(popInVisibleColumns);
  hooks.visibleColumnsDeps.push(popInVisibleColumnsDeps);
};

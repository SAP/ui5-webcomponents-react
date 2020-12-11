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
  // return cols;
  //
  // if (state?.tableClientWidth < 900) {
  //   const popInColumns = cols
  //     .filter((item) => item.responsivePopIn)
  //     .map((item) => ({ id: item.id ?? item.accessor, column: item }));
  //
  //   // instance.setHiddenColumns((prev) => {
  //   //   const hiddenColsSet = new Set([
  //   //     ...prev,
  //   //     ...cols.filter((item) => item.responsivePopIn).map((item) => item.id ?? item.accessor)
  //   //   ]);
  //   //   console.log('set', Array.from(hiddenColsSet));
  //   //   return Array.from(hiddenColsSet);
  //   // });
  //   dispatch({ type: 'SET_POPIN_COLUMNS', payload: popInColumns });
  //   // return cols.map((item) => ({ ...item, isVisible: !item.responsivePopIn }));
  //   return cols.filter((item) => !item.responsivePopIn);
  //   // return cols;
  // } else {
  //   // if (instance.setHiddenColumns) {
  //   //   const hiddenCols = cols.filter((item) => !item.isVisible).map((item) => item.id ?? item.accessor);
  //   //   console.log('remove', hiddenCols);
  //   //   instance.setHiddenColumns(hiddenCols);
  //   // }
  //   dispatch({ type: 'SET_POPIN_COLUMNS', payload: [] });
  // }
  // return cols;
};

export const usePopIn = (hooks) => {
  hooks.visibleColumns.push(popInVisibleColumns);
  hooks.visibleColumnsDeps.push(popInVisibleColumnsDeps);

  // hooks.columns.push(columns);
  // hooks.columnsDeps.push(columnsDeps);
};

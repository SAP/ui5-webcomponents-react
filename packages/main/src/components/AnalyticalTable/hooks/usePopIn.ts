import { AnalyticalTablePopinDisplay } from '../../../enums/AnalyticalTablePopinDisplay.js';
import type { AnalyticalTableState, ReactTableHooks } from '../types/index.js';

const popInVisibleColumnsDeps: ReactTableHooks['visibleColumnsDeps'][0] = (deps, { instance: { state } }) => [
  ...deps,
  state.tableClientWidth,
];

const popInVisibleColumns: ReactTableHooks['visibleColumns'][0] = (cols, { instance }) => {
  const { state, dispatch } = instance;

  const tableClientWidth = state.isScrollable
    ? state?.tableClientWidth + 13 /*scrollbar width*/
    : state?.tableClientWidth;

  const popInColumns: AnalyticalTableState['popInColumns'] = cols
    .filter((item) => {
      return item.responsivePopIn && tableClientWidth < item.responsiveMinWidth;
    })
    .map((item) => ({
      id: item.id ?? item.accessor,
      column: item,
      // initially visibleColumns don't include the defaults
      popinDisplay: item.popinDisplay || AnalyticalTablePopinDisplay.Block,
    }));

  dispatch({ type: 'SET_POPIN_COLUMNS', payload: popInColumns });

  return cols.filter(
    (col) =>
      !popInColumns.some((item) => item.id === (col.id ?? col.accessor)) &&
      (Object.prototype.hasOwnProperty.call(col, 'responsiveMinWidth')
        ? !tableClientWidth || tableClientWidth >= col.responsiveMinWidth
        : true),
  );
};

export const usePopIn = (hooks: ReactTableHooks) => {
  hooks.visibleColumns.push(popInVisibleColumns);
  hooks.visibleColumnsDeps.push(popInVisibleColumnsDeps);
};

usePopIn.pluginName = 'usePopIn';

import type { ReactTableHooks, TableInstance } from '../types/index.js';

const columnsDeps = (deps, { instance }: { instance: TableInstance }) => {
  const { webComponentsReactProperties, state } = instance;
  const { selectionMode, selectionBehavior, withRowHighlight, highlightField, withNavigationHighlight, isTreeTable } =
    webComponentsReactProperties;

  // required as subRows aren't updated when sorting is cleared
  const updateOnSortClear = isTreeTable ? state.sortBy.length === 0 : false;
  return [
    ...deps,
    selectionMode,
    selectionBehavior,
    withRowHighlight,
    highlightField,
    withNavigationHighlight,
    updateOnSortClear,
  ];
};

const visibleColumnsDeps = (deps, { instance }: { instance: TableInstance }) => {
  const { webComponentsReactProperties } = instance;
  const { selectionMode, selectionBehavior, withRowHighlight, withNavigationHighlight } = webComponentsReactProperties;
  return [...deps, selectionMode, selectionBehavior, withRowHighlight, withNavigationHighlight];
};

export const useColumnsDeps = (hooks: ReactTableHooks) => {
  hooks.columnsDeps.push(columnsDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
};

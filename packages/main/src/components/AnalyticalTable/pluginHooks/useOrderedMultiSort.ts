/**
 * A plugin hook for defining the sort priority when sorting by multiple columns, starting with the first column ID.
 *
 * **Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.
 *
 * @param {string[]} orderedIds - Array of column IDs, defining the sorting priority.
 * @param {object} [options] - Additional options.
 * @param {boolean} [options.disabled=false] - If `true`, the hook does nothing. To toggle at runtime, re-create the hook at the same position in the (memoized) `tableHooks` array — never add or remove array entries.
 */
import type { AnalyticalTablePluginHookOptions, ReactTableHooks } from '../types/index.js';

export const useOrderedMultiSort = (orderedIds: string[], options?: AnalyticalTablePluginHookOptions) => {
  const { disabled = false } = options ?? {};
  const useOrderedMultiSortPlugin = (hooks: ReactTableHooks) => {
    if (disabled) {
      return;
    }
    hooks.stateReducers.push((newState, action) => {
      if (action.type === 'toggleSortBy') {
        if (newState.sortBy.length <= 1) {
          return newState;
        } else {
          const clonedSortBy = [...newState.sortBy];
          const updatedSortBy = orderedIds.flatMap((sortedId) => {
            const sortedItemIndex = clonedSortBy.findIndex((item) => item.id === sortedId);
            if (sortedItemIndex !== -1) {
              const sortedEntry = clonedSortBy[sortedItemIndex];
              clonedSortBy.splice(sortedItemIndex, 1);
              return [sortedEntry];
            }
            return [];
          });
          return { ...newState, sortBy: [...updatedSortBy, ...clonedSortBy] };
        }
      }
      return newState;
    });
  };

  useOrderedMultiSortPlugin.pluginName = 'useOrderedMultiSort';

  return useOrderedMultiSortPlugin;
};

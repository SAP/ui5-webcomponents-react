import { useCallback } from 'react';
import type {
  AnalyticalTablePluginHookOptions,
  CellType,
  PluginHook,
  ReactTableHooks,
  TableInstance,
} from '../types/index.js';

// Distinguishes legacy direct usage (`[useAnnounceEmptyCells]`, react-table passes the hooks registry)
// from factory usage (`[useAnnounceEmptyCells({ disabled })]`). The registry always exposes array props.
const isHooksRegistry = (arg: unknown): arg is ReactTableHooks =>
  !!arg && Array.isArray((arg as ReactTableHooks).getCellProps);

const useAnnounceEmptyCellsPlugin = (hooks: ReactTableHooks, disabled: boolean) => {
  const setCellProps = useCallback(
    (
      cellProps,
      {
        cell: { value },
        instance: {
          webComponentsReactProperties: {
            a11yElementIds: { cellEmptyDescId },
          },
        },
      }: { cell: CellType; instance: TableInstance },
    ) => {
      if (typeof value !== 'number' && !value) {
        return [cellProps, { 'aria-labelledby': `${cellProps['aria-labelledby']} ${cellEmptyDescId}` }];
      }
      return cellProps;
    },
    [],
  );

  if (disabled) {
    return;
  }
  hooks.getCellProps.push(setCellProps);
};

export interface UseAnnounceEmptyCellsHook {
  /** Legacy direct usage: `tableHooks={[useAnnounceEmptyCells]}`. */
  (hooks: ReactTableHooks): void;
  /** Factory usage: `tableHooks={[useAnnounceEmptyCells({ disabled })]}`. */
  (options?: AnalyticalTablePluginHookOptions): PluginHook;
  pluginName: string;
}

/**
 * The `useAnnounceEmptyCells` plugin hook adds screen reader announcements for empty cells.
 *
 * **Note:** Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells.
 *
 * Can be used either directly (`tableHooks={[useAnnounceEmptyCells]}`) or as a factory to pass options
 * (`tableHooks={[useAnnounceEmptyCells({ disabled })]}`).
 *
 * @param {object} [options] - Additional options.
 * @param {boolean} [options.disabled=false] - If `true`, the hook does nothing. To toggle at runtime, re-create the hook at the same position in the (memoized) `tableHooks` array — never add or remove array entries.
 */
export const useAnnounceEmptyCells = ((hooksOrOptions?: ReactTableHooks | AnalyticalTablePluginHookOptions) => {
  if (isHooksRegistry(hooksOrOptions)) {
    useAnnounceEmptyCellsPlugin(hooksOrOptions, false);
    return;
  }
  const { disabled = false } = hooksOrOptions ?? {};
  // The returned `plugin` is pushed into `tableHooks` and invoked by react-table as a hook; threading
  // `disabled` through this arrow is not a conditional hook call.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const plugin = (hooks: ReactTableHooks) => useAnnounceEmptyCellsPlugin(hooks, disabled);
  plugin.pluginName = 'useAnnounceEmptyCells';
  return plugin;
}) as UseAnnounceEmptyCellsHook;
useAnnounceEmptyCells.pluginName = 'useAnnounceEmptyCells';

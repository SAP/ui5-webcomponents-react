'use client';

import { useEffect } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import type { AnalyticalTablePluginHookOptions, ReactTableHooks, TableInstance } from '../types/index.js';

//todo: reuse `manualRowSelectedKey` react-table option (currently noop, add type again) and remove manualRowSelectedKey param here in v3.

/**
 * A plugin hook for manual row selection.
 *
 * @param {string} [manualRowSelectedKey='isSelected'] - If this key is found on the original data row, and it is true, this row will be manually selected.
 * @param {object} [options] - Additional options.
 * @param {boolean} [options.disabled=false] - If `true`, the hook does nothing. To toggle at runtime, re-create the hook at the same position in the (memoized) `tableHooks` array — never add or remove array entries.
 *
 * __Note:__ Per default, this hook sets `reactTableOptions.autoResetSelectedRows = false` if not defined.
 */
export const useManualRowSelect = (manualRowSelectedKey = 'isSelected', options?: AnalyticalTablePluginHookOptions) => {
  const { disabled = false } = options ?? {};
  const useInstanceAfterData = (instance: TableInstance) => {
    const { flatRows, toggleRowSelected, webComponentsReactProperties } = instance;
    const { selectionMode } = webComponentsReactProperties;

    if (!disabled && !('autoResetSelectedRows' in instance)) {
      // `instance` is mutable
      // eslint-disable-next-line react-hooks/immutability
      instance.autoResetSelectedRows = false;
    }

    useEffect(() => {
      if (disabled || selectionMode === AnalyticalTableSelectionMode.None) {
        return;
      }

      flatRows.forEach(({ id, original, isSelected }) => {
        if (manualRowSelectedKey in original) {
          const shouldBeSelected = !!original[manualRowSelectedKey];
          if (shouldBeSelected !== isSelected) {
            toggleRowSelected(id, shouldBeSelected);
          }
        }
      });
      // `disabled` flows in via re-creating the hook at the same `tableHooks` index, so the effect must
      // re-run when it toggles; eslint can't see that and treats it as a non-reactive outer value.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flatRows, toggleRowSelected, selectionMode, disabled]);
  };

  const manualRowSelect = (hooks: ReactTableHooks) => {
    hooks.useInstanceAfterData.push(useInstanceAfterData);
  };

  manualRowSelect.pluginName = 'useManualRowSelect';

  return manualRowSelect;
};

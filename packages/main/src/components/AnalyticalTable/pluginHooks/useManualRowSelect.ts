'use client';

import { useEffect } from 'react';
import type { ReactTableHooks, TableInstance } from '../types/index.js';

/**
 * A plugin hook for manual row selection.
 *
 * @param {string} manualRowSelectedKey - If this key is found on the original data row, and it is true, this row will be manually selected. __Defaults to `"isSelected"`__.
 */
export const useManualRowSelect = (manualRowSelectedKey = 'isSelected') => {
  const instanceAfterData = ({
    flatRows,
    toggleRowSelected
  }: {
    flatRows: TableInstance['flatRows'];
    toggleRowSelected: TableInstance['toggleRowSelected'];
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      flatRows.forEach(({ id, original }) => {
        if (manualRowSelectedKey in original) {
          toggleRowSelected(id, original.isSelected);
        }
      });
    }, [flatRows, manualRowSelectedKey]);
  };

  const manualRowSelect = (hooks: ReactTableHooks) => {
    hooks.useInstanceAfterData.push(instanceAfterData);
  };

  manualRowSelect.pluginName = 'useManualRowSelect';

  return manualRowSelect;
};

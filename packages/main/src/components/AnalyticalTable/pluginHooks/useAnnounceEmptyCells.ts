import { ARIA_LABEL_EMPTY_CELL } from '@ui5/webcomponents/dist/generated/i18n/i18n-defaults.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import { useCallback } from 'react';
import type { ReactTableHooks } from '../types/index.js';

/**
 * The `useAnnounceEmptyCells` plugin hook adds screen reader announcements for empty cells.
 *
 * **Note:** Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells.
 */
export const useAnnounceEmptyCells = (hooks: ReactTableHooks) => {
  const i18nBundleWc = useI18nBundle('@ui5/webcomponents');
  const emptyCellLabel = i18nBundleWc.getText(ARIA_LABEL_EMPTY_CELL);

  const setCellProps = useCallback(
    (cellProps, { cell: { value } }) => {
      if (typeof value !== 'number' && !value) {
        return [cellProps, { 'aria-label': `${cellProps['aria-label']} ${emptyCellLabel}` }];
      }
      return cellProps;
    },
    [emptyCellLabel]
  );

  hooks.getCellProps.push(setCellProps);
};
useAnnounceEmptyCells.pluginName = 'useAnnounceEmptyCells';

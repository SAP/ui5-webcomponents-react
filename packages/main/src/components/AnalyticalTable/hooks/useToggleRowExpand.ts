import announce from '@ui5/webcomponents-base/dist/util/InvisibleMessage.js';
import { debounce, enrichEventWithDetails, useI18nBundle } from '@ui5/webcomponents-react-base';
import { useCallback } from 'react';
import { ROW_X_EXPANDED, ROW_X_COLLAPSED } from '../../../i18n/i18n-defaults.js';
import type { ReactTableHooks, RowType, TableInstance } from '../types/index.js';

// announce is called twice in the handler in StrictMode
const debouncedAnnounce = debounce((announcement: string) => {
  announce(announcement, 'Polite');
}, 200);

export const useToggleRowExpand = (hooks: ReactTableHooks) => {
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const getToggleRowExpandedProps = useCallback(
    (
      rowProps,
      { row, instance, userProps }: { row: RowType; instance: TableInstance; userProps: Record<string, any> }
    ) => {
      const { manualGroupBy } = instance;
      const { onRowExpandChange, isTreeTable, renderRowSubComponent, alwaysShowSubComponent } =
        instance.webComponentsReactProperties;

      const onClick = (e, noPropagation = true) => {
        if (noPropagation) {
          e.stopPropagation();
        }

        let column = null;
        if (!isTreeTable && (!renderRowSubComponent || (renderRowSubComponent && alwaysShowSubComponent))) {
          if (!manualGroupBy) {
            column = row.cells.find((cell) => cell.column.id === row.groupByID)?.column;
          } else {
            column = userProps.column;
          }
        }
        if (typeof onRowExpandChange === 'function') {
          onRowExpandChange(
            enrichEventWithDetails(e, {
              row,
              column
            })
          );
        }
        row.toggleRowExpanded();
        //todo: fix row number
        debouncedAnnounce(
          !row.isExpanded
            ? i18nBundle.getText(ROW_X_EXPANDED, row.index + 1)
            : i18nBundle.getText(ROW_X_COLLAPSED, row.index + 1)
        );
      };
      const onKeyDown = (e) => {
        if (e.code === 'F4') {
          e.preventDefault();
          onClick(e, false);
        } else if ((!e.shiftKey && e.code === 'Space') || e.key === 'Enter') {
          // the `onClick` event of the `Icon` component already fires the event on ENTER/SPACE press
          if (e.target.hasAttribute('ui5-icon') || e.target.hasAttribute('ui5-button')) {
            return;
          }
          e.preventDefault();
          onClick(e, false);
        }
      };
      const { title: _0, ...toggleRowPropsWithoutTitle } = rowProps;
      return [
        toggleRowPropsWithoutTitle,
        {
          onClick,
          onKeyDown
        }
      ];
    },
    []
  );

  hooks.getToggleRowExpandedProps.push(getToggleRowExpandedProps);
};
useToggleRowExpand.pluginName = 'useToggleRowExpand';

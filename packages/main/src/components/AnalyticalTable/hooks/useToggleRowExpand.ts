import announce from '@ui5/webcomponents-base/dist/util/InvisibleMessage.js';
import { debounce, enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import type { ReactTableHooks, RowType, TableInstance } from '../types/index.js';

// debounce announce to prevent excessive successive announcements
const debouncedAnnounce = debounce((announcement: string) => {
  announce(announcement, 'Polite');
}, 200);

const getToggleRowExpandedProps = (
  rowProps,
  { row, instance, userProps }: { row: RowType; instance: TableInstance; userProps: Record<string, any> },
) => {
  const { manualGroupBy } = instance;
  const { onRowExpandChange, isTreeTable, renderRowSubComponent, alwaysShowSubComponent, translatableTexts } =
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
          column,
        }),
      );
    }
    row.toggleRowExpanded();
    // cannot use ROW_X_COLLAPSED/ROW_X_EXPANDED here,
    // as retrieving the index of the row is not easily possible here and has performance implications
    debouncedAnnounce(
      !row.isExpanded ? translatableTexts.rowExpandedAnnouncementText : translatableTexts.rowCollapsedAnnouncementText,
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
      onKeyDown,
    },
  ];
};

export const useToggleRowExpand = (hooks: ReactTableHooks) => {
  hooks.getToggleRowExpandedProps.push(getToggleRowExpandedProps);
};
useToggleRowExpand.pluginName = 'useToggleRowExpand';

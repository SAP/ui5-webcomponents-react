import ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import iconDecline from '@ui5/webcomponents-icons/dist/decline.js';
import iconFilter from '@ui5/webcomponents-icons/dist/filter.js';
import iconGroup from '@ui5/webcomponents-icons/dist/group-2.js';
import iconSortAscending from '@ui5/webcomponents-icons/dist/sort-ascending.js';
import iconSortDescending from '@ui5/webcomponents-icons/dist/sort-descending.js';
import { enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FlexBoxAlignItems, TextAlign } from '../../../enums/index.js';
import { CLEAR_SORTING, GROUP, SORT_ASCENDING, SORT_DESCENDING, UNGROUP } from '../../../i18n/i18n-defaults.js';
import { useCanRenderPortal } from '../../../internal/ssr.js';
import { stopPropagation } from '../../../internal/stopPropagation.js';
import { getUi5TagWithSuffix } from '../../../internal/utils.js';
import { Icon } from '../../../webComponents/Icon/index.js';
import { List } from '../../../webComponents/List/index.js';
import { ListItemCustom } from '../../../webComponents/ListItemCustom/index.js';
import { ListItemStandard } from '../../../webComponents/ListItemStandard/index.js';
import type { PopoverDomRef } from '../../../webComponents/Popover/index.js';
import { Popover } from '../../../webComponents/Popover/index.js';
import { FlexBox } from '../../FlexBox/index.js';
import type { AnalyticalTableColumnDefinition } from '../types/index.js';
import { classNames, styleData } from './ColumnHeaderModal.module.css.js';

export interface ColumnHeaderModalProperties {
  column: AnalyticalTableColumnDefinition;
  onSort?: (e: CustomEvent<{ column: unknown; sortDirection: string }>) => void;
  onGroupBy?: (e: CustomEvent<{ column: unknown; isGrouped: boolean }>) => void;
  open: boolean;
  setPopoverOpen: (open: boolean) => void;
  portalContainer: Element;
  isRtl: boolean;
  openerRef: MutableRefObject<HTMLDivElement>;
}

export const ColumnHeaderModal = (props: ColumnHeaderModalProperties) => {
  const { column, onSort, onGroupBy, open, setPopoverOpen, portalContainer, isRtl, openerRef } = props;
  useStylesheet(styleData, ColumnHeaderModal.displayName);
  const showFilter = column.canFilter;
  const showGroup = column.canGroupBy;
  const showSort = column.canSort;

  const ref = useRef<PopoverDomRef>(null);
  const listRef = useRef(null);

  const { Filter } = column;

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const clearSortingText = i18nBundle.getText(CLEAR_SORTING);
  const sortAscendingText = i18nBundle.getText(SORT_ASCENDING);
  const sortDescendingText = i18nBundle.getText(SORT_DESCENDING);
  const groupText = i18nBundle.getText(GROUP);
  const ungroupText = i18nBundle.getText(UNGROUP);

  const handleSort = (e) => {
    const sortType = e.detail.item.getAttribute('data-sort');

    switch (sortType) {
      case 'asc':
        column.toggleSortBy(false, !!column.enableMultiSort);
        if (typeof onSort === 'function') {
          onSort(
            enrichEventWithDetails(e, {
              column,
              sortDirection: sortType
            })
          );
        }
        break;
      case 'desc':
        column.toggleSortBy(true, !!column.enableMultiSort);
        if (typeof onSort === 'function') {
          onSort(
            enrichEventWithDetails(e, {
              column,
              sortDirection: sortType
            })
          );
        }
        break;
      case 'clear':
        column.clearSortBy();
        if (typeof onSort === 'function') {
          onSort(
            enrichEventWithDetails(e, {
              column,
              sortDirection: sortType
            })
          );
        }
        break;
      case 'group':
        const willGroup = !column.isGrouped;
        column.toggleGroupBy(willGroup);
        if (typeof onGroupBy === 'function') {
          onGroupBy(
            enrichEventWithDetails(e, {
              column,
              isGrouped: willGroup
            })
          );
        }
        break;
    }
    setPopoverOpen(false);
  };

  const isSortedAscending = column.isSorted && column.isSortedDesc === false;
  const isSortedDescending = column.isSorted && column.isSortedDesc === true;

  const onAfterClose = (e) => {
    stopPropagation(e);
    setPopoverOpen(false);
  };

  const onAfterOpen = () => {
    listRef.current?.children?.[0]?.focus();
  };

  const horizontalAlign = (() => {
    switch (column.hAlign) {
      case TextAlign.Begin:
        return isRtl ? PopoverHorizontalAlign.End : PopoverHorizontalAlign.Start;
      case TextAlign.End:
        return isRtl ? PopoverHorizontalAlign.Start : PopoverHorizontalAlign.End;
      case TextAlign.Left:
        return PopoverHorizontalAlign.Start;
      case TextAlign.Right:
        return PopoverHorizontalAlign.End;
      case TextAlign.Center:
        return PopoverHorizontalAlign.Center;
      default:
        return isRtl ? PopoverHorizontalAlign.End : PopoverHorizontalAlign.Start;
    }
  })();

  const handleCustomLiKeyDown = (e) => {
    if (e.key === 'Enter') {
      setPopoverOpen(false);
    }
  };

  const handleListKeyDown = (e) => {
    if (e.key !== 'Escape') {
      stopPropagation(e);
    }
  };

  const canRenderPortal = useCanRenderPortal();

  useEffect(() => {
    if (open && ref.current && openerRef.current) {
      void customElements.whenDefined(getUi5TagWithSuffix('ui5-popover')).then(() => {
        ref.current.opener = openerRef.current;
      });
    }
  }, [open, canRenderPortal]);

  if (!canRenderPortal) {
    return null;
  }

  return createPortal(
    <Popover
      open={open}
      hideArrow
      horizontalAlign={horizontalAlign}
      placement={PopoverPlacement.Bottom}
      ref={ref}
      className={classNames.popover}
      onClick={stopPropagation}
      onClose={onAfterClose}
      onOpen={onAfterOpen}
      data-component-name="ATHeaderPopover"
    >
      <List
        onItemClick={handleSort}
        ref={listRef}
        onKeyDown={handleListKeyDown}
        data-component-name="ATHeaderPopoverList"
      >
        {isSortedAscending && (
          <ListItemStandard type={ListItemType.Active} icon={iconDecline} data-sort="clear">
            {clearSortingText}
          </ListItemStandard>
        )}
        {showSort && !isSortedAscending && (
          <ListItemStandard type={ListItemType.Active} icon={iconSortAscending} data-sort="asc">
            {sortAscendingText}
          </ListItemStandard>
        )}
        {showSort && !isSortedDescending && (
          <ListItemStandard type={ListItemType.Active} icon={iconSortDescending} data-sort="desc">
            {sortDescendingText}
          </ListItemStandard>
        )}
        {isSortedDescending && (
          <ListItemStandard type={ListItemType.Active} icon={iconDecline} data-sort="clear">
            {clearSortingText}
          </ListItemStandard>
        )}
        {showFilter && (
          //todo maybe need to enhance Input selection after ui5-webcomponents issue has been fixed (undefined is displayed as val)
          <ListItemCustom type={ListItemType.Inactive} onKeyDown={handleCustomLiKeyDown}>
            <FlexBox alignItems={FlexBoxAlignItems.Center}>
              <Icon name={iconFilter} className={classNames.filterIcon} aria-hidden />
              <Filter column={column} popoverRef={ref} />
            </FlexBox>
          </ListItemCustom>
        )}
        {showGroup && (
          <ListItemStandard type={ListItemType.Active} icon={iconGroup} data-sort={'group'}>
            {column.isGrouped ? ungroupText : groupText}
          </ListItemStandard>
        )}
      </List>
    </Popover>,
    portalContainer ?? document.body
  );
};
ColumnHeaderModal.displayName = 'ColumnHeaderModal';

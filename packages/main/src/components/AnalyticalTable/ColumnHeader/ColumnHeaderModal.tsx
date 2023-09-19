import iconDecline from '@ui5/webcomponents-icons/dist/decline.js';
import iconFilter from '@ui5/webcomponents-icons/dist/filter.js';
import iconGroup from '@ui5/webcomponents-icons/dist/group-2.js';
import iconSortAscending from '@ui5/webcomponents-icons/dist/sort-ascending.js';
import iconSortDescending from '@ui5/webcomponents-icons/dist/sort-descending.js';
import { enrichEventWithDetails, ThemingParameters, useI18nBundle } from '@ui5/webcomponents-react-base';
import type { MutableRefObject } from 'react';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import {
  FlexBoxAlignItems,
  ListItemType,
  PopoverHorizontalAlign,
  PopoverPlacementType,
  TextAlign
} from '../../../enums/index.js';
import { CLEAR_SORTING, GROUP, SORT_ASCENDING, SORT_DESCENDING, UNGROUP } from '../../../i18n/i18n-defaults.js';
import { useCanRenderPortal } from '../../../internal/ssr.js';
import { stopPropagation } from '../../../internal/stopPropagation.js';
import { getUi5TagWithSuffix } from '../../../internal/utils.js';
import { CustomListItem } from '../../../webComponents/CustomListItem/index.js';
import { Icon } from '../../../webComponents/Icon/index.js';
import { List } from '../../../webComponents/List/index.js';
import type { PopoverDomRef } from '../../../webComponents/Popover/index.js';
import { Popover } from '../../../webComponents/Popover/index.js';
import { StandardListItem } from '../../../webComponents/StandardListItem/index.js';
import { FlexBox } from '../../FlexBox/index.js';
import type { ColumnType } from '../types/ColumnType.js';

export interface ColumnHeaderModalProperties {
  column: ColumnType;
  onSort?: (e: CustomEvent<{ column: unknown; sortDirection: string }>) => void;
  onGroupBy?: (e: CustomEvent<{ column: unknown; isGrouped: boolean }>) => void;
  open: boolean;
  setPopoverOpen: (open: boolean) => void;
  portalContainer: Element;
  isRtl: boolean;
  openerRef: MutableRefObject<HTMLDivElement>;
}

const styles = {
  popover: {
    fontWeight: 'normal',
    '&::part(content)': {
      padding: 0
    }
  },
  filterIcon: {
    paddingInlineEnd: '0.5rem',
    minWidth: '1rem',
    minHeight: '1rem',
    color: ThemingParameters.sapContent_NonInteractiveIconColor
  }
};
const useStyles = createUseStyles(styles, { name: 'ColumnHeaderModal' });

export const ColumnHeaderModal = (props: ColumnHeaderModalProperties) => {
  const { column, onSort, onGroupBy, open, setPopoverOpen, portalContainer, isRtl, openerRef } = props;
  const classes = useStyles();
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
        return isRtl ? PopoverHorizontalAlign.Right : PopoverHorizontalAlign.Left;
      case TextAlign.End:
        return isRtl ? PopoverHorizontalAlign.Left : PopoverHorizontalAlign.Right;
      case TextAlign.Left:
        return PopoverHorizontalAlign.Left;
      case TextAlign.Right:
        return PopoverHorizontalAlign.Right;
      case TextAlign.Center:
        return PopoverHorizontalAlign.Center;
      default:
        return isRtl ? PopoverHorizontalAlign.Right : PopoverHorizontalAlign.Left;
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
      customElements
        .whenDefined(getUi5TagWithSuffix('ui5-popover'))
        .then(() => {
          ref.current.opener = openerRef.current;
          if (canRenderPortal && open) {
            ref.current.showAt(openerRef.current);
          }
        })
        .catch(() => {
          // silently catch
        });
    }
  }, [open, canRenderPortal]);

  if (!canRenderPortal) {
    return null;
  }

  return createPortal(
    <Popover
      hideArrow
      horizontalAlign={horizontalAlign}
      placementType={PopoverPlacementType.Bottom}
      ref={ref}
      className={classes.popover}
      onClick={stopPropagation}
      onAfterClose={onAfterClose}
      onAfterOpen={onAfterOpen}
    >
      <List onItemClick={handleSort} ref={listRef} onKeyDown={handleListKeyDown}>
        {isSortedAscending && (
          <StandardListItem type={ListItemType.Active} icon={iconDecline} data-sort="clear">
            {clearSortingText}
          </StandardListItem>
        )}
        {showSort && !isSortedAscending && (
          <StandardListItem type={ListItemType.Active} icon={iconSortAscending} data-sort="asc">
            {sortAscendingText}
          </StandardListItem>
        )}
        {showSort && !isSortedDescending && (
          <StandardListItem type={ListItemType.Active} icon={iconSortDescending} data-sort="desc">
            {sortDescendingText}
          </StandardListItem>
        )}
        {isSortedDescending && (
          <StandardListItem type={ListItemType.Active} icon={iconDecline} data-sort="clear">
            {clearSortingText}
          </StandardListItem>
        )}
        {showFilter && (
          //todo maybe need to enhance Input selection after ui5-webcomponents issue has been fixed (undefined is displayed as val)
          <CustomListItem type={ListItemType.Inactive} onKeyDown={handleCustomLiKeyDown}>
            <FlexBox alignItems={FlexBoxAlignItems.Center}>
              <Icon name={iconFilter} className={classes.filterIcon} aria-hidden />
              <Filter column={column} popoverRef={ref} />
            </FlexBox>
          </CustomListItem>
        )}
        {showGroup && (
          <StandardListItem type={ListItemType.Active} icon={iconGroup} data-sort={'group'}>
            {column.isGrouped ? ungroupText : groupText}
          </StandardListItem>
        )}
      </List>
    </Popover>,
    portalContainer ?? document.body
  );
};
ColumnHeaderModal.displayName = 'ColumnHeaderModal';

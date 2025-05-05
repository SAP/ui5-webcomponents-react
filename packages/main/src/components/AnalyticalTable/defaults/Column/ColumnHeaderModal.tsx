import IconMode from '@ui5/webcomponents/dist/types/IconMode.js';
import ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import { getScopedVarName } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import iconDecline from '@ui5/webcomponents-icons/dist/decline.js';
import iconFilter from '@ui5/webcomponents-icons/dist/filter.js';
import iconGroup from '@ui5/webcomponents-icons/dist/group-2.js';
import iconSortAscending from '@ui5/webcomponents-icons/dist/sort-ascending.js';
import iconSortDescending from '@ui5/webcomponents-icons/dist/sort-descending.js';
import { enrichEventWithDetails, useI18nBundle } from '@ui5/webcomponents-react-base';
import { useEffect, useId, useMemo, useRef } from 'react';
import { FlexBoxAlignItems } from '../../../../enums/FlexBoxAlignItems.js';
import { TextAlign } from '../../../../enums/TextAlign.js';
import {
  CLEAR_SORTING,
  FILTER,
  GROUP,
  SORT_ASCENDING,
  SORT_DESCENDING,
  UNGROUP
} from '../../../../i18n/i18n-defaults.js';
import { stopPropagation } from '../../../../internal/stopPropagation.js';
import { getUi5TagWithSuffix } from '../../../../internal/utils.js';
import { Icon } from '../../../../webComponents/Icon/index.js';
import { List } from '../../../../webComponents/List/index.js';
import { ListItemCustom } from '../../../../webComponents/ListItemCustom/index.js';
import { ListItemStandard } from '../../../../webComponents/ListItemStandard/index.js';
import type { PopoverDomRef } from '../../../../webComponents/Popover/index.js';
import { Popover } from '../../../../webComponents/Popover/index.js';
import { Text } from '../../../../webComponents/Text/index.js';
import { FlexBox } from '../../../FlexBox/index.js';
import type { TableInstanceWithPopoverProps } from '../../types/index.js';
import { RenderColumnTypes } from '../../types/index.js';

export const ColumnHeaderModal = (instance: TableInstanceWithPopoverProps) => {
  const { setOpen, openerRef } = instance.popoverProps;
  const { column, state, webComponentsReactProperties } = instance;
  const { isRtl, groupBy } = state;
  const { onGroup, onSort, classes: classNames } = webComponentsReactProperties;
  const uniqueId = useId();

  const showFilter = column.canFilter;
  const showGroup = column.canGroupBy;
  const showSort = column.canSort;

  const ref = useRef<PopoverDomRef>(null);
  const listRef = useRef(null);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const clearSortingText = i18nBundle.getText(CLEAR_SORTING);
  const sortAscendingText = i18nBundle.getText(SORT_ASCENDING);
  const sortDescendingText = i18nBundle.getText(SORT_DESCENDING);
  const groupText = i18nBundle.getText(GROUP);
  const ungroupText = i18nBundle.getText(UNGROUP);
  const filterText = i18nBundle.getText(FILTER);

  const filterStyles = useMemo(() => {
    if (showFilter) {
      return {
        iconDimensions: `var(${getScopedVarName('--_ui5_list_item_icon_size')})`,
        fontSize: `var(${getScopedVarName('--_ui5_list_item_title_size')})`
      };
    }
  }, [showFilter]);

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
      case 'group': {
        const willGroup = !column.isGrouped;
        column.toggleGroupBy(willGroup);
        let groupedColumns;
        if (willGroup) {
          groupedColumns = [...groupBy, column.id];
        } else {
          groupedColumns = groupBy.filter((group) => group !== column.id);
        }
        if (typeof onGroup === 'function') {
          onGroup(
            enrichEventWithDetails(e, {
              column,
              groupedColumns,
              isGrouped: willGroup
            })
          );
        }
        break;
      }
    }
    setOpen(false);
  };

  const isSortedAscending = column.isSorted && column.isSortedDesc === false;
  const isSortedDescending = column.isSorted && column.isSortedDesc === true;

  const onAfterClose = (e) => {
    stopPropagation(e);
    setOpen(false);
  };

  const onAfterOpen = () => {
    listRef.current?.children?.[0]?.focus();
  };

  const horizontalAlign = (() => {
    switch (column.hAlign) {
      case TextAlign.Begin:
        return PopoverHorizontalAlign.Start;
      case TextAlign.End:
        return PopoverHorizontalAlign.End;
      case TextAlign.Left:
        return isRtl ? PopoverHorizontalAlign.End : PopoverHorizontalAlign.Start;
      case TextAlign.Right:
        return isRtl ? PopoverHorizontalAlign.Start : PopoverHorizontalAlign.End;
      case TextAlign.Center:
        return PopoverHorizontalAlign.Center;
      default:
        return PopoverHorizontalAlign.Start;
    }
  })();

  const handleCustomLiKeyDown = (e) => {
    if (e.key === 'Enter') {
      setOpen(false);
    }
  };

  const handleListKeyDown = (e) => {
    if (e.key !== 'Escape') {
      stopPropagation(e);
    }
  };

  useEffect(() => {
    if (open && ref.current && openerRef.current) {
      void customElements.whenDefined(getUi5TagWithSuffix('ui5-popover')).then(() => {
        ref.current.opener = openerRef.current;
        ref.current.open = true;
      });
    }
  }, [open]);

  return (
    <Popover
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
          <ListItemCustom type={ListItemType.Inactive} onKeyDown={handleCustomLiKeyDown} accessibleName={filterText}>
            <FlexBox alignItems={FlexBoxAlignItems.Center}>
              <Icon
                name={iconFilter}
                className={classNames.filterIcon}
                mode={IconMode.Decorative}
                style={{
                  minWidth: filterStyles.iconDimensions,
                  minHeight: filterStyles.iconDimensions
                }}
              />
              <Text
                maxLines={1}
                className={classNames.filterText}
                style={{
                  fontSize: filterStyles.fontSize
                }}
                id={`${uniqueId}-filter-text`}
              >
                {filterText}
              </Text>
              {column.render(RenderColumnTypes.Filter, {
                accessibleNameRef: `${uniqueId}-filter-text`,
                popoverRef: ref
              })}
            </FlexBox>
          </ListItemCustom>
        )}
        {showGroup && (
          <ListItemStandard type={ListItemType.Active} icon={iconGroup} data-sort={'group'}>
            {column.isGrouped ? ungroupText : groupText}
          </ListItemStandard>
        )}
      </List>
    </Popover>
  );
};
ColumnHeaderModal.displayName = 'ColumnHeaderModal';

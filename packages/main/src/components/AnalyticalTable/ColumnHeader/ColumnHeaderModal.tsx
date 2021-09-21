import '@ui5/webcomponents-icons/dist/decline.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import {
  CLEAR_SORTING,
  GROUP,
  SORT_ASCENDING,
  SORT_DESCENDING,
  UNGROUP
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { CustomListItem } from '@ui5/webcomponents-react/dist/CustomListItem';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/dist/FlexBoxAlignItems';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { List } from '@ui5/webcomponents-react/dist/List';
import { ListItemType } from '@ui5/webcomponents-react/dist/ListItemType';
import { PopoverPlacementType } from '@ui5/webcomponents-react/dist/PopoverPlacementType';
import { Popover } from '@ui5/webcomponents-react/dist/Popover';
import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/dist/PopoverHorizontalAlign';
import { StandardListItem } from '@ui5/webcomponents-react/dist/StandardListItem';
import { Ui5PopoverDomRef } from '@ui5/webcomponents-react/interfaces/Ui5PopoverDomRef';
import React, { RefObject, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { stopPropagation } from '../../../internal/stopPropagation';
import { ColumnType } from '../types/ColumnType';

export interface ColumnHeaderModalProperties {
  column: ColumnType;
  onSort?: (e: CustomEvent<{ column: unknown; sortDirection: string }>) => void;
  onGroupBy?: (e: CustomEvent<{ column: unknown; isGrouped: boolean }>) => void;
  open: boolean;
  setPopoverOpen: (open: boolean) => void;
  targetRef: RefObject<any>;
}

const styles = {
  popover: {
    fontWeight: 'normal'
  },
  filter: {
    padding: '0px 1rem',
    height: 'var(--_ui5_custom_list_item_height)',
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`
  },
  filterIcon: { paddingRight: '0.5rem', minWidth: '1rem', minHeight: '1rem' }
};
const useStyles = createUseStyles(styles, { name: 'ColumnHeaderModal' });

export const ColumnHeaderModal = (props: ColumnHeaderModalProperties) => {
  const { column, onSort, onGroupBy, open, setPopoverOpen, targetRef } = props;
  const classes = useStyles();
  const showFilter = column.canFilter;
  const showGroup = column.canGroupBy;
  const showSort = column.canSort;

  const ref = useRef<Ui5PopoverDomRef>(null);
  const listRef = useRef(null);

  const { Filter } = column;

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const clearSortingText = i18nBundle.getText(CLEAR_SORTING);
  const sortAscendingText = i18nBundle.getText(SORT_ASCENDING);
  const sortDescendingText = i18nBundle.getText(SORT_DESCENDING);
  const groupText = i18nBundle.getText(GROUP);
  const ungroupText = i18nBundle.getText(UNGROUP);

  const handleSort = useCallback(
    (e) => {
      const sortType = e.detail.item.getAttribute('data-sort');

      switch (sortType) {
        case 'asc':
          column.toggleSortBy(false);
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
          column.toggleSortBy(true);
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
      if (ref.current) {
        ref.current.close();
      }
    },
    [column, ref, onGroupBy, onSort]
  );

  const isSortedAscending = column.isSorted && column.isSortedDesc === false;
  const isSortedDescending = column.isSorted && column.isSortedDesc === true;

  useEffect(() => {
    const popoverInstance = ref.current;
    if (open) {
      popoverInstance?.showAt(targetRef.current);
    }
  }, [open, targetRef.current, ref.current]);

  const onAfterClose = useCallback(
    (e) => {
      stopPropagation(e);
      ref?.current?.close();
      setPopoverOpen(false);
    },
    [setPopoverOpen]
  );

  const onAfterOpen = () => {
    listRef.current?.children?.[0]?.focus();
  };

  if (!open) return null;
  return createPortal(
    <Popover
      hideArrow
      horizontalAlign={PopoverHorizontalAlign.Left}
      placementType={PopoverPlacementType.Bottom}
      ref={ref}
      className={classes.popover}
      onAfterClose={onAfterClose}
      onAfterOpen={onAfterOpen}
    >
      <List onItemClick={handleSort} ref={listRef}>
        {isSortedAscending && (
          <StandardListItem type={ListItemType.Active} icon="decline" data-sort="clear">
            {clearSortingText}
          </StandardListItem>
        )}
        {showSort && !isSortedAscending && (
          <StandardListItem type={ListItemType.Active} icon="sort-ascending" data-sort="asc">
            {sortAscendingText}
          </StandardListItem>
        )}
        {showSort && !isSortedDescending && (
          <StandardListItem type={ListItemType.Active} icon="sort-descending" data-sort="desc">
            {sortDescendingText}
          </StandardListItem>
        )}
        {isSortedDescending && (
          <StandardListItem type={ListItemType.Active} icon="decline" data-sort="clear">
            {clearSortingText}
          </StandardListItem>
        )}
        {showFilter && !column.isGrouped && (
          //todo maybe need to enhance Input selection after ui5-webcomponents issue has been fixed
          <CustomListItem type={ListItemType.Inactive}>
            <FlexBox alignItems={FlexBoxAlignItems.Center} className={classes.filter}>
              <Icon name="filter" className={classes.filterIcon} />
              <Filter column={column} popoverRef={ref} />
            </FlexBox>
          </CustomListItem>
        )}
        {showGroup && (
          <StandardListItem type={ListItemType.Active} icon="group-2" data-sort={'group'}>
            {column.isGrouped ? ungroupText : groupText}
          </StandardListItem>
        )}
      </List>
    </Popover>,
    document.body
  );
};
ColumnHeaderModal.displayName = 'ColumnHeaderModal';

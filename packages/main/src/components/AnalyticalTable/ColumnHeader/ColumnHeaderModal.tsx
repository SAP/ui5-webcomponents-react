import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { List } from '@ui5/webcomponents-react/lib/List';
import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import React, { CSSProperties, FC, ReactNode, RefObject, useCallback, useRef } from 'react';
import { Ui5PopoverDomRef } from '../../../interfaces/Ui5PopoverDomRef';
import { ColumnType } from '../types/ColumnType';

export interface ColumnHeaderModalProperties {
  openBy: ReactNode;
  showSort?: boolean;
  showFilter?: boolean;
  showGroup?: boolean;
  column: ColumnType;
  style: CSSProperties;
  onSort?: (e: Event) => void;
  onGroupBy?: (e: Event) => void;
}

const staticStyle = { fontWeight: 'normal' };

export const ColumnHeaderModal: FC<ColumnHeaderModalProperties> = (props) => {
  const { showGroup, showSort, showFilter, column, style, openBy, onSort, onGroupBy } = props;

  const { Filter } = column;

  const popoverRef: RefObject<Ui5PopoverDomRef> = useRef();

  const handleSort = useCallback(
    (e) => {
      const sortType = e.getParameter('item').getAttribute('data-sort');

      switch (sortType) {
        case 'asc':
          column.toggleSortBy(false);
          if (typeof onSort === 'function') {
            onSort(
              Event.of(null, e, {
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
              Event.of(null, e, {
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
              Event.of(null, e, {
                column,
                isGrouped: willGroup
              })
            );
          }
          break;
      }
      if (popoverRef.current) {
        popoverRef.current.close();
      }
    },
    [column, popoverRef, onGroupBy]
  );

  return (
    <Popover
      openByStyle={style}
      openBy={openBy}
      noArrow
      horizontalAlign={PopoverHorizontalAlign.Left}
      placementType={PlacementType.Bottom}
      ref={popoverRef}
      style={staticStyle as CSSProperties}
    >
      <List onItemClick={handleSort}>
        {showSort && (
          <StandardListItem type={ListItemTypes.Active} icon={'sort-ascending'} data-sort={'asc'}>
            Sort Ascending
          </StandardListItem>
        )}
        {showSort && (
          <StandardListItem type={ListItemTypes.Active} icon={'sort-descending'} data-sort={'desc'}>
            Sort Descending
          </StandardListItem>
        )}
        {showFilter && !column.isGrouped && (
          <CustomListItem type={ListItemTypes.Inactive}>
            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ padding: '0px 1rem' }}>
              <Icon name="filter" style={{ paddingRight: '0.5rem', minWidth: '1rem', minHeight: '1rem' }} />
              <Filter column={column} popoverRef={popoverRef} />
            </FlexBox>
          </CustomListItem>
        )}
        {showGroup && (
          <StandardListItem type={ListItemTypes.Active} icon="group-2" data-sort={'group'}>
            {column.isGrouped ? 'Ungroup' : 'Group'}
          </StandardListItem>
        )}
      </List>
    </Popover>
  );
};

ColumnHeaderModal.defaultProps = {
  showSort: true,
  showFilter: false,
  showGroup: false
};

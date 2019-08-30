import React, { CSSProperties, FC, ReactNode, RefObject, useCallback, useRef } from 'react';
import { Ui5PopoverDomRef } from '../../../interfaces/Ui5PopoverDomRef';
import { CustomListItem } from '../../../lib/CustomListItem';
import { FlexBox } from '../../../lib/FlexBox';
import { FlexBoxAlignItems } from '../../../lib/FlexBoxAlignItems';
import { Icon } from '../../../lib/Icon';
import { List } from '../../../lib/List';
import { ListItemTypes } from '../../../lib/ListItemTypes';
import { PlacementType } from '../../../lib/PlacementType';
import { Popover } from '../../../lib/Popover';
import { PopoverHorizontalAlign } from '../../../lib/PopoverHorizontalAlign';
import { StandardListItem } from '../../../lib/StandardListItem';
import { ColumnType } from '../types/ColumnType';

export interface ColumnHeaderModalProperties {
  openBy: ReactNode;
  showSort?: boolean;
  showFilter?: boolean;
  showGroup?: boolean;
  column: ColumnType;
  style: CSSProperties;
}

export const ColumnHeaderModal: FC<ColumnHeaderModalProperties> = (props) => {
  const { showGroup, showSort, showFilter, column, style, openBy } = props;

  const { Filter } = column;

  const popoverRef: RefObject<Ui5PopoverDomRef> = useRef();

  const handleSort = useCallback(
    (e) => {
      const sortType = e.getParameter('item').getAttribute('data-sort');

      switch (sortType) {
        case 'asc':
          column.toggleSortBy(false);
          break;
        case 'desc':
          column.toggleSortBy(true);
          break;
        case 'group':
          column.toggleGroupBy(!column.isGrouped);
          break;
      }
      if (popoverRef.current) {
        popoverRef.current.close();
      }
    },
    [column, popoverRef]
  );

  return (
    <Popover
      openByStyle={style}
      openBy={openBy}
      noArrow
      horizontalAlign={PopoverHorizontalAlign.Left}
      placementType={PlacementType.Bottom}
      ref={popoverRef}
      style={{ fontWeight: 'normal' }}
    >
      <List onItemClick={handleSort}>
        {showSort && (
          <StandardListItem type={ListItemTypes.Active} icon={'sap-icon://sort-ascending'} data-sort={'asc'}>
            Sort Ascending
          </StandardListItem>
        )}
        {showSort && (
          <StandardListItem type={ListItemTypes.Active} icon={'sap-icon://sort-descending'} data-sort={'desc'}>
            Sort Descending
          </StandardListItem>
        )}
        {showFilter && !column.isGrouped && (
          <CustomListItem type={ListItemTypes.Inactive}>
            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ padding: '0px 1rem' }}>
              <Icon src="sap-icon://filter" style={{ paddingRight: '1rem' }} />
              <Filter column={column} />
            </FlexBox>
          </CustomListItem>
        )}
        {showGroup && (
          <StandardListItem type={ListItemTypes.Active} icon="sap-icon://group-2" data-sort={'group'}>
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

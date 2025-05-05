import type { Column } from '@tanstack/react-table';
import iconDecline from '@ui5/webcomponents-icons/dist/decline.js';
import iconSortAscending from '@ui5/webcomponents-icons/dist/sort-ascending.js';
import iconSortDescending from '@ui5/webcomponents-icons/dist/sort-descending.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import type { Dispatch, SetStateAction } from 'react';
import { forwardRef } from 'react';
import { CLEAR_SORTING, FILTER, GROUP, SORT_ASCENDING, SORT_DESCENDING, UNGROUP } from '../../../i18n/i18n-defaults.js';
import type { ListPropTypes } from '../../../webComponents/List/index.js';
import { List } from '../../../webComponents/List/index.js';
import { ListItemStandard } from '../../../webComponents/ListItemStandard/index.js';
import type { PopoverDomRef } from '../../../webComponents/Popover/index.js';
import { Popover } from '../../../webComponents/Popover/index.js';

interface ColumnPopoverProps {
  isSortable?: boolean;
  openerId: string;
  //todo: type
  column: Column<any>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

//todo: check if forward ref is still required
export const ColumnPopover = forwardRef<PopoverDomRef, ColumnPopoverProps>((props, ref) => {
  const { isSortable, openerId, setOpen, column } = props;
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const clearSortingText = i18nBundle.getText(CLEAR_SORTING);
  const sortAscendingText = i18nBundle.getText(SORT_ASCENDING);
  const sortDescendingText = i18nBundle.getText(SORT_DESCENDING);
  const groupText = i18nBundle.getText(GROUP);
  const ungroupText = i18nBundle.getText(UNGROUP);
  const filterText = i18nBundle.getText(FILTER);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectionChange: ListPropTypes['onSelectionChange'] = (e) => {
    const { type } = e.detail.targetItem.dataset;

    switch (type) {
      case 'asc':
        //todo: multi sort?
        column.toggleSorting(false);
        break;
      case 'desc':
        column.toggleSorting(true);
        break;
      case 'clear':
        column.clearSorting();
        break;
    }
    handleClose();
  };

  const isSorted = column.getIsSorted();

  return (
    <Popover open={true} opener={openerId} onClose={handleClose}>
      <List selectionMode="Single" onSelectionChange={handleSelectionChange}>
        {isSorted === 'asc' && (
          <ListItemStandard icon={iconDecline} data-type="clear">
            {clearSortingText}
          </ListItemStandard>
        )}
        {isSortable && isSorted !== 'asc' && (
          <ListItemStandard icon={iconSortAscending} data-type="asc">
            {sortAscendingText}
          </ListItemStandard>
        )}
        {isSortable && isSorted !== 'desc' && (
          <ListItemStandard icon={iconSortDescending} data-type="desc">
            {sortDescendingText}
          </ListItemStandard>
        )}
        {isSorted === 'desc' && (
          <ListItemStandard icon={iconDecline} data-type="clear">
            {clearSortingText}
          </ListItemStandard>
        )}
      </List>
    </Popover>
  );
});

ColumnPopover.displayName = 'ColumnPopover';

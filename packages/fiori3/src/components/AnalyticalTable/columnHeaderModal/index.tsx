import React, { Component, ReactNode } from 'react';
import { ResponsivePopover } from '../../ResponsivePopover';
import { List } from '../../../webComponents/List';
import { StandardListItem } from '../../../webComponents/StandardListItem';
import { ClassProps } from '../../../interfaces/ClassProps';
import { Input } from '../../../webComponents/Input';
import { ColumnType } from '../columnHeader';
import { Event } from '@fiori-for-react/utils';
import { withStyles } from '@fiori-for-react/styles';
import { ListItemTypes, PlacementType, PopoverHorizontalAlign } from '@fiori-for-react/fiori3';

const styles = () => ({
  modalRoot: {
    border: 'none',
    borderRadius: '0.25rem',
    boxShadow: '0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    '&:focus': {
      outline: 'none'
    }
  }
});

export interface ColumnHeaderModalProperties {
  openBy: ReactNode;
  showSort?: boolean;
  showFilter?: boolean;
  sortAscending: (event: Event) => void;
  sortDescending: (event: Event) => void;
  FilterComponent: any;
  filter: any;
  column: ColumnType;
}

interface ColumnHeaderModalInternalProperties extends ColumnHeaderModalProperties, ClassProps {}

@withStyles(styles)
export class ColumnHeaderModal extends Component<ColumnHeaderModalProperties> {
  static defaultProps = {
    showSort: true,
    showFilter: false,
    filter: null
  };

  private handleSort = (e) => {
    const sortType = e.getParameter('item').getAttribute('data-sort');
    if (sortType === 'asc') {
      this.props.sortAscending(Event.of(this, e.getOriginalEvent()));
    } else {
      this.props.sortDescending(Event.of(this, e.getOriginalEvent()));
    }
  };

  render() {
    const { showSort } = this.props as ColumnHeaderModalInternalProperties;

    return (
      <ResponsivePopover
        openByStyle={{ flex: '100 0 auto', width: '100px' }}
        openBy={this.props.openBy}
        hideHeader
        hideArrow
        horizontalAlign={PopoverHorizontalAlign.Left}
        placementType={PlacementType.Bottom}
      >
        <List onItemPress={this.handleSort}>
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
        </List>
      </ResponsivePopover>
    );
  }
}

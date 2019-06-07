import React, { Component, ReactNode } from 'react';
import { ResponsivePopover } from '../../../lib/ResponsivePopover';
import { List } from '../../../lib/List';
import { StandardListItem } from '../../../lib/StandardListItem';
import { ClassProps } from '../../../interfaces/ClassProps';
import { ColumnType } from '../columnHeader';
import { Event } from '@fiori-for-react/utils';
import { withStyles } from '@fiori-for-react/styles';
import { ListItemTypes } from '../../../lib/ListItemTypes';
import { PlacementType } from '../../../lib/PlacementType';
import { PopoverHorizontalAlign } from '../../../lib/PopoverHorizontalAlign';
import { JSSTheme } from '../../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  modalRoot: {
    border: 'none',
    borderRadius: '0.25rem',
    boxShadow: parameters.sapUiShadowLevel1,
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

import { withStyles } from '@fiori-for-react/styles';
import { Event } from '@fiori-for-react/utils';
import React, { Component, ReactNode } from 'react';
import { ClassProps } from '../../../interfaces/ClassProps';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { List } from '../../../lib/List';
import { ListItemTypes } from '../../../lib/ListItemTypes';
import { PlacementType } from '../../../lib/PlacementType';
import { PopoverHorizontalAlign } from '../../../lib/PopoverHorizontalAlign';
import { Popover } from '../../../lib/Popover';
import { StandardListItem } from '../../../lib/StandardListItem';
import { ColumnType } from '../columnHeader';

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

  private popoverRef = null;

  private handlePopoverRef = (el) => {
    this.popoverRef = el;
  };

  private handleSort = (e) => {
    const sortType = e.getParameter('item').getAttribute('data-sort');
    if (sortType === 'asc') {
      this.props.sortAscending(Event.of(this, e.getOriginalEvent()));
    } else {
      this.props.sortDescending(Event.of(this, e.getOriginalEvent()));
    }
    this.popoverRef.close();
  };

  render() {
    const { showSort } = this.props as ColumnHeaderModalInternalProperties;

    return (
      <Popover
        openByStyle={{ flex: '100 0 auto', width: '100px' }}
        openBy={this.props.openBy}
        hideHeader
        hideArrow
        horizontalAlign={PopoverHorizontalAlign.Left}
        placementType={PlacementType.Bottom}
        innerComponentRef={this.handlePopoverRef}
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
      </Popover>
    );
  }
}

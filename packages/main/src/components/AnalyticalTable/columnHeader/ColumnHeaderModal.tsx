import { Event, withStyles } from '@ui5/webcomponents-react-base';
import React, { Component, FC, ReactNode, RefObject } from 'react';
import { ClassProps } from '../../../interfaces/ClassProps';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { CustomListItem } from '../../../lib/CustomListItem';
import { Input } from '../../../lib/Input';
import { List } from '../../../lib/List';
import { ListItemTypes } from '../../../lib/ListItemTypes';
import { PlacementType } from '../../../lib/PlacementType';
import { Popover } from '../../../lib/Popover';
import { PopoverHorizontalAlign } from '../../../lib/PopoverHorizontalAlign';
import { StandardListItem } from '../../../lib/StandardListItem';
import { Icon } from '../../../lib/Icon';
import { FlexBox } from '../../../lib/FlexBox';
import { FlexBoxAlignItems } from '../../../lib/FlexBoxAlignItems';
import { ColumnType } from '../types/ColumnType';
import { Ui5PopoverDomRef } from '../../../interfaces/Ui5PopoverDomRef';

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
  FilterComponent: FC<{ filter: any; onChange: () => void; column: ColumnType }>;
  filter: any;
  column: ColumnType;
  onFilterChange: (e?: any) => void;
}

interface ColumnHeaderModalInternalProperties extends ColumnHeaderModalProperties, ClassProps {}

@withStyles(styles)
export class ColumnHeaderModal extends Component<ColumnHeaderModalProperties> {
  static defaultProps = {
    showSort: true,
    showFilter: false,
    filter: null,
    FilterComponent: ColumnHeaderModal.DEFAULT_FILTER_COMPONENT,
    onFilterChange: () => {}
  };

  private popoverRef: RefObject<Ui5PopoverDomRef> = React.createRef();

  private handleSort = (e) => {
    const sortType = e.getParameter('item').getAttribute('data-sort');
    if (sortType === 'asc') {
      this.props.sortAscending(Event.of(this, e.getOriginalEvent()));
    } else {
      this.props.sortDescending(Event.of(this, e.getOriginalEvent()));
    }
    this.popoverRef.current.close();
  };

  private static DEFAULT_FILTER_COMPONENT({ filter, onChange }) {
    const handleChange = (e) => {
      onChange(Event.of(this, e.getOriginalEvent(), e.getParameters()));
    };
    return <Input onInput={handleChange}>{(filter && filter.value) || ''}</Input>;
  }

  render() {
    const { showSort, showFilter, FilterComponent, onFilterChange, column, filter } = this
      .props as ColumnHeaderModalInternalProperties;

    return (
      <Popover
        openByStyle={{ flex: '100 0 auto', width: '100px' }}
        openBy={this.props.openBy}
        noArrow
        horizontalAlign={PopoverHorizontalAlign.Left}
        placementType={PlacementType.Bottom}
        ref={this.popoverRef}
      >
        <List onItemClick={this.handleSort}>
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
          {showFilter && (
            <CustomListItem type={ListItemTypes.Inactive}>
              <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ padding: '0px 1rem' }}>
                <Icon src="sap-icon://filter" style={{ paddingRight: '1rem' }} />
                <FilterComponent filter={filter} onChange={onFilterChange} column={column} />
              </FlexBox>
            </CustomListItem>
          )}
        </List>
      </Popover>
    );
  }
}

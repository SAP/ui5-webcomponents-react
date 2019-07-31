import { Event, withStyles } from '@ui5/webcomponents-react-base';
import React, { Component, FC, ReactNode, RefObject, CSSProperties } from 'react';
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
  showGroup?: boolean;
  grouping?: string;
  sortAscending: (event: Event) => void;
  sortDescending: (event: Event) => void;
  FilterComponent: FC<{ filter: any; onChange: () => void; column: ColumnType }>;
  filter: any;
  column: ColumnType;
  onFilterChange: (e?: any) => void;
  onGroupBy: (e?: any) => void;
  style: CSSProperties;
}

interface ColumnHeaderModalInternalProperties extends ColumnHeaderModalProperties, ClassProps {}

const DEFAULT_FILTER_COMPONENT = ({ filter, onChange }) => {
  const handleChange = (e) => {
    onChange(Event.of(null, e.getOriginalEvent(), e.getParameters()));
  };
  return <Input onInput={handleChange}>{(filter && filter.value) || ''}</Input>;
};

@withStyles(styles)
export class ColumnHeaderModal extends Component<ColumnHeaderModalProperties> {
  static defaultProps = {
    showSort: true,
    showFilter: false,
    showGroup: false,
    grouping: '',
    filter: null,
    FilterComponent: DEFAULT_FILTER_COMPONENT,
    onFilterChange: () => {},
    onGroupBy: () => {}
  };

  private popoverRef: RefObject<Ui5PopoverDomRef> = React.createRef();

  private handleSort = (e) => {
    const sortType = e.getParameter('item').getAttribute('data-sort');
    switch (sortType) {
      case 'asc':
        this.props.sortAscending(Event.of(this, e.getOriginalEvent()));
        break;
      case 'desc':
        this.props.sortDescending(Event.of(this, e.getOriginalEvent()));
        break;
      case 'group':
        this.props.onGroupBy();
        break;
      default:
        this.props.sortDescending(Event.of(this, e.getOriginalEvent()));
    }
    this.popoverRef.current && this.popoverRef.current.close();
  };

  render() {
    const { showGroup, grouping, showSort, showFilter, FilterComponent, onFilterChange, column, filter, style } = this
      .props as ColumnHeaderModalInternalProperties;
    return (
      <Popover
        openByStyle={style}
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
          {showFilter && !grouping && (
            <CustomListItem type={ListItemTypes.Inactive}>
              <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ padding: '0px 1rem' }}>
                <Icon src="sap-icon://filter" style={{ paddingRight: '1rem' }} />
                <FilterComponent filter={filter} onChange={onFilterChange} column={column} />
              </FlexBox>
            </CustomListItem>
          )}
          {showGroup && (
            <StandardListItem type={ListItemTypes.Active} icon="sap-icon://group-2" data-sort={'group'}>
              {grouping !== column.id ? 'Group' : 'Ungroup'}
            </StandardListItem>
          )}
        </List>
      </Popover>
    );
  }
}

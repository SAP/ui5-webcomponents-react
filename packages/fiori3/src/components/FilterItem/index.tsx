import { ClassProps } from '@fiori-for-react/core/types/ClassProps';
import React, { PureComponent, ReactNode } from 'react';
import styles from './FilterItem.jss';
import { Label } from '../../webComponents/Label';
import { Input } from '../../webComponents/Input';
import { Select } from '../../webComponents/Select';
import { StandardListItem } from '../../webComponents/StandardListItem';
import { BusyIndicator } from '../BusyIndicator';
import { FilterType } from '../../enums/FilterType';
import { Event, StyleClassHelper } from '@fiori-for-react/utils';
import { withStyles } from '@fiori-for-react/core/utils/withStyles';
import { CommonProps } from '@fiori-for-react/core/interfaces';
import { ListItemTypes } from '../..';

export interface FilterItemPropTypes extends CommonProps {
  placeholder?: string;
  renderText?: (item?: any) => JSX.Element;
  type?: FilterType;
  label?: string;
  filterItems?: any[];
  onChange?: (event: Event) => void;
  loading?: boolean;
  children?: ReactNode;
  valueParamName?: string;
  changeEventName?: string;
}

interface FilterItemInternalProps extends FilterItemPropTypes, ClassProps {}

@withStyles(styles)
export class FilterItem extends PureComponent<FilterItemPropTypes> {
  state = {
    selectedText: ''
  };

  static defaultProps = {
    placeholder: '',
    renderText: (item) => (item && item.text) || '',
    type: FilterType.Default,
    filterItems: [],
    label: '',
    onChange: () => null,
    loading: false
  };

  private onSelect = (e) => {
    const selectedKey = e.getParameter('selectedItem').getAttribute('data-key');
    const { filterItems } = this.props;
    const selectedItem = this._getItemByKey(selectedKey, filterItems) || filterItems[0];
    this.setState({ selectedItem });
    this.props.onChange(Event.of(this, e.getOriginalEvent(), { selectedItem }));
  };

  _getItemByKey(key, items) {
    return items.filter((item) => item.key === key)[0];
  }

  private getFilterComponent = () => {
    const { type, filterItems, placeholder, children, loading } = this.props as FilterItemInternalProps;
    switch (type) {
      case FilterType.Default:
        return <Input placeholder={placeholder} onChange={this.onSelect} style={{ width: '100%' }} />;
      case FilterType.Select:
        if (loading) {
          return <BusyIndicator />;
        }
        return (
          <Select onChange={this.onSelect} style={{ width: '100%' }}>
            {filterItems.map((item) => (
              <StandardListItem type={ListItemTypes.Active} key={item.key} data-key={item.key}>
                {item.text}
              </StandardListItem>
            ))}
          </Select>
        );
      case FilterType.Custom:
        if (loading) {
          return <BusyIndicator />;
        }
        return (
          <div>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child as React.ReactElement<any>, {
                [this.props.changeEventName]: this.onSelect,
                valueParameter: this.props.valueParamName,
                style: { width: '100%' }
              });
            })}
          </div>
        );
    }
  };

  render() {
    const { label, classes, style, tooltip } = this.props as FilterItemInternalProps;
    const filterItemClasses = StyleClassHelper.of(classes.filterItem);

    return (
      <div className={filterItemClasses.toString()} style={style} title={tooltip}>
        <Label>{label}</Label>
        {this.getFilterComponent()}
      </div>
    );
  }
}

import { Event, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { PureComponent, ReactNode } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { BusyIndicator } from '../../lib/BusyIndicator';
import { FilterType } from '../../lib/FilterType';
import { Input } from '../../lib/Input';
import { Label } from '../../lib/Label';
import { ListItemTypes } from '../../lib/ListItemTypes';
import { Select } from '../../lib/Select';
import { StandardListItem } from '../../lib/StandardListItem';
import styles from './FilterItem.jss';
import { BusyIndicatorType } from '../../lib/BusyIndicatorType';

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
          return (
            <BusyIndicator
              active
              size={BusyIndicatorType.Medium}
              style={{ backgroundColor: 'transparent', width: '80px' }}
            />
          );
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
          return (
            <BusyIndicator
              active
              size={BusyIndicatorType.Medium}
              style={{ backgroundColor: 'transparent', width: '80px' }}
            />
          );
        }
        return (
          <div>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child as React.ReactElement<any>, {
                [this.props.changeEventName]: (event) => {
                  this.onSelect(event);
                  // @ts-ignore
                  if (child.props.hasOwnProperty(this.props.changeEventName)) {
                    // @ts-ignore
                    child.props[this.props.changeEventName](event);
                  }
                },
                valueParameter: this.props.valueParamName,
                style: { width: '100%' }
              });
            })}
          </div>
        );
    }
  };

  render() {
    const { label, classes, style, tooltip, innerRef } = this.props as FilterItemInternalProps;
    const filterItemClasses = StyleClassHelper.of(classes.filterItem);

    return (
      <div ref={innerRef} className={filterItemClasses.toString()} style={style} title={tooltip}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start'
          }}
        >
          <Label>{label}</Label>
          {this.getFilterComponent()}
        </div>
      </div>
    );
  }
}

import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { FilterType } from '@ui5/webcomponents-react/lib/FilterType';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import React, { FC, forwardRef, ReactNode, RefObject, useEffect, useMemo } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './FilterItem.jss';

export interface FilterItemPropTypes extends Omit<CommonProps, 'onChange'> {
  placeholder?: string;
  type?: FilterType;
  label?: string;
  filterItems?: any[];
  onChange?: (event: CustomEvent<{ selectedItem?: unknown; selectedItems?: unknown }>) => void;
  loading?: boolean;
  children?: ReactNode;
  valueParamName?: string;
  changeEventName?: string;
}

const useStyles = createComponentStyles(styles, { name: 'FilterItem' });

const FilterItem: FC<FilterItemPropTypes> = forwardRef((props: FilterItemPropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    filterItems,
    onChange,
    type,
    placeholder,
    children,
    loading,
    changeEventName,
    valueParamName,
    label,
    style,
    tooltip
  } = props as FilterItemPropTypes;
  const classes = useStyles();

  useEffect(() => {
    deprecationNotice(
      'FilterItem',
      "'@ui5/webcomponents-react/lib/FilterItem' is deprecated and will be removed in the next major release.\nPlease use '@ui5/webcomponents-react/lib/FilterGroupItem' instead."
    );
  }, []);

  function getItemByKey(key) {
    return filterItems.filter((item) => item.key === key)[0];
  }

  function onSelect(e) {
    const selectedKey = e.detail.selectedOption.getAttribute('data-key');
    const item = getItemByKey(selectedKey) || filterItems[0];
    onChange(enrichEventWithDetails(e, { selectedItem: item }));
  }

  function onMultiCbChange(e) {
    const selectedItems = e.detail.items;
    onChange(
      enrichEventWithDetails(e, {
        selectedItems: selectedItems.map((item) => {
          return getItemByKey(item.getAttribute('data-key'));
        })
      })
    );
  }

  const filterComponent = useMemo(() => {
    if (loading) {
      return (
        <div className={classes.loadingContainer}>
          <BusyIndicator
            active
            size={BusyIndicatorSize.Medium}
            style={{ backgroundColor: 'transparent', width: '80px' }}
          />
        </div>
      );
    }

    switch (type) {
      case FilterType.Default:
        return <Input placeholder={placeholder} onChange={onSelect} style={{ width: '100%' }} />;
      case FilterType.MultiSelect:
        return (
          <MultiComboBox onSelectionChange={onMultiCbChange}>
            {filterItems.map((item) => (
              <StandardListItem data-key={item.key} key={item.key}>
                {item.text}
              </StandardListItem>
            ))}
          </MultiComboBox>
        );
      case FilterType.Select:
        return (
          <Select onChange={onSelect} style={{ width: '100%' }}>
            {filterItems.map((item) => (
              <Option key={item.key} data-key={item.key}>
                {item.text}
              </Option>
            ))}
          </Select>
        );
      case FilterType.Custom:
        return (
          <div>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child as React.ReactElement<any>, {
                // [changeEventName]: (event) => {
                //   onSelect(event);
                //   // @ts-ignore
                //   if (child.props.hasOwnProperty(changeEventName)) {
                //     // @ts-ignore
                //     child.props[changeEventName](event);
                //   }
                // },
                style: { width: '100%' }
              });
            })}
          </div>
        );
    }
  }, [valueParamName, changeEventName, filterItems, loading, type, children]);

  const filterItemClasses = StyleClassHelper.of(classes.filterItem);

  const passThroughProps = usePassThroughHtmlProps(props, ['onChange']);

  return (
    <div ref={ref} className={filterItemClasses.toString()} style={style} title={tooltip} {...passThroughProps}>
      <div className={classes.innerFilterItemContainer}>
        <Label>{label}</Label>
        {filterComponent}
      </div>
    </div>
  );
});

FilterItem.defaultProps = {
  placeholder: '',
  type: FilterType.Default,
  filterItems: [],
  label: '',
  onChange: () => null,
  loading: false
};

FilterItem.displayName = 'FilterItem';

export { FilterItem };

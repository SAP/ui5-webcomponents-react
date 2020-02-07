import { Event } from '@ui5/webcomponents-react-base/lib/Event';
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
import React, { FC, forwardRef, ReactNode, RefObject, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './FilterItem.jss';

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

const useStyles = createUseStyles(styles, { name: 'FilterItem' });

/**
 * <code>import { FilterItem } from '@ui5/webcomponents-react/lib/FilterItem';</code>
 */
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

  function getItemByKey(key) {
    return filterItems.filter((item) => item.key === key)[0];
  }

  function onSelect(e) {
    const selectedKey = e.getParameter('selectedOption').getAttribute('data-key');
    const item = getItemByKey(selectedKey) || filterItems[0];
    onChange(Event.of(null, e.getOriginalEvent(), { selectedItem: item }));
  }

  function onMultiCbChange(e) {
    const selectedItems = e.getParameter('items');
    onChange(
      Event.of(null, e.getOriginalEvent(), {
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
                [changeEventName]: (event) => {
                  onSelect(event);
                  // @ts-ignore
                  if (child.props.hasOwnProperty(changeEventName)) {
                    // @ts-ignore
                    child.props[changeEventName](event);
                  }
                },
                valueParameter: valueParamName,
                style: { width: '100%' }
              });
            })}
          </div>
        );
    }
  }, [valueParamName, changeEventName, filterItems, loading, type, children]);

  const filterItemClasses = StyleClassHelper.of(classes.filterItem);

  const passThroughProps = usePassThroughHtmlProps(props);

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
  renderText: (item) => (item && item.text) || '',
  type: FilterType.Default,
  filterItems: [],
  label: '',
  onChange: () => null,
  loading: false
};

FilterItem.displayName = 'FilterItem';

export { FilterItem };

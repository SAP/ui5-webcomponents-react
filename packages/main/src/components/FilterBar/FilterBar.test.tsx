import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';
import { FilterItem } from '@ui5/webcomponents-react/lib/FilterItem';
import { FilterType } from '@ui5/webcomponents-react/lib/FilterType';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];
const filterItems = [
  { text: 'Text 1', key: '1' },
  { text: 'Text 2', key: '2' }
];

const variants = <VariantManagement variantItems={variantItems} />;
const search = <Input placeholder={'Search'} />;

describe('FilterBar', () => {
  it('Render without crashing', () => {
    const wrapper = mount(
      <FilterBar search={search} variants={variants}>
        <FilterItem
          // onChange={(e) => alert(e.getParameter('selectedItem').key)}
          filterItems={filterItems}
          label="Classification"
          key="classification"
          type={FilterType.Select}
        />
        <FilterItem
          key={'filter2'}
          type={FilterType.Custom}
          label={'Custom Filter 1'}
          changeEventName={'onClick'}
          valueParamName={'state'}
        >
          <Switch />
        </FilterItem>
      </FilterBar>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('Hide Filter Bar', () => {
    const wrapper = mount(
      <FilterBar variants={variants}>
        <FilterItem
          // onChange={(e) => alert(e.getParameter('selectedItem').key)}
          filterItems={filterItems}
          label="Classification"
          key="classification"
          type={FilterType.Select}
        />
        <FilterItem
          key={'filter2'}
          type={FilterType.Custom}
          label={'Custom Filter 1'}
          changeEventName={'onClick'}
          valueParamName={'state'}
        >
          <Switch />
        </FilterItem>
        <FilterItem
          loading
          key={'filter3'}
          type={FilterType.Custom}
          label={'Custom Filter 1'}
          changeEventName={'onClick'}
          valueParamName={'state'}
        >
          <Switch />
        </FilterItem>
      </FilterBar>
    );
    const component = wrapper.find('ui5-button').last().instance() as any;
    component.fireEvent('click');
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('Select Filter Item', () => {
    const wrapper = mount(
      <FilterBar variants={variants}>
        <FilterItem
          // onChange={(e) => alert(e.getParameter('selectedItem').key)}
          filterItems={filterItems}
          label="Classification"
          key="classification"
          type={FilterType.Select}
        />
        <FilterItem
          // onChange={(e) => alert(e.getParameter('selectedItem').key)}
          loading
          filterItems={filterItems}
          label="Classification"
          key="classification2"
          type={FilterType.Select}
        />
        <FilterItem
          // onChange={(e) => alert(e.getParameter('selectedItem').key)}
          // filterItems={filterItems}
          label="Classification"
          key="classification3"
          type={FilterType.Default}
        />
        <FilterItem
          // onChange={(e) => alert(e.getParameter('selectedItem').key)}
          filterItems={filterItems}
          label="Classification"
          key="classification3"
          type={FilterType.MultiSelect}
        />
      </FilterBar>
    );

    wrapper.find('ui5-option').at(1).simulate('change');

    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(FilterBar);
});

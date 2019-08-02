import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { FilterBar } from '../../lib/FilterBar';
import { FilterItem } from '../../lib/FilterItem';
import { FilterType } from '../../lib/FilterType';
import { Input } from '../../lib/Input';
import { Switch } from '../../lib/Switch';
import { VariantManagement } from '../../lib/VariantManagement';

const variantItems = [{ label: 'Variant 1', key: '1' }, { label: 'Variant 2', key: '2' }];
const filterItems = [{ text: 'Text 1', key: '1' }, { text: 'Text 2', key: '2' }];

const renderVariants = () => <VariantManagement variantItems={variantItems} />;
const renderSearch = () => <Input placeholder={'Search'} />;

use(matchSnapshot);

describe('FilterBar', () => {
  it('Render without crashing', () => {
    const wrapper = mountThemedComponent(
      <FilterBar renderSearch={renderSearch} renderVariants={renderVariants}>
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
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Hide Filter Bar', () => {
    const wrapper = mountThemedComponent(
      <FilterBar renderVariants={renderVariants}>
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
    const component = wrapper
      .find('ui5-button')
      .first()
      .instance() as any;
    component.fireEvent('click');
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Select Filter Item', () => {
    const wrapper = mountThemedComponent(
      <FilterBar renderVariants={renderVariants}>
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
    // console.log(wrapper.debug());
    // console.log(wrapper.find('Select').debug());
    wrapper
      .find('ui5-option')
      .at(1)
      .simulate('change');

    expect(wrapper.debug()).to.matchSnapshot();
  });
});

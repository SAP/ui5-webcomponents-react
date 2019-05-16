import { FilterBar } from '../../lib/FilterBar';
import React from 'react';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { VariantManagement } from '../../lib/VariantManagement';
import { FilterItem } from '../../lib/FilterItem';
import { FilterType } from '../../lib/FilterType';
import { Switch } from '../../lib/Switch';

const variantItems = [{ label: 'Variant 1', key: '1' }, { label: 'Variant 2', key: '2' }];
const filterItems = [{ text: 'Text 1', key: '1' }, { text: 'Text 2', key: '2' }];

const renderVariants = () => <VariantManagement variantItems={variantItems} />;

use(matchSnapshot);

describe('FilterBar', () => {
  it('Render without crashing', () => {
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
    (wrapper
      .find('Button')
      .at(2)
      .prop('onPress') as any)({ target: {} });

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
          key="classification"
          type={FilterType.Select}
        />
        <FilterItem
          // onChange={(e) => alert(e.getParameter('selectedItem').key)}
          // filterItems={filterItems}
          label="Classification"
          key="classification"
          type={FilterType.Default}
        />
      </FilterBar>
    );
    // console.log(wrapper.debug());
    // console.log(wrapper.find('Select').debug());
    wrapper
      .find('ui5-li')
      .at(1)
      .simulate('change');

    expect(wrapper.debug()).to.matchSnapshot();
  });
});

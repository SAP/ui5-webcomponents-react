import { ProductSwitchItem } from '@ui5/webcomponents-react/lib/ProductSwitchItem';
import { mount } from 'enzyme';
import React from 'react';

describe('ProductSwitchItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ProductSwitchItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

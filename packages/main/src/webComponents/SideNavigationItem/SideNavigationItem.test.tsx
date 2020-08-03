import { SideNavigationItem } from '@ui5/webcomponents-react/lib/SideNavigationItem';
import { mount } from 'enzyme';
import React from 'react';

describe('SideNavigationItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<SideNavigationItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

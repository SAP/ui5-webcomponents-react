import { SideNavigationSubItem } from '@ui5/webcomponents-react/lib/SideNavigationSubItem';
import { mount } from 'enzyme';
import React from 'react';

describe('SideNavigationSubItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<SideNavigationSubItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

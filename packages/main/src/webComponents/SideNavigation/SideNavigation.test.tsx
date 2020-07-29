import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { mount } from 'enzyme';
import React from 'react';

describe('SideNavigation', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<SideNavigation />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

import { mount } from 'enzyme';
import React from 'react';
import { ResponsivePopover } from '@ui5/webcomponents-react/lib/ResponsivePopover';

describe('ResponsivePopover', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ResponsivePopover />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

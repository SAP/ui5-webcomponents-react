import { mount } from 'enzyme';
import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';
import React from 'react';

describe('ShellBarItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ShellBarItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

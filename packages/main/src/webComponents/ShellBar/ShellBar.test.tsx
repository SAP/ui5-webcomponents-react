import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { mount } from 'enzyme';
import React from 'react';

describe('ShellBar', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ShellBar />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

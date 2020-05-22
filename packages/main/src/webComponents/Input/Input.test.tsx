import { Input } from '@ui5/webcomponents-react/lib/Input';
import { mount } from 'enzyme';
import React from 'react';

describe('Input', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Input />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

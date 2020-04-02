import { Option } from '@ui5/webcomponents-react/lib/Option';
import { mount } from 'enzyme';
import React from 'react';

describe('Option', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Option />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { mount } from 'enzyme';
import React from 'react';

describe('Switch', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Switch />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

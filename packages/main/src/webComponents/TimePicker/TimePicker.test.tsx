import { mount } from 'enzyme';
import React from 'react';
import { TimePicker } from '@ui5/webcomponents-react/lib/TimePicker';

describe('TimePicker', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<TimePicker />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

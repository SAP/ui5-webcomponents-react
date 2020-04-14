import { TimePicker } from '@ui5/webcomponents-react/lib/TimePicker';
import { mount } from 'enzyme';
import React from 'react';

describe('TimePicker', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<TimePicker />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

import { DateTimePicker } from '@ui5/webcomponents-react/lib/DateTimePicker';
import { mount } from 'enzyme';
import React from 'react';

describe('DateTimePicker', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<DateTimePicker />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

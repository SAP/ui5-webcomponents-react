import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import { mount } from 'enzyme';
import React from 'react';

describe('DatePicker', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<DatePicker />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

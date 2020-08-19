import { DateRangePicker } from '@ui5/webcomponents-react/lib/DateRangePicker';
import { mount } from 'enzyme';
import React from 'react';

describe('DateRangePicker', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<DateRangePicker />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

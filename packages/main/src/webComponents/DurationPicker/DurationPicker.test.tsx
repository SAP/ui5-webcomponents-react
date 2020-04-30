import { DurationPicker } from '@ui5/webcomponents-react/lib/DurationPicker';
import { mount } from 'enzyme';
import React from 'react';

describe('DurationPicker', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<DurationPicker />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

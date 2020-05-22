import { Calendar } from '@ui5/webcomponents-react/lib/Calendar';
import { mount } from 'enzyme';
import React from 'react';

describe('Calendar', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Calendar />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

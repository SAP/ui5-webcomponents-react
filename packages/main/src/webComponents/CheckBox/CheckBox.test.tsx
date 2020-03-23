import { mount } from 'enzyme';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import React from 'react';

describe('CheckBox', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<CheckBox />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

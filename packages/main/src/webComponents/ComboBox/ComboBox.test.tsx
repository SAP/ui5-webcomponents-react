import { ComboBox } from '@ui5/webcomponents-react/lib/ComboBox';
import { mount } from 'enzyme';
import React from 'react';

describe('ComboBox', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ComboBox />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

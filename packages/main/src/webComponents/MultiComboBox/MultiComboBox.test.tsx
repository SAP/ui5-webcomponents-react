import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { mount } from 'enzyme';
import React from 'react';

describe('MultiComboBox', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<MultiComboBox />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

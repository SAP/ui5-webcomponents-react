import { mount } from 'enzyme';
import React from 'react';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/lib/MultiComboBoxItem';

describe('MultiComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<MultiComboBoxItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

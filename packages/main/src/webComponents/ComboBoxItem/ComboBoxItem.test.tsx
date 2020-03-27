import { mount } from 'enzyme';
import React from 'react';
import { ComboBoxItem } from '@ui5/webcomponents-react/lib/ComboBoxItem';

describe('ComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ComboBoxItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

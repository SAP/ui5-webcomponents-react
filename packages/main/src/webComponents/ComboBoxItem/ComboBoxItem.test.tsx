import { ComboBoxItem } from '@ui5/webcomponents-react/lib/ComboBoxItem';
import { mount } from 'enzyme';
import React from 'react';

describe('ComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ComboBoxItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

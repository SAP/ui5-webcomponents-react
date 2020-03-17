import { mount } from 'enzyme';
import { ProductSwitch } from '@ui5/webcomponents-react/lib/ProductSwitch';
import React from 'react';

describe('ProductSwitch', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ProductSwitch />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

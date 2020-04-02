import { ProductSwitch } from '@ui5/webcomponents-react/lib/ProductSwitch';
import { mount } from 'enzyme';
import React from 'react';

describe('ProductSwitch', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ProductSwitch />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

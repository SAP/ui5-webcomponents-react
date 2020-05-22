import { Toast } from '@ui5/webcomponents-react/lib/Toast';
import { mount } from 'enzyme';
import React from 'react';

describe('Toast', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Toast />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

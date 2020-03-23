import { mount } from 'enzyme';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import React from 'react';

describe('Dialog', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Dialog />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

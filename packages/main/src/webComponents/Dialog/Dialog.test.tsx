import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { mount } from 'enzyme';
import React from 'react';

describe('Dialog', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Dialog />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

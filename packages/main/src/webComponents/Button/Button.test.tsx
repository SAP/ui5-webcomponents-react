import { Button } from '@ui5/webcomponents-react/lib/Button';
import { mount } from 'enzyme';
import React from 'react';

describe('Button', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

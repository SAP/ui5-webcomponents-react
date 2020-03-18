import { mount } from 'enzyme';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import React from 'react';

describe('Card', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

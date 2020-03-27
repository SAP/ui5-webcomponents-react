import { mount } from 'enzyme';
import React from 'react';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';

describe('Avatar', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Avatar />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

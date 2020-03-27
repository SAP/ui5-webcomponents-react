import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { mount } from 'enzyme';
import React from 'react';

describe('Avatar', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Avatar />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

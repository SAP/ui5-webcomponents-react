import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { mount } from 'enzyme';
import React from 'react';

describe('Icon', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Icon />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

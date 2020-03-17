import { mount } from 'enzyme';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';

describe('Icon', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Icon />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

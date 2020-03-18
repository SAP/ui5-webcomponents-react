import { mount } from 'enzyme';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import React from 'react';

describe('Popover', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Popover />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

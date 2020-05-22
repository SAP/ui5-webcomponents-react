import { TabSeparator } from '@ui5/webcomponents-react/lib/TabSeparator';
import { mount } from 'enzyme';
import React from 'react';

describe('TabSeparator', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<TabSeparator />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

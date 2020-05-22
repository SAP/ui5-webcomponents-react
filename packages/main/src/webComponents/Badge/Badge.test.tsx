import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import { mount } from 'enzyme';
import React from 'react';

describe('Badge', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Badge />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

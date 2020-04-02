import { Token } from '@ui5/webcomponents-react/lib/Token';
import { mount } from 'enzyme';
import React from 'react';

describe('Token', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Token />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

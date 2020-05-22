import { Select } from '@ui5/webcomponents-react/lib/Select';
import { mount } from 'enzyme';
import React from 'react';

describe('Select', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Select />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

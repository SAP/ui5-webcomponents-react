import { Link } from '@ui5/webcomponents-react/lib/Link';
import { mount } from 'enzyme';
import React from 'react';

describe('Link', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Link />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

import { mount } from 'enzyme';
import { List } from '@ui5/webcomponents-react/lib/List';
import React from 'react';

describe('List', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<List />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

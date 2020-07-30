import { Tree } from '@ui5/webcomponents-react/lib/Tree';
import { mount } from 'enzyme';
import React from 'react';

describe('Tree', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Tree />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

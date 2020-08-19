import { TreeItem } from '@ui5/webcomponents-react/lib/TreeItem';
import { mount } from 'enzyme';
import React from 'react';

describe('TreeItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<TreeItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

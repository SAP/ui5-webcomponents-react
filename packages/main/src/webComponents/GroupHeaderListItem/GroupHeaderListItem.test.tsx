import { GroupHeaderListItem } from '@ui5/webcomponents-react/lib/GroupHeaderListItem';
import { mount } from 'enzyme';
import React from 'react';

describe('GroupHeaderListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<GroupHeaderListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

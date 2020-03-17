import { mount } from 'enzyme';
import { GroupHeaderListItem } from '@ui5/webcomponents-react/lib/GroupHeaderListItem';
import React from 'react';

describe('GroupHeaderListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<GroupHeaderListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

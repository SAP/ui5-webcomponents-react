import { mount } from 'enzyme';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import React from 'react';

describe('CustomListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<CustomListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

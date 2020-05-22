import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { mount } from 'enzyme';
import React from 'react';

describe('StandardListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<StandardListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

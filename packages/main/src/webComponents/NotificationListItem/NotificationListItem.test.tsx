import { NotificationListItem } from '@ui5/webcomponents-react/lib/NotificationListItem';
import { mount } from 'enzyme';
import React from 'react';

describe('NotificationListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<NotificationListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

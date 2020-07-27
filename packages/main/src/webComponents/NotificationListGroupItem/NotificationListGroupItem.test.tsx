import { NotificationListGroupItem } from '@ui5/webcomponents-react/lib/NotificationListGroupItem';
import { mount } from 'enzyme';
import React from 'react';

describe('NotificationListGroupItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<NotificationListGroupItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

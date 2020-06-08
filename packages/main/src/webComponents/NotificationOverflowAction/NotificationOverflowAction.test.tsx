import { NotificationOverflowAction } from '@ui5/webcomponents-react/lib/NotificationOverflowAction';
import { mount } from 'enzyme';
import React from 'react';

describe('NotificationOverflowAction', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<NotificationOverflowAction />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

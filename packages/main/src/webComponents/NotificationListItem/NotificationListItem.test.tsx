import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import { NotificationListItem } from './index';
import { NotificationAction } from '../NotificationAction';
import { Priority } from '../../enums/Priority';
import React from 'react';

describe('NotificationListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <NotificationListItem
        titleText="My Notification"
        showClose
        priority={Priority.High}
        actions={<NotificationAction text="My Action" />}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(NotificationListItem);
  createWaitForDefineTest(NotificationListItem);
});

import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Priority } from '../../enums/Priority';
import { NotificationAction } from '../NotificationAction';
import { NotificationListItem } from './index';

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

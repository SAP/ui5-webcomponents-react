import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { NotificationListItem } from '@ui5/webcomponents-react/dist/NotificationListItem';
import { NotificationAction } from '@ui5/webcomponents-react/dist/NotificationAction';
import { Priority } from '@ui5/webcomponents-react/dist/Priority';
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
});

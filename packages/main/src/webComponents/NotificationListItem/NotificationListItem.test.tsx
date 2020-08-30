import { render } from '@shared/tests';
import { NotificationListItem } from '@ui5/webcomponents-react/lib/NotificationListItem';
import { NotificationOverflowAction } from '@ui5/webcomponents-react/lib/NotificationOverflowAction';
import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import React from 'react';

describe('NotificationListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <NotificationListItem
        heading="My Notification"
        showClose
        priority={Priority.High}
        actions={<NotificationOverflowAction text="My Action" />}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

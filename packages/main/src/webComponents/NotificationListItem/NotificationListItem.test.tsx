import { render } from '@shared/tests';
import { NotificationListItem } from '@ui5/webcomponents-react/lib/NotificationListItem';
import { NotificationAction } from '@ui5/webcomponents-react/lib/NotificationAction';
import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import React from 'react';

describe('NotificationListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <NotificationListItem
        heading="My Notification"
        showClose
        priority={Priority.High}
        actions={<NotificationAction text="My Action" />}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

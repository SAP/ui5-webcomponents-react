import { render } from '@shared/tests';
import { NotificationListItem } from '@ui5/webcomponents-react/lib/NotificationListItem';
import React from 'react';

describe('NotificationListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<NotificationListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});

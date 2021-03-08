import { render } from '@shared/tests';
import { NotificationListGroupItem } from '@ui5/webcomponents-react/dist/NotificationListGroupItem';
import React from 'react';

describe('NotificationListGroupItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<NotificationListGroupItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});

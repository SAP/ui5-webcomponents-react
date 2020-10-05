import { render } from '@shared/tests';
import { NotificationOverflowAction } from '@ui5/webcomponents-react/lib/NotificationOverflowAction';
import React from 'react';

describe('NotificationOverflowAction', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<NotificationOverflowAction />);
    expect(asFragment()).toMatchSnapshot();
  });
});

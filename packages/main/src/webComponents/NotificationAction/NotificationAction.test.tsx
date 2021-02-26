import { render } from '@shared/tests';
import { NotificationAction } from '@ui5/webcomponents-react/dist/NotificationAction';
import React from 'react';

describe('NotificationAction', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<NotificationAction />);
    expect(asFragment()).toMatchSnapshot();
  });
});

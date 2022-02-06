import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { NotificationAction } from './index';
import React from 'react';

describe('NotificationAction', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<NotificationAction />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(NotificationAction);
});

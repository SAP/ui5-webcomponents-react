import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { NotificationAction } from './index';

describe('NotificationAction', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<NotificationAction />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(NotificationAction);
  createWaitForDefineTest(NotificationAction);
});

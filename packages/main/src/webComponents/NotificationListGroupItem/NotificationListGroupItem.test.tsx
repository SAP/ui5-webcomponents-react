import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { NotificationListGroupItem } from './index';

describe('NotificationListGroupItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<NotificationListGroupItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(NotificationListGroupItem);
  createWaitForDefineTest(NotificationListGroupItem);
});

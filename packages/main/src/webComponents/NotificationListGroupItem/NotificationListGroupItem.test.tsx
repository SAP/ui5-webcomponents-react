import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { NotificationListGroupItem } from './index';
import React from 'react';

describe('NotificationListGroupItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<NotificationListGroupItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(NotificationListGroupItem);
});

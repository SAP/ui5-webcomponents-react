import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { DateTimePicker } from './index';
import React from 'react';

describe('DateTimePicker', () => {
  test('Basic Test (generated)', async () => {
    const { asFragment } = render(<DateTimePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(DateTimePicker);
});

import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { DateRangePicker } from './index';

describe('DateRangePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<DateRangePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(DateRangePicker);
  createWaitForDefineTest(DateRangePicker);
});

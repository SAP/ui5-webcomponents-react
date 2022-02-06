import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { DateRangePicker } from './index';
import React from 'react';

describe('DateRangePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<DateRangePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(DateRangePicker);
});

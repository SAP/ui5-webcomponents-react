import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { DatePicker } from './index';
import React from 'react';

describe('DatePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<DatePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(DatePicker);
});

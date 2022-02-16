import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { DatePicker } from './index';

describe('DatePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<DatePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(DatePicker);
  createWaitForDefineTest(DatePicker);
});

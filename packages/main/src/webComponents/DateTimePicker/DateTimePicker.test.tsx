import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { DateTimePicker } from './index';

describe('DateTimePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<DateTimePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(DateTimePicker);
  createWaitForDefineTest(DateTimePicker);
});

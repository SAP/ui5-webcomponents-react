import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TimePicker } from './index';

describe('TimePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TimePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TimePicker);
  createWaitForDefineTest(TimePicker);
});

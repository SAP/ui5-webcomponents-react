import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TimePicker } from './index';
import React from 'react';

describe('TimePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TimePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TimePicker);
});

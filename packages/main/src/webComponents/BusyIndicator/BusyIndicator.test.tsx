import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { BusyIndicator } from './index';

describe('BusyIndicator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<BusyIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(BusyIndicator);
  createWaitForDefineTest(BusyIndicator);
});

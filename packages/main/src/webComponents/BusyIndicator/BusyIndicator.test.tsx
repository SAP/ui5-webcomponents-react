import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { BusyIndicator } from './index';
import React from 'react';

describe('BusyIndicator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<BusyIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(BusyIndicator);
});

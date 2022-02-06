import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { BarcodeScannerDialog } from './index';
import React from 'react';

describe('BarcodeScannerDialog', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<BarcodeScannerDialog />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(BarcodeScannerDialog);
});

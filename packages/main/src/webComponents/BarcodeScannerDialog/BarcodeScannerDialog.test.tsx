import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { BarcodeScannerDialog } from './index';

describe('BarcodeScannerDialog', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<BarcodeScannerDialog />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(BarcodeScannerDialog);
  createWaitForDefineTest(BarcodeScannerDialog);
});

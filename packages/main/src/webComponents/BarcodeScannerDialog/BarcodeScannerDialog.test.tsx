import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { BarcodeScannerDialog } from '@ui5/webcomponents-react/dist/BarcodeScannerDialog';
import React from 'react';

describe('BarcodeScannerDialog', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<BarcodeScannerDialog />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(BarcodeScannerDialog);
});

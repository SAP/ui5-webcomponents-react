import { render } from '@shared/tests';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import React from 'react';

describe('BusyIndicator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<BusyIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
});

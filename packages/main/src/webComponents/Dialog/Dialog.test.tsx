import { render } from '@shared/tests';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import React from 'react';

describe('Dialog', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Dialog />);
    expect(asFragment()).toMatchSnapshot();
  });
});

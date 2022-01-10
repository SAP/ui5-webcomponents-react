import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Dialog } from '@ui5/webcomponents-react/dist/Dialog';
import React from 'react';

describe('Dialog', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Dialog />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Dialog);
});

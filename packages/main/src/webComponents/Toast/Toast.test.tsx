import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Toast } from '@ui5/webcomponents-react/dist/Toast';
import React from 'react';

describe('Toast', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Toast />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Toast);
});

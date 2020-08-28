import { render } from '@shared/tests';
import { Toast } from '@ui5/webcomponents-react/lib/Toast';
import React from 'react';

describe('Toast', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Toast />);
    expect(asFragment()).toMatchSnapshot();
  });
});

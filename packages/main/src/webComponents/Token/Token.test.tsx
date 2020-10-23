import { render } from '@shared/tests';
import { Token } from '@ui5/webcomponents-react/lib/Token';
import React from 'react';

describe('Token', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Token />);
    expect(asFragment()).toMatchSnapshot();
  });
});

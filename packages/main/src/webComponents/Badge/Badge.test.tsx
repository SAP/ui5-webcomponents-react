import { render } from '@shared/tests';
import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import React from 'react';

describe('Badge', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Badge />);
    expect(asFragment()).toMatchSnapshot();
  });
});

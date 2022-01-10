import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Badge } from '@ui5/webcomponents-react/dist/Badge';
import React from 'react';

describe('Badge', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Badge />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Badge);
});

import { render } from '@shared/tests';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import React from 'react';

describe('Button', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
});

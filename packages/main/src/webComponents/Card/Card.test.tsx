import { render } from '@shared/tests';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import React from 'react';

describe('Card', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});

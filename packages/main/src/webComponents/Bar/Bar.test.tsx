import { render } from '@shared/tests';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import React from 'react';

describe('Bar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Bar />);
    expect(asFragment()).toMatchSnapshot();
  });
});

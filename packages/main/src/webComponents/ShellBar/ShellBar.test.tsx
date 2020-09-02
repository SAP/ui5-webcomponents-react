import { render } from '@shared/tests';
import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import React from 'react';

describe('ShellBar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ShellBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});

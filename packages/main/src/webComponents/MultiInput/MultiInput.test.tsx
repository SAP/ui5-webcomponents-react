import { render } from '@shared/tests';
import { MultiInput } from '@ui5/webcomponents-react/lib/MultiInput';
import React from 'react';

describe('MultiInput', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { MultiInput } from '@ui5/webcomponents-react/dist/MultiInput';
import React from 'react';

describe('MultiInput', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiInput />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MultiInput);
});

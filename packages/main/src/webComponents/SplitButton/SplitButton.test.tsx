import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SplitButton } from '@ui5/webcomponents-react/dist/SplitButton';
import React from 'react';

describe('SplitButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SplitButton>SplitButton</SplitButton>);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SplitButton);
});

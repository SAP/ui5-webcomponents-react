import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SplitButton } from './index';
import React from 'react';

describe('SplitButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SplitButton>SplitButton</SplitButton>);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SplitButton, { children: 'SplitButton' });
});

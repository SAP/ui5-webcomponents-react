import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { SplitButton } from './index';

describe('SplitButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SplitButton>SplitButton</SplitButton>);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SplitButton, { children: 'SplitButton' });
  createWaitForDefineTest(SplitButton);
});

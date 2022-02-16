import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ToggleButton } from './index';

describe('ToggleButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ToggleButton />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ToggleButton);
  createWaitForDefineTest(ToggleButton);
});

import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { RadioButton } from './index';

describe('RadioButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RadioButton />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(RadioButton);
  createWaitForDefineTest(RadioButton);
});

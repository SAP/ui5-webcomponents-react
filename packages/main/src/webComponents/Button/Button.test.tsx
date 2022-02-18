import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Button } from './index';

describe('Button', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Button);
  createWaitForDefineTest(Button);
});

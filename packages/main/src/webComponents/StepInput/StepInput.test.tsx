import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { StepInput } from './index';

describe('StepInput', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<StepInput />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(StepInput);
  createWaitForDefineTest(StepInput);
});

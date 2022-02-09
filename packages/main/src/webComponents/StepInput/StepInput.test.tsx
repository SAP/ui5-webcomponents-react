import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { StepInput } from './index';
import React from 'react';

describe('StepInput', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<StepInput />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(StepInput);
});

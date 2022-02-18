import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Bar } from './index';

describe('Bar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <Bar startContent={<span>Start</span>} children={<span>Middle</span>} endContent={<span>End</span>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Bar);
  createWaitForDefineTest(Bar);
});

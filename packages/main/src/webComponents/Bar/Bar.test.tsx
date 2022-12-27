import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Bar } from './index';

describe('Bar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <Bar startContent={<span>Start</span>} endContent={<span>End</span>}>
        <span>Middle</span>
      </Bar>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Bar);
  createWaitForDefineTest(Bar);
});

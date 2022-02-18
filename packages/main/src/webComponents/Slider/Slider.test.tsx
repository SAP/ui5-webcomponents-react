import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Slider } from './index';

describe('Slider', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Slider />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Slider);
  createWaitForDefineTest(Slider);
});

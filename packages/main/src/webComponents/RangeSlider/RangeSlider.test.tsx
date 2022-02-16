import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { RangeSlider } from './index';

describe('RangeSlider', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RangeSlider />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(RangeSlider);
  createWaitForDefineTest(RangeSlider);
});

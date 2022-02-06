import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { RangeSlider } from './index';
import React from 'react';

describe('RangeSlider', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RangeSlider />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(RangeSlider);
});

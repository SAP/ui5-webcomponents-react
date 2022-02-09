import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Slider } from './index';
import React from 'react';

describe('Slider', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Slider />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Slider);
});

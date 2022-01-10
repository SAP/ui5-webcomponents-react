import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { RangeSlider } from '@ui5/webcomponents-react/dist/RangeSlider';
import React from 'react';

describe('RangeSlider', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RangeSlider />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(RangeSlider);
});

import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ColorPicker } from './index';
import React from 'react';

describe('ColorPicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ColorPicker);
});

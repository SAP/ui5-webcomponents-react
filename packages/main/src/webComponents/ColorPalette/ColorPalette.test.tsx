import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ColorPalette } from './index';
import React from 'react';

describe('ColorPalette', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPalette />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ColorPalette);
});

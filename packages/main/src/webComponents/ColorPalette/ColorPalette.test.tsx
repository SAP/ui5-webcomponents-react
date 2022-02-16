import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ColorPalette } from './index';

describe('ColorPalette', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPalette />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ColorPalette);
  createWaitForDefineTest(ColorPalette);
});

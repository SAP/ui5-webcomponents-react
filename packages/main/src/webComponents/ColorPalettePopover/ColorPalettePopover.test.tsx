import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ColorPalettePopover } from './index';

describe('ColorPalettePopover', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPalettePopover />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ColorPalettePopover);
  createWaitForDefineTest(ColorPalettePopover);
});

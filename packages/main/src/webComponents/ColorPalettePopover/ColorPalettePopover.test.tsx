import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ColorPalettePopover } from './index';
import React from 'react';

describe('ColorPalettePopover', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPalettePopover />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ColorPalettePopover);
});

import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ColorPaletteItem } from './index';

describe('ColorPaletteItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPaletteItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ColorPaletteItem);
  createWaitForDefineTest(ColorPaletteItem);
});

import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ColorPaletteItem } from '@ui5/webcomponents-react/dist/ColorPaletteItem';
import React from 'react';

describe('ColorPaletteItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPaletteItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ColorPaletteItem);
});

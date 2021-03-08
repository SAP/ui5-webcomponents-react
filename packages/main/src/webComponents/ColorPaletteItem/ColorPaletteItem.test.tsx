import { render } from '@shared/tests';
import { ColorPaletteItem } from '@ui5/webcomponents-react/dist/ColorPaletteItem';
import React from 'react';

describe('ColorPaletteItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPaletteItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});

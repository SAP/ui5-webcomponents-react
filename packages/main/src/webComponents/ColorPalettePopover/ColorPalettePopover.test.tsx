import { render } from '@shared/tests';
import { ColorPalettePopover } from '@ui5/webcomponents-react/dist/ColorPalettePopover';
import React from 'react';

describe('ColorPalettePopover', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPalettePopover />);
    expect(asFragment()).toMatchSnapshot();
  });
});

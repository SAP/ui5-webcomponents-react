import { render } from '@shared/tests';
import { ColorPalette } from '@ui5/webcomponents-react/lib/ColorPalette';
import React from 'react';

describe('ColorPalette', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPalette />);
    expect(asFragment()).toMatchSnapshot();
  });
});

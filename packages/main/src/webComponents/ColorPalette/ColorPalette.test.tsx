import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ColorPalette } from '@ui5/webcomponents-react/dist/ColorPalette';
import React from 'react';

describe('ColorPalette', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPalette />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ColorPalette);
});

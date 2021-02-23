import { render } from '@shared/tests';
import { ColorPicker } from '@ui5/webcomponents-react/lib/ColorPicker';
import React from 'react';

describe('ColorPicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPicker />);
    expect(asFragment()).toMatchSnapshot();
  });
});

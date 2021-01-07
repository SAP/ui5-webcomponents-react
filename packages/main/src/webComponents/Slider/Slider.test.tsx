import { render } from '@shared/tests';
import { Slider } from '@ui5/webcomponents-react/lib/Slider';
import React from 'react';

describe('Slider', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Slider />);
    expect(asFragment()).toMatchSnapshot();
  });
});

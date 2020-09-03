import { render } from '@shared/tests';
import { DurationPicker } from '@ui5/webcomponents-react/lib/DurationPicker';
import React from 'react';

describe('DurationPicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<DurationPicker />);
    expect(asFragment()).toMatchSnapshot();
  });
});

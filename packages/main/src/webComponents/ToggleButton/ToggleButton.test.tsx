import { render } from '@shared/tests';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React from 'react';

describe('ToggleButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ToggleButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});

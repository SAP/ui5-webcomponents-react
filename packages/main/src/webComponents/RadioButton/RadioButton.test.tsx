import { render } from '@shared/tests';
import { RadioButton } from '@ui5/webcomponents-react/lib/RadioButton';
import React from 'react';

describe('RadioButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RadioButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});

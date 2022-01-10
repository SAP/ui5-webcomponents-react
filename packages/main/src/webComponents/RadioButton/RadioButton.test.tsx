import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { RadioButton } from '@ui5/webcomponents-react/dist/RadioButton';
import React from 'react';

describe('RadioButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RadioButton />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(RadioButton);
});

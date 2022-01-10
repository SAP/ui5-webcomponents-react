import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import React from 'react';

describe('Button', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Button);
});

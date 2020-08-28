import { render } from '@shared/tests';
import { ProductSwitch } from '@ui5/webcomponents-react/lib/ProductSwitch';
import React from 'react';

describe('ProductSwitch', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ProductSwitch />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@shared/tests';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import React from 'react';

describe('Input', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});

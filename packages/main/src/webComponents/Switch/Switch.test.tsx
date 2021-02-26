import { render } from '@shared/tests';
import { Switch } from '@ui5/webcomponents-react/dist/Switch';
import React from 'react';

describe('Switch', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@shared/tests';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import React from 'react';

describe('Option', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Option />);
    expect(asFragment()).toMatchSnapshot();
  });
});

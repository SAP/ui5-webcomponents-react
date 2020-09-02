import { render } from '@shared/tests';
import { TabSeparator } from '@ui5/webcomponents-react/lib/TabSeparator';
import React from 'react';

describe('TabSeparator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TabSeparator />);
    expect(asFragment()).toMatchSnapshot();
  });
});

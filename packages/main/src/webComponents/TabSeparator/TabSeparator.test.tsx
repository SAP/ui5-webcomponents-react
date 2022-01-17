import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TabSeparator } from '@ui5/webcomponents-react/dist/TabSeparator';
import React from 'react';

describe('TabSeparator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TabSeparator />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TabSeparator);
});

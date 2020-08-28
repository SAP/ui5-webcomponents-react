import { render } from '@shared/tests';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import React from 'react';

describe('TabContainer', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TabContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

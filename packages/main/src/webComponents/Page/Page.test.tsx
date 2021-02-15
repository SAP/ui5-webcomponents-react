import { render } from '@shared/tests';
import { Page } from '@ui5/webcomponents-react/lib/Page';
import React from 'react';

describe('Page', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
});

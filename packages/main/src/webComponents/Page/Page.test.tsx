import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Page } from '@ui5/webcomponents-react/dist/Page';
import React from 'react';

describe('Page', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Page);
});

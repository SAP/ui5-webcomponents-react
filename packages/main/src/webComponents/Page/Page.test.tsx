import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Page } from './index';
import React from 'react';

describe('Page', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Page);
});

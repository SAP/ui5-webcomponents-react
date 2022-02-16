import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Page } from './index';

describe('Page', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Page);
  createWaitForDefineTest(Page);
});

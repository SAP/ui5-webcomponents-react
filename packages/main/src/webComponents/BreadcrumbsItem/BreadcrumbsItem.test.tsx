import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { BreadcrumbsItem } from './index';

describe('BreadcrumbsItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<BreadcrumbsItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(BreadcrumbsItem);
  createWaitForDefineTest(BreadcrumbsItem);
});

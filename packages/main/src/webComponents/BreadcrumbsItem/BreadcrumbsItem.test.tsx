import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { BreadcrumbsItem } from './index';
import React from 'react';

describe('BreadcrumbsItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<BreadcrumbsItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(BreadcrumbsItem);
});

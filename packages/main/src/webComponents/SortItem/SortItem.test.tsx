import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { SortItem } from './index';

describe('SortItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SortItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SortItem);
  createWaitForDefineTest(SortItem);
});

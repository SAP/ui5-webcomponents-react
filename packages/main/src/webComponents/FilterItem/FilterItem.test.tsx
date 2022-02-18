import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { FilterItem } from './index';

describe('FilterItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FilterItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(FilterItem);
  createWaitForDefineTest(FilterItem);
});

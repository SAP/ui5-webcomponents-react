import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Table } from './index';

describe('Table', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Table);
  createWaitForDefineTest(Table);
});

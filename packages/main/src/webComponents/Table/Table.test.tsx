import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Table } from './index';
import React from 'react';

describe('Table', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Table);
});

import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TableRow } from './index';

describe('TableRow', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableRow />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TableRow);
  createWaitForDefineTest(TableRow);
});

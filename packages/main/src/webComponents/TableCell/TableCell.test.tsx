import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TableCell } from './index';

describe('TableCell', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableCell />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TableCell);
  createWaitForDefineTest(TableCell);
});

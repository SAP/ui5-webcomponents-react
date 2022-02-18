import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TableGroupRow } from './index';

describe('TableGroupRow', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableGroupRow />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TableGroupRow);
  createWaitForDefineTest(TableGroupRow);
});

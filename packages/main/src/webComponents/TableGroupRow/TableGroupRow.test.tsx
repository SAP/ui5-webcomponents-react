import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TableGroupRow } from './index';
import React from 'react';

describe('TableGroupRow', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableGroupRow />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TableGroupRow);
});

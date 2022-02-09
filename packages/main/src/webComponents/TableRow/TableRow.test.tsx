import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TableRow } from './index';
import React from 'react';

describe('TableRow', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableRow />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TableRow);
});

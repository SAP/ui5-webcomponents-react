import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TableCell } from '@ui5/webcomponents-react/dist/TableCell';
import React from 'react';

describe('TableCell', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableCell />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TableCell);
});

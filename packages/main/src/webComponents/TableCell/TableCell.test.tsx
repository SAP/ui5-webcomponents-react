import { render } from '@shared/tests';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import React from 'react';

describe('TableCell', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableCell />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Table } from '@ui5/webcomponents-react/dist/Table';
import React from 'react';

describe('Table', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Table);
});

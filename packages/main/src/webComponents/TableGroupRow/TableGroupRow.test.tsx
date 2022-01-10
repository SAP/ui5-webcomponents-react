import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TableGroupRow } from '@ui5/webcomponents-react/dist/TableGroupRow';
import React from 'react';

describe('TableGroupRow', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableGroupRow />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TableGroupRow);
});

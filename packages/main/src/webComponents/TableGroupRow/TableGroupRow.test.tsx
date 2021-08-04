import { render } from '@shared/tests';
import { TableGroupRow } from '@ui5/webcomponents-react/dist/TableGroupRow';
import React from 'react';

describe('TableGroupRow', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableGroupRow />);
    expect(asFragment()).toMatchSnapshot();
  });
});

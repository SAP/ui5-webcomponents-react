import { render } from '@shared/tests';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import React from 'react';

describe('TableColumn', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableColumn />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TableColumn } from '@ui5/webcomponents-react/dist/TableColumn';
import React from 'react';

describe('TableColumn', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableColumn />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TableColumn);
});

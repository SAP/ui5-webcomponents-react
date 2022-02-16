import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TableColumn } from './index';

describe('TableColumn', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TableColumn />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TableColumn);
  createWaitForDefineTest(TableColumn);
});

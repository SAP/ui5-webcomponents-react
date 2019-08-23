import React from 'react';
import { Table } from '../../lib/Table';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Table', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Table />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

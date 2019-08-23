import React from 'react';
import { TableCell } from '../../lib/TableCell';
import { mountThemedComponent } from '@shared/tests/utils';

describe('TableCell', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableCell />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

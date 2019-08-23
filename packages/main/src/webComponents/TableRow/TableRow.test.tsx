import React from 'react';
import { TableRow } from '../../lib/TableRow';
import { mountThemedComponent } from '@shared/tests/utils';

describe('TableRow', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableRow />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

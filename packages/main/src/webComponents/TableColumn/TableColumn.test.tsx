import React from 'react';
import { TableColumn } from '../../lib/TableColumn';
import { mountThemedComponent } from '@shared/tests/utils';

describe('TableColumn', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableColumn />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

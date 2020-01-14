import { mountThemedComponent } from '@shared/tests/utils';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import React from 'react';

describe('TableCell', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableCell />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

import { mountThemedComponent } from '@shared/tests/utils';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import React from 'react';

describe('TableRow', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableRow />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

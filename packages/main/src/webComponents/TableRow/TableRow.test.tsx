import React from 'react';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { mountThemedComponent } from '@shared/tests/utils';

describe('TableRow', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableRow />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

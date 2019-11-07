import React from 'react';
import { Table } from '@ui5/webcomponents-react/lib/Table';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Table', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Table />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

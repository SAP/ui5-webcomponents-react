import { mountThemedComponent } from '@shared/tests/utils';
import { Table } from '@ui5/webcomponents-react/lib/Table';
import React from 'react';

describe('Table', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Table />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

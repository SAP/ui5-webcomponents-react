import React from 'react';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { mountThemedComponent } from '@shared/tests/utils';

describe('TableColumn', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableColumn />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

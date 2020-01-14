import { mountThemedComponent } from '@shared/tests/utils';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import React from 'react';

describe('TableColumn', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableColumn />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

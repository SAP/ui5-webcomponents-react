import React from 'react';
import { List } from '@ui5/webcomponents-react/lib/List';
import { mountThemedComponent } from '@shared/tests/utils';

describe('List', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<List />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

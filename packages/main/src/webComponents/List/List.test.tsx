import { mountThemedComponent } from '@shared/tests/utils';
import { List } from '@ui5/webcomponents-react/lib/List';
import React from 'react';

describe('List', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<List />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

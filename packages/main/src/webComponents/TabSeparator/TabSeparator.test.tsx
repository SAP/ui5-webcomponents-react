import { mountThemedComponent } from '@shared/tests/utils';
import { TabSeparator } from '@ui5/webcomponents-react/lib/TabSeparator';
import React from 'react';

describe('TabSeparator', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TabSeparator />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

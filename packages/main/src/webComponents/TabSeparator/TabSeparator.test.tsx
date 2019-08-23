import React from 'react';
import { TabSeparator } from '../../lib/TabSeparator';
import { mountThemedComponent } from '@shared/tests/utils';

describe('TabSeparator', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TabSeparator />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

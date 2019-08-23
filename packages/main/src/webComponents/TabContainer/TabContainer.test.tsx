import React from 'react';
import { TabContainer } from '../../lib/TabContainer';
import { mountThemedComponent } from '@shared/tests/utils';

describe('TabContainer', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TabContainer />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

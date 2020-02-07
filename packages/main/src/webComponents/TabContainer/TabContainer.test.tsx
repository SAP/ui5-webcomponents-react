import { mountThemedComponent } from '@shared/tests/utils';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import React from 'react';

describe('TabContainer', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TabContainer />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

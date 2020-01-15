import { mountThemedComponent } from '@shared/tests/utils';
import { Token } from '@ui5/webcomponents-react/lib/Token';
import React from 'react';

describe('Token', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Token />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

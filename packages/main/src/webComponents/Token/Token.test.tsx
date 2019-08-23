import React from 'react';
import { Token } from '../../lib/Token';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Token', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Token />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

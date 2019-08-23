import React from 'react';
import { Link } from '../../lib/Link';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Link', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Link />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

import { mountThemedComponent } from '@shared/tests/utils';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import React from 'react';

describe('Link', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Link />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

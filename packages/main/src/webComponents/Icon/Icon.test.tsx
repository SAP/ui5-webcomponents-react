import { mountThemedComponent } from '@shared/tests/utils';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';

describe('Icon', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Icon />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

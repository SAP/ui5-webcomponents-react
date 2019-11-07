import React from 'react';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Icon', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Icon />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

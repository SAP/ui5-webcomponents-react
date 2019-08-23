import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { Badge } from '../../lib/Badge';
import { Icon } from '../../lib/Icon';

describe('Badge', () => {
  test('Basic Test', () => {
    const wrapper = mountThemedComponent(<Badge>My Badge</Badge>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('with Icon', () => {
    const wrapper = mountThemedComponent(<Badge icon={<Icon src="sap-icon://employee" />}>My Badge</Badge>);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

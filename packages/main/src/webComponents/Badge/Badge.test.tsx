import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';

describe('Badge', () => {
  test('Basic Test', () => {
    const wrapper = mountThemedComponent(<Badge>My Badge</Badge>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('with Icon', () => {
    const wrapper = mountThemedComponent(<Badge icon={<Icon name="employee" />}>My Badge</Badge>);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

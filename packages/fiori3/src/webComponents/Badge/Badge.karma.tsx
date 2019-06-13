import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Badge } from '../../lib/Badge';
import { Icon } from '../../lib/Icon';

use(matchSnapshot);

describe('Badge', () => {
  it('Basic Test', () => {
    const wrapper = mountThemedComponent(<Badge>My Badge</Badge>);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('with Icon', () => {
    const wrapper = mountThemedComponent(<Badge icon={<Icon src="sap-icon://employee" />}>My Badge</Badge>);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

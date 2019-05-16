import { StandardListItem } from '../../lib/StandardListItem';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('StandardListItem', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<StandardListItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

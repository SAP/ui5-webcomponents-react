import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { StandardListItem } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('StandardListItem', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<StandardListItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

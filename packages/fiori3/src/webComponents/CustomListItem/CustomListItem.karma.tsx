import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { CustomListItem } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('CustomListItem', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CustomListItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

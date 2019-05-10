import { CustomListItem } from '@lib/CustomListItem';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('CustomListItem', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CustomListItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

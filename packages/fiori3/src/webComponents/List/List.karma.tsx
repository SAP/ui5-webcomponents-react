import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { List } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('List', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<List />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { TableRow } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('TableRow', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableRow />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

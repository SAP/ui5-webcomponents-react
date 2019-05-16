import { TableRow } from '../../lib/TableRow';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('TableRow', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableRow />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

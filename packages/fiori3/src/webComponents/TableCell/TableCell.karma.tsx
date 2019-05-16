import { TableCell } from '../../lib/TableCell';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('TableCell', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableCell />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { TableCell } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('TableCell', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableCell />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

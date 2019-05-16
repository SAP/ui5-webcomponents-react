import { Table } from '../../lib/Table';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('Table', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Table />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

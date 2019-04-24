import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Table } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Table', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Table />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

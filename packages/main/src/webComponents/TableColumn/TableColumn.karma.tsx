import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { TableColumn } from '../../lib/TableColumn';

use(matchSnapshot);

describe('TableColumn', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableColumn />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

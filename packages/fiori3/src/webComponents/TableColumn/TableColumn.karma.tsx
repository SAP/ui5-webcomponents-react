import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { TableColumn } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('TableColumn', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TableColumn />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

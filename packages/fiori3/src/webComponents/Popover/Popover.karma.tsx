import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Popover } from '../../lib/Popover';

use(matchSnapshot);

describe('Popover', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Popover />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

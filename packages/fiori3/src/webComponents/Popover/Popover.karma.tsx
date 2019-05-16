import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Popover } from '../../lib/Popover';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Popover', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Popover />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

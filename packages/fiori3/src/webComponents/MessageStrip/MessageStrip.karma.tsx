import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { MessageStrip } from '../../lib/MessageStrip';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('MessageStrip', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MessageStrip />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

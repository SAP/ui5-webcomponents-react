import { Popup } from '../../lib/Popup';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe.skip('Popup', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Popup />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

import React from 'react';
import { BusyIndicator } from '../../lib/BusyIndicator';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('BusyIndicator', () => {
  it('Check Elements', () => {
    const wrapper = mountThemedComponent(<BusyIndicator />);
    expect(wrapper.find('div').length).to.equal(4);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Fade In', () => {
    const wrapper = mountThemedComponent(<BusyIndicator fadeIn />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

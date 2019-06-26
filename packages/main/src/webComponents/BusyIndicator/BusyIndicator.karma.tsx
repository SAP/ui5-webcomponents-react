import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { BusyIndicator } from '../../lib/BusyIndicator';
import { BusyIndicatorType } from '../../lib/BusyIndicatorType';

use(matchSnapshot);

describe('BusyIndicator', () => {
  it('Basic Test', () => {
    const wrapper = mountThemedComponent(<BusyIndicator active />);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Inactive', () => {
    const wrapper = mountThemedComponent(<BusyIndicator />);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Size Medium', () => {
    const wrapper = mountThemedComponent(<BusyIndicator active size={BusyIndicatorType.Medium} />);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Size Small', () => {
    const wrapper = mountThemedComponent(<BusyIndicator active size={BusyIndicatorType.Small} />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

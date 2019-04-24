import React from 'react';
import { ProgressIndicator } from './index';
import { ValueState } from '@fiori-for-react/core/enums/ValueState';
import { ContentDensity } from '@fiori-for-react/core/enums/ContentDensity';
import { expect } from 'chai';
import { mountThemedComponent } from '@shared/tests/utils';

const testFactory = () => {
  Object.values(ValueState).forEach((state) => {
    it(`ProgressIndicator with state ${state}`, () => {
      const wrapper = mountThemedComponent(<ProgressIndicator state={state} />);
      expect(wrapper.debug()).to.matchSnapshot();
    });
  });
};

describe('ProgressIndicator', () => {
  it('Custom', () => {
    const wrapper = mountThemedComponent(
      <ProgressIndicator displayValue="sdf" width="50%" height="50%" percentValue={40} />
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('State', () => {
    const wrapper = mountThemedComponent(<ProgressIndicator percentValue={85} state={ValueState.Error} />, {
      contentDensity: ContentDensity.Cozy
    });
    expect(wrapper.debug()).to.matchSnapshot();
  });

  testFactory();
});

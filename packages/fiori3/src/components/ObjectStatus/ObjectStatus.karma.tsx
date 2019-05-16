import { ValueState } from '../../lib/ValueState';
import React from 'react';
import { ObjectStatus } from '../../lib/ObjectStatus';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';

use(matchSnapshot);

const testFactory = () => {
  Object.values(ValueState).forEach((state) => {
    it(`ObjectStatus: state: ${state}`, () => {
      const wrapper = mountThemedComponent(<ObjectStatus state={state} showDefaultIcon />);
      expect(wrapper.debug()).to.matchSnapshot();
    });
  });
};

describe('ObjectStatus', () => {
  it('Render without Crashing', () => {
    const wrapper = mountThemedComponent(
      <ObjectStatus state={ValueState.Error} showDefaultIcon>
        Hello
      </ObjectStatus>
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Text Deprecation', () => {
    const wrapper = mountThemedComponent(
      <ObjectStatus state={ValueState.Error} showDefaultIcon>
        Hello
      </ObjectStatus>
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });

  testFactory();

  it('Renders correct ObjectStatus text', () => {
    const el = 'My Text';
    const wrapper = mountThemedComponent(<ObjectStatus>{el}</ObjectStatus>);
    expect(wrapper.text()).to.equal(el);
  });
});

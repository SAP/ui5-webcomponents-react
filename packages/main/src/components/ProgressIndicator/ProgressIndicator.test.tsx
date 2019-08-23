import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { ContentDensity } from '../../lib/ContentDensity';
import { ProgressIndicator } from '../../lib/ProgressIndicator';
import { ValueState } from '../../lib/ValueState';

const testFactory = () => {
  Object.values(ValueState).forEach((state) => {
    test(`ProgressIndicator with state ${state}`, () => {
      const wrapper = mountThemedComponent(<ProgressIndicator state={state} />);
      expect(wrapper.render()).toMatchSnapshot();
    });
  });
};

describe('ProgressIndicator', () => {
  test('Custom', () => {
    const wrapper = mountThemedComponent(
      <ProgressIndicator displayValue="sdf" width="50%" height="50%" percentValue={40} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('State', () => {
    const wrapper = mountThemedComponent(<ProgressIndicator percentValue={85} state={ValueState.Error} />, {
      contentDensity: ContentDensity.Cozy
    });
    expect(wrapper.render()).toMatchSnapshot();
  });

  testFactory();
});

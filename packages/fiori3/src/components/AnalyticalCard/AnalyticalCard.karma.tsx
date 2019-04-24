import { ValueState } from '@fiori-for-react/core/enums';
import React from 'react';
import { AnalyticalCardHeader } from './header/AnalyticalCardHeader';
import { DeviationIndicator } from './header/DeviationIndicator';
import { AnalyticalCard } from './index';
import { Text } from '../Text';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

const renderHeader = () => {
  return (
    <AnalyticalCardHeader
      title="Title"
      subTitle="Subtitle"
      arrowIndicator={DeviationIndicator.Down}
      indicatorState={ValueState.Success}
      value="Value"
      valueState={ValueState.Success}
      unit="Unit"
      target="Target"
      deviation="Deviation"
      loading={false}
      showIndicator
      description="Description"
    />
  );
};

// TODO Add more tests
describe('Analytical Card', () => {
  it('Render without Crashing', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalCard renderHeader={renderHeader}>
        <Text>I'm a content!</Text>
      </AnalyticalCard>
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { AnalyticalCard } from '../../lib/AnalyticalCard';
import { AnalyticalCardHeader } from '../../lib/AnalyticalCardHeader';
import { DeviationIndicator } from '../../lib/DeviationIndicator';
import { Text } from '../../lib/Text';
import { ValueState } from '../../lib/ValueState';

use(matchSnapshot);

const Header = (
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
    showIndicator
    description="Description"
  />
);

// TODO Add more tests
describe('Analytical Card', () => {
  it('Render without Crashing', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalCard header={Header}>
        <Text>I'm a content!</Text>
      </AnalyticalCard>
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { AnalyticalCard } from './index';
import { AnalyticalCardHeader } from './header/AnalyticalCardHeader';
import { DeviationIndicator } from './header/DeviationIndicator';
import { ValueState } from '@fiori-for-react/core';
import { LineChart } from '@fiori-for-react/charts';

storiesOf('F4R Components | Analytical Card', module).add('default', () => (
  <AnalyticalCard
    renderHeader={() => (
      <AnalyticalCardHeader
        title="Title"
        subTitle="Subtitle"
        arrowIndicator={select('arrowIndicator', DeviationIndicator, DeviationIndicator.Down)}
        indicatorState={select('indicatorState', ValueState, ValueState.Success)}
        value="Value"
        valueState={select('valueState', ValueState, ValueState.Success)}
        unit="Unit"
        target="Target"
        deviation="Deviation"
        onHeaderPress={action('Header pressed')}
        loading={boolean('loading', false)}
        showIndicator
        description="Description"
      />
    )}
  >
    <LineChart
      labels={[
        '201901',
        '201902',
        '201903',
        '201904',
        '201905',
        '201906',
        '201907',
        '201908',
        '201909',
        '201910',
        '201911',
        '201912'
      ]}
      datasets={[
        {
          label: 'automated mapping quota',
          data: [65, 64, 68, 73, 75, 75, 79, 84, 88, 88.5, 89, 92]
        }
      ]}
      height={200}
      width={500}
      options={{
        layout: {
          padding: { top: 25 }
        }
      }}
      valueAxisFormatter={(yValue) => {
        return `${yValue}%`;
      }}
      colors={['#607182']}
    />
  </AnalyticalCard>
));

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { LineChart } from '@ui5/webcomponents-react-charts/lib/LineChart';
import { AnalyticalCard } from '@ui5/webcomponents-react/lib/AnalyticalCard';
import { AnalyticalCardHeader } from '@ui5/webcomponents-react/lib/AnalyticalCardHeader';
import { DeviationIndicator } from '@ui5/webcomponents-react/lib/DeviationIndicator';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'Components / Analytical Card',
  component: AnalyticalCard,
  parameters: {
    subcomponents: { AnalyticalCardHeader }
  }
};

export const defaultStory = () => (
  <AnalyticalCard
    width={text('width', '20rem')}
    header={
      <AnalyticalCardHeader
        title={text('title', 'Title')}
        subTitle={text('subTitle', 'Subtitle')}
        arrowIndicator={select('arrowIndicator', DeviationIndicator, DeviationIndicator.Down)}
        indicatorState={select('indicatorState', ValueState, ValueState.Success)}
        value={text('value', 'Value')}
        valueState={select('valueState', ValueState, ValueState.Success)}
        unit={text('unit', 'Unit')}
        target={text('target', 'target')}
        deviation={text('deviation', 'deviation')}
        onHeaderPress={action('Header pressed')}
        showIndicator={boolean('showIndicator', true)}
        description={text('description', 'Description')}
        counter={text('counter', 'Counter')}
        counterState={select('counterState', ValueState, ValueState.Success)}
        currency={text('currency', 'EUR')}
      />
    }
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
      width={270}
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
);

defaultStory.story = { name: 'Default' };

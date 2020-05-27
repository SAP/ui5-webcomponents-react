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

const simpleDataSet = [
  {
    name: 'January',
    users: 76
  },
  {
    name: 'February',
    users: 230
  },
  {
    name: 'March',
    users: 240
  },
  {
    name: 'April',
    users: 280
  },
  {
    name: 'May',
    users: 100
  }
];

export const defaultStory = () => (
  <AnalyticalCard
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
      noLegend
      dimensions={[{ accessor: 'name' }]}
      measures={[{ accessor: 'users', formatter: (val) => `${val}k` }]}
      dataset={simpleDataSet}
    />
  </AnalyticalCard>
);

defaultStory.storyName = 'Default';

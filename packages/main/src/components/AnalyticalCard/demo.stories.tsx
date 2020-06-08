import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
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
  },
  argTypes: {
    ...createSelectArgTypes({
      arrowIndicator: DeviationIndicator,
      indicatorState: ValueState,
      valueState: ValueState,
      counterState: ValueState
    })
  },
  args: {
    title: 'Title',
    subTitle: 'Subtitle',
    arrowIndicator: DeviationIndicator.Down,
    indicatorState: ValueState.Success,
    value: 'Value',
    valueState: ValueState.Success,
    unit: 'Unit',
    target: 'Target',
    deviation: 'Deviation',
    showIndicator: true,
    description: 'Description',
    counter: 'Counter',
    counterState: ValueState.Success,
    currency: 'EUR'
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

export const defaultStory = (props) => (
  <AnalyticalCard
    header={
      <AnalyticalCardHeader
        title={props.title}
        subTitle={props.subTitle}
        arrowIndicator={props.arrowIndicator}
        indicatorState={props.indicatorState}
        value={props.value}
        valueState={props.valueState}
        unit={props.unit}
        target={props.target}
        deviation={props.deviation}
        onHeaderPress={props.onHeaderPress}
        showIndicator={props.showIndicator}
        description={props.description}
        counter={props.counter}
        counterState={props.counterState}
        currency={props.currency}
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

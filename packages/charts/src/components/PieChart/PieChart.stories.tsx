import React from 'react';
import { PieChart } from '../../lib/PieChart';
import { simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts /  PieChart',
  component: PieChart,
  args: {
    innerRadius: '0%',
    outerRadius: '80%'
  },
  argTypes: {
    dataset: {
      type: null
    },
    chartConfig: {
      type: null
    }
  }
};

export const renderStory = (props) => {
  return (
    <PieChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      chartConfig={{
        innerRadius: props.innerRadius,
        outerRadius: props.outerRadius
      }}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users'
      }}
    />
  );
};

renderStory.storyName = 'Default';

export const renderCustomColorStory = (props) => {
  return (
    <PieChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users',
        colors: ['#f00', 'green', 'var(--sapNegativeColor)']
      }}
    />
  );
};

renderCustomColorStory.storyName = 'With custom color';

export const loadingPlaceholder = () => <PieChart style={{ width: '50%' }} />;

loadingPlaceholder.storyName = 'Loading placeholder';

export const renderFormatedStory = (props) => {
  return (
    <PieChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users',
        formatter: (d) => (d > 200 ? 'over 200' : 'lower')
      }}
    />
  );
};

renderFormatedStory.storyName = 'With formatted data labels';

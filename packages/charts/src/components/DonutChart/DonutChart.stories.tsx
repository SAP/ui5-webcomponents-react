import React from 'react';
import { DonutChart } from '../../lib/DonutChart';
import { simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts /  DonutChart',
  component: DonutChart,
  argTypes: {
    dataset: {
      type: null
    },
    chartConfig: {
      type: null
    },
    measure: {
      type: null
    },
    dimension: {
      type: null
    },
    showActiveSegmentDataLabel: {
      type: 'boolean'
    },
    activeSegment: {
      type: 'number'
    }
  },
  args: {
    innerRadius: '20%',
    outerRadius: '90%',
    activeSegment: 9,
    showActiveSegmentDataLabel: true
  }
};

export const renderStory = (props) => {
  return (
    <DonutChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      chartConfig={{
        activeSegment: props.activeSegment,
        showActiveSegmentDataLabel: props.showActiveSegmentDataLabel
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

export const renderCustomColorStory = (props) => (
  <DonutChart
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

renderCustomColorStory.storyName = 'With custom color';

export const withPaddingStory = (props) => (
  <DonutChart
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
      accessor: 'users'
    }}
    chartConfig={{ paddingAngle: 5 }}
  />
);

withPaddingStory.storyName = 'With padding angle';

export const withCustomRadiusStory = (props) => (
  <DonutChart
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

withCustomRadiusStory.storyName = 'With custom inner radius';

export const loadingPlaceholder = () => <DonutChart style />;

loadingPlaceholder.storyName = 'Loading placeholder';

export const withFormatter = (props) => (
  <DonutChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    style={{ width: '50%' }}
    dataset={simpleDataSet}
    dimension={{
      accessor: 'name',
      formatter: (el) => el.slice(0, 3)
    }}
    measure={{
      accessor: 'users',
      formatter: (el) => el / 10
    }}
  />
);

withFormatter.storyName = 'With formatter';

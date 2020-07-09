import React from 'react';
import { MicroBarChart } from '@ui5/webcomponents-react-charts/lib/MicroBarChart';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const singleData = [
  {
    name: 'January',
    data: 100
  },
  {
    name: 'February',
    data: 300
  },
  {
    name: 'March',
    data: 530
  },
  {
    name: 'April',
    data: 200
  }
];

export default {
  title: 'Charts /  MicroBarChart',
  component: MicroBarChart,
  argTypes: {
    dataset: {
      type: null
    },
    measure: {
      type: null
    },
    dimension: {
      type: null
    }
  },
  args: {
    chartConfig: {
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      legendPosition: 'bottom',
      legendHorizontalAlign: 'left',
      zoomingTool: false,
      resizeDebounce: 250
    }
  }
};

export const defaultStory = (props) => (
  <MicroBarChart
    dataset={singleData}
    loading={props.loading}
    style={{ width: '100%' }}
    dimension={{
      accessor: 'name'
    }}
    measure={{
      accessor: 'data'
    }}
  />
);

defaultStory.storyName = 'Default';

export const withCustomProps = (props) => (
  <MicroBarChart
    onDataPointClick={props.onDataPointClickHandler}
    dataset={singleData}
    style={{ width: '50%' }}
    loading={props.loading}
    dimension={{
      accessor: 'name'
    }}
    measure={{
      accessor: 'data',
      colors: ['#f0ab00', 'var(--sapHighlightColor)'],
      formatter: (d) => (d > 200 ? 'over 200' : 'lower')
    }}
  />
);

withCustomProps.storyName = 'With custom props';

export const loadingPlaceholder = () => (
  <MicroBarChart
    dataset={[]}
    dimension={{
      accessor: 'name'
    }}
    measure={{
      accessor: 'data'
    }}
    style={{ width: '20%' }}
  />
);

loadingPlaceholder.storyName = 'Loading placeholder';

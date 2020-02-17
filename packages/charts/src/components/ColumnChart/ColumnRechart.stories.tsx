import { action } from '@storybook/addon-actions';
import React from 'react';
import { ColumnRechart } from './ColumnRechart';

const dataset = [
  {
    name: 'January',
    users: 100,
    sessions: 300
  },
  {
    name: 'February',
    users: 230,
    sessions: 330
  },
  {
    name: 'March',
    users: 240,
    sessions: 404
  },
  {
    name: 'April',
    users: 280,
    sessions: 80
  },
  {
    name: 'May',
    users: 100,
    sessions: 300
  },
  {
    name: 'June',
    users: 230,
    sessions: 330
  },
  {
    name: 'July',
    users: 20,
    sessions: 470
  },
  {
    name: 'August',
    users: 220,
    sessions: 180
  },
  {
    name: 'September',
    users: 200,
    sessions: 360
  },
  {
    name: 'October',
    users: 250,
    sessions: 500
  },
  {
    name: 'November',
    users: 240,
    sessions: 404
  },
  {
    name: 'December',
    users: 280,
    sessions: 80
  }
];

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
  title: 'Charts / ColumnChart',
  component: ColumnRechart
};

export const defaultStory = () => (
  <ColumnRechart
    onDataPointClickHandler={action('onDataPointClickHandler')}
    onLegendClickHandler={action('onLegendClickHandler')}
    dataset={dataset}
    width={'97%'}
    chartConfig={{
      gridStroke: 'white',
      gridVertical: false,
      fillOpacity: 0.7,
      strokeOpacity: 1,
      barSize: 20,
      xAxisVisible: true,
      yAxisVisible: true,
      zoomingTool: true,
      dataLabel: true,
      secondYAxis: { dataKey: 'users' }
    }}
  />
);

defaultStory.story = {
  name: 'Default'
};

export const withCustomColor = () => (
  <ColumnRechart
    onDataPointClickHandler={action('onDataPointClickHandler')}
    labelKey={'xValue'}
    dataset={singleData}
    color={'red'}
    width={'95%'}
    height={'40vh'}
    chartConfig={{ dataLabel: true }}
  />
);

withCustomColor.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <ColumnRechart labelKey={'xValue'} width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const defaultStackedStory = () => (
  <ColumnRechart
    onDataPointClickHandler={action('onDataPointClickHandler')}
    onLegendClickHandler={action('onLegendClickHandler')}
    labelKey={'name'}
    dataset={dataset}
    width={'97%'}
    chartConfig={{
      gridStroke: 'white',
      gridVertical: false,
      fillOpacity: 0.7,
      strokeOpacity: 1,
      barSize: 35,
      xAxisVisible: true,
      yAxisVisible: true,
      zoomingTool: true,
      stacked: true,
      dataLabel: true
    }}
  />
);

defaultStackedStory.story = {
  name: 'Stacked chart'
};

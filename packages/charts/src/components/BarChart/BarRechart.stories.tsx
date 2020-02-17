import { action } from '@storybook/addon-actions';
import React from 'react';
import { BarRechart } from './BarRechart';

const dataset = [
  {
    name: 'January',
    users: -200,
    sessions: 300,
    volume: 756
  },
  {
    name: 'February',
    users: -230,
    sessions: 330,
    volume: 880
  },
  {
    name: 'March',
    users: -240,
    sessions: 404,
    volume: 700
  },
  {
    name: 'April',
    users: 80,
    sessions: 80,
    volume: 604
  },
  {
    name: 'May',
    users: 100,
    sessions: 300,
    volume: 756
  },
  {
    name: 'June',
    users: 230,
    sessions: 330,
    volume: 880
  },
  {
    name: 'July',
    users: -20,
    sessions: 470,
    volume: 450
  },
  {
    name: 'August',
    users: 220,
    sessions: 180,
    volume: 104
  },
  {
    name: 'September',
    users: -200,
    sessions: 360,
    volume: 879
  },
  {
    name: 'October',
    users: -250,
    sessions: 500,
    volume: 200
  },
  {
    name: 'November',
    users: -240,
    sessions: 404,
    volume: 700
  },
  {
    name: 'December',
    users: -280,
    sessions: 80,
    volume: 604
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
  title: 'Charts / BarChart',
  component: BarRechart
};

export const defaultStory = () => (
  <BarRechart
    onDataPointClickHandler={action('onDataPointClickHandler')}
    onLegendClickHandler={action('onLegendClickHandler')}
    dataset={dataset}
    width={'97%'}
    height={'95vh'}
  />
);

defaultStory.story = {
  name: 'Default'
};

export const withCustomColor = () => (
  <BarRechart
    onDataPointClickHandler={action('onDataPointClickHandler')}
    dataset={singleData}
    labelKey={'name'}
    color={'red'}
    width={'95%'}
    height={'40vh'}
    chartConfig={{ dataLabel: true, barSize: 20 }}
  />
);

withCustomColor.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <BarRechart labelKey={'name'} width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const defaultStackedStory = () => (
  <BarRechart
    onDataPointClickHandler={action('onDataPointClickHandler')}
    onLegendClickHandler={action('onLegendClickHandler')}
    labelKey={'name'}
    width={'91%'}
    dataset={dataset}
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

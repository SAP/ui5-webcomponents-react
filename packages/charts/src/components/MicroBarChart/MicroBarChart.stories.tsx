import React from 'react';
import { MicroBarChart } from './MicroBarChart';

const singleData = [
  {
    name: 'January',
    data: 100,
    users: 120
  },
  {
    name: 'February',
    data: 300,
    users: 40
  },
  {
    name: 'March',
    data: 530,
    users: 20
  },
  {
    name: 'April',
    data: 200,
    users: 30
  }
];

export default {
  title: 'Charts /  MicroBarChart',
  component: MicroBarChart
};

export const defaultStory = (props) => (
  <MicroBarChart
    onDataPointClick={props.onDataPointClickHandler}
    onLegendClick={props.onLegendClickHandler}
    dataset={singleData}
    style={{ width: '100%', height: '30vh' }}
    dimension={{
      accessor: 'name'
    }}
    measure={{
      accessor: 'users'
    }}
  />
);

defaultStory.storyName = 'Default';

export const withCustomColor = () => (
  <MicroBarChart
    onDataPointClick={props.onDataPointClickHandler}
    onLegendClick={props.onLegendClickHandler}
    dataset={singleData}
    style={{ width: '100%', height: '30vh' }}
    dimension={{
      accessor: 'name'
    }}
    measure={{
      accessor: 'users',
      colors: ['#f0ab00', 'var(--sapHighlightColor)'],
      formatter: (d) => (d > 200 ? 'over 200' : 'lower')
    }}
  />
);

withCustomColor.storyName = 'With custom color';

export const loadingPlaceholder = () => <MicroBarChart style={{ width: '20%' }} />;

loadingPlaceholder.storyName = 'Loading placeholder';

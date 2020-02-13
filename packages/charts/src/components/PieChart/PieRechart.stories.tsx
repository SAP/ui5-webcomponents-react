import React from 'react';
import { PieRechart } from './PieRechart';

const dataset = [
  {
    name: 'January',
    users: 100
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
  },
  {
    name: 'June',
    users: 230
  },
  {
    name: 'July',
    users: 20
  },
  {
    name: 'August',
    users: 220
  },
  {
    name: 'September',
    users: 200
  },
  {
    name: 'October',
    users: 250
  },
  {
    name: 'November',
    users: 240
  },
  {
    name: 'December',
    users: 280
  }
];

export default {
  title: 'Rechart - PieChart',
  component: PieRechart
};

const clickHandler = (data) => {
  console.log(data);
};

function renderStory() {
  return (
    <PieRechart
      legendClickHandler={clickHandler}
      dataPointClickHandler={clickHandler}
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      chartConfig={{ dataLabel: true }}
    />
  );
}

export const defaultStory = renderStory();

defaultStory.story = {
  name: 'Default'
};

function renderDonutStory() {
  return (
    <PieRechart
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      chartConfig={{ dataLabel: true, paddingAngle: 3, innerRadius: '50%' }}
    />
  );
}

export const donuttStory = renderDonutStory();

donuttStory.story = {
  name: 'Donut'
};

function renderCustomColorStory() {
  return (
    <PieRechart
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      color={'lightblue'}
      chartConfig={{ dataLabel: true }}
    />
  );
}

export const customColortStory = renderCustomColorStory();

customColortStory.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <PieRechart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

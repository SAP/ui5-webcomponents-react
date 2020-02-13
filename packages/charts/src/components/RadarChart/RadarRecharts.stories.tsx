import React from 'react';
import { RadarRechart } from './RadarRechart';

const dataset = [
  {
    label: 'January',
    users: 100,
    sessions: 300
  },
  {
    label: 'February',
    users: 230,
    sessions: 330
  },
  {
    label: 'March',
    users: 240,
    sessions: 404
  },
  {
    label: 'April',
    users: 280,
    sessions: 80
  },
  {
    label: 'May',
    users: 100,
    sessions: 300
  },
  {
    label: 'June',
    users: 230,
    sessions: 330
  },
  {
    label: 'July',
    users: 200,
    sessions: 470
  },
  {
    label: 'August',
    users: 220,
    sessions: 180
  },
  {
    label: 'September',
    users: 200,
    sessions: 360
  },
  {
    label: 'October',
    users: 250,
    sessions: 500
  },
  {
    label: 'November',
    users: 240,
    sessions: 404
  },
  {
    label: 'December',
    users: 280,
    sessions: 80
  }
];

const singleData = [
  {
    xValue: 'January',
    data: 100
  },
  {
    xValue: 'February',
    data: 300
  },
  {
    xValue: 'March',
    data: 530
  },
  {
    xValue: 'April',
    data: 200
  }
];

export default {
  title: 'Rechart - RadarRechart',
  component: RadarRechart
};

const clickHandler = (data) => {
  console.log(data);
};

function renderStory() {
  return (
    <RadarRechart
      dataPointClickHandler={clickHandler}
      legendClickHandler={clickHandler}
      dataset={dataset}
      width={'50%'}
    />
  );
}

export const defaultStory = renderStory();

defaultStory.story = {
  name: 'Default'
};

function withCustomColorStory() {
  return (
    <RadarRechart
      dataPointClickHandler={clickHandler}
      legendClickHandler={clickHandler}
      color={'lightblue'}
      labelKey={'xValue'}
      dataset={singleData}
      width={'50%'}
    />
  );
}

export const customColorStory = withCustomColorStory();

customColorStory.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <RadarRechart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

function withPolygonStory() {
  return (
    <RadarRechart
      dataPointClickHandler={clickHandler}
      legendClickHandler={clickHandler}
      dataset={dataset}
      width={'50%'}
      chartConfig={{ polarGridType: 'polygon' }}
    />
  );
}

export const polygonStory = withPolygonStory();

polygonStory.story = {
  name: 'Radar as polygon'
};

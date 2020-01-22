import React from 'react';
import { LineRechart } from './RechartLine';
import {boolean} from "@storybook/addon-knobs";

const dataset = [
  {
    xValue: 'January',
    users: 100,
    sessions: 300,
    volume: 756
  },
  {
    xValue: 'February',
    users: 230,
    sessions: 330,
    volume: 880
  },
  {
    xValue: 'March',
    users: 240,
    sessions: 404,
    volume: 700
  },
  {
    xValue: 'April',
    users: 280,
    sessions: 80,
    volume: 604
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
  title: 'Rechart',
  component: LineRechart
};

function renderStory() {
  return (
    <LineRechart
      labelKey={'xValue'}
      dataset={dataset}
      width={'95%'}
      height={'400px'}
      noLegend={false}
      loading={boolean('loading', false)}
    />
  );
}

const renderStoryWithCategory = () => {
  return (
    <LineRechart
      labelKey={'xValue'}
      dataset={dataset}
      width={'95%'}
      height={'400px'}
      noLegend={false}
      loading={boolean('loading', false)}
      yAxisType={'category'}
    />
  );
}

export const withCategoryYAxis = renderStoryWithCategory()

withCategoryYAxis.story = {
  name: 'With Category Y-Axis'
}

const renderStoryWithCustomColor = () => (
  <LineRechart
    labelKey={'xValue'}
    dataset={singleData}
    color={'red'}
    width={'95%'}
    height={'400px'}
  />
);

export const withCustomColor = renderStoryWithCustomColor();

withCustomColor.story = {
  name: 'With Custom Color'
};

export const defaultStory = renderStory();

defaultStory.story = {
  name: 'Default'
};

export const loadingPlaceholder = () => (
  <LineRechart
    labelKey={'xValue'}
    color={'red'}
    width={'95%'}
    height={'400px'}
  />
);

loadingPlaceholder.story = {
  name: 'Loading Placeholder'
};

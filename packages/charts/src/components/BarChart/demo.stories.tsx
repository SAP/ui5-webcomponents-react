import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { BarChart } from '@ui5/webcomponents-react-charts/lib/BarChart';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import React, { useState } from 'react';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = [
  {
    label: 'Upside',
    data: [65, 59, 80, 93, 56, 55, 5],
    anyOtherDataILike: 1337
  },

  {
    label: 'Probable/Committed',
    data: [5, 9, 8, 8, 5, 5, 4],
    anyOtherDataILike: 1337
  }
];

const options = {
  scales: {
    yAxes: [
      {
        stacked: true
      }
    ],
    xAxes: [
      {
        stacked: true
      }
    ]
  }
};

export default {
  title: 'Charts / BarChart',
  component: BarChart
};

function Demo() {
  const [full, setFull] = useState(true);

  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <div
        style={{
          width: full ? '600px' : '300px',
          height: full ? '450px' : '225px'
        }}
      >
        <BarChart
          labels={labels}
          datasets={datasets}
          height="100%"
          width="100%"
          getElementAtEvent={action('getElementAtEvent')}
          loading={boolean('loading', false)}
          noLegend={boolean('noLegend', false)}
        />
      </div>
      <Button
        onClick={() => {
          setFull(!full);
        }}
      >
        Enable Full Width
      </Button>
    </div>
  );
}

export const resizeDemo = () => {
  return <Demo />;
};

resizeDemo.story = {
  name: 'resizeDemo'
};

export const defaultStory = () => (
  <BarChart
    labels={labels}
    datasets={datasets}
    getElementAtEvent={action('getElementAtEvent')}
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
  />
);

defaultStory.story = {
  name: 'Default'
};

export const withFormatter = () => (
  <BarChart
    labels={labels}
    datasets={datasets}
    valueAxisFormatter={(d) => `${d}%`}
    loading={boolean('loading', false)}
  />
);
withFormatter.story = {
  name: 'with Formatter'
};

export const stacked = () => (
  <BarChart
    labels={labels}
    datasets={datasets}
    valueAxisFormatter={(d) => `${d}%`}
    options={options}
    loading={boolean('loading', false)}
  />
);
stacked.story = {
  name: 'Stacked'
};

export const loadingPlaceholder = () => <BarChart labels={labels} loading={boolean('loading', true)} />;

loadingPlaceholder.story = {
  name: 'Loading Placeholder'
};

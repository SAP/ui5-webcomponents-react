import { boolean } from '@storybook/addon-knobs';
import { ColumnChart } from '@ui5/webcomponents-react-charts/lib/ColumnChart';
import React from 'react';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = [
  {
    label: 'Upside 2',
    data: [65, 59, 80, 81, 56, 55, 5]
  },

  {
    label: 'Probable/Committed',
    data: [5, 9, 8, 8, 5, 5, 1]
  }
];

const dataset2 = [
  {
    label: 'Upside',
    data: [65, 59, 80, 81, 56, 55, 40]
  },
  {
    label: 'Growth',
    type: 'line',
    fill: false,
    yAxisID: 'y-axis-2',
    lineTension: 0,
    datalabels: {
      formatter: (d) => `${d}%`
    },
    data: [10, 9, 11, 10, 12, 12, -3]
  }
];

const growthLineOptions = {
  scales: {
    yAxes: [
      { ticks: { beginAtZero: true } },
      {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        id: 'y-axis-2',
        display: false,
        gridLines: {
          display: false
        },
        ticks: {
          suggestedMin:
            dataset2
              .map((set) => set.data)
              .reduce((acc, val) => {
                val.forEach((innerVal) => {
                  if (innerVal > acc) {
                    acc = innerVal;
                  }
                });
                return acc;
              }, 0) * -2
        }
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
  title: 'Charts / ColumnChart',
  component: ColumnChart
};

export const defaultStory = () => (
  <ColumnChart width={700} height={500} labels={labels} datasets={datasets} loading={boolean('loading', false)} />
);

defaultStory.story = {
  name: 'Default'
};

export const stacked = () => (
  <ColumnChart
    labels={labels}
    datasets={datasets}
    options={{ scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] } }}
    loading={boolean('loading', false)}
  />
);

export const withFormatter = () => (
  <ColumnChart
    labels={labels}
    datasets={datasets}
    valueAxisFormatter={(d) => `${d}USD`}
    loading={boolean('loading', false)}
  />
);

withFormatter.story = {
  name: 'with Formatter'
};

export const withGrowthLine = () => (
  <ColumnChart labels={labels} datasets={dataset2} options={growthLineOptions} loading={boolean('loading', false)} />
);

withGrowthLine.story = {
  name: 'with growth line'
};

export const withGrowthLineFormatter = () => (
  <ColumnChart
    labels={labels}
    datasets={dataset2}
    valueAxisFormatter={(d) => `${d}USD`}
    options={growthLineOptions}
    loading={boolean('loading', false)}
  />
);

withGrowthLineFormatter.story = {
  name: 'with growth line + formatter'
};

export const loadingPlaceholder = () => <ColumnChart labels={labels} loading={boolean('loading', true)} />;

loadingPlaceholder.story = {
  name: 'Loading Placeholder'
};

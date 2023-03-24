import type { Meta, StoryObj } from '@storybook/react';
import { complexDataSet, simpleDataSet } from '../../resources/DemoProps.js';
import { RadarChart } from './RadarChart.js';

const meta = {
  title: 'RadarChart',
  component: RadarChart,
  args: {
    dimensions: [
      {
        accessor: 'name',
        formatter: (d) => `${d} 2019`
      }
    ],
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString()
      },
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        formatter: (val) => `${val} sessions`,
        hideDataLabel: true
      },
      {
        accessor: 'volume',
        label: 'Vol.'
      }
    ],
    dataset: complexDataSet
  },
  argTypes: {
    dataset: {
      control: { disable: true }
    }
  }
} satisfies Meta<typeof RadarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    dimensions: [{ accessor: 'name' }],
    measures: [{ accessor: 'users', color: 'red' }],
    dataset: simpleDataSet
  }
};

export const WithDataLabels: Story = {
  args: {
    dimensions: [{ accessor: 'name' }],
    measures: [
      {
        accessor: 'users'
      },
      {
        accessor: 'sessions'
      },
      {
        accessor: 'volume'
      }
    ]
  }
};

export const Polygon: Story = {
  args: {
    dimensions: [{ accessor: 'name', formatter: (element) => element.slice(0, 3) }],
    measures: [
      {
        accessor: 'users',
        formatter: (element) => `${element / 10}`,
        label: 'number of users'
      },
      {
        accessor: 'sessions'
      },
      {
        accessor: 'volume'
      }
    ],
    chartConfig: { polarGridType: 'polygon' }
  }
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: []
  }
};

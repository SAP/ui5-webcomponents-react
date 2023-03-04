import type { Meta, StoryObj } from '@storybook/react';
import { scatterColorDataSet, scatterComplexDataSet } from '../../resources/DemoProps.js';
import { ScatterChart } from './ScatterChart.js';

const meta = {
  title: 'ScatterChart',
  component: ScatterChart,
  argTypes: {
    children: {
      control: { disable: true }
    }
  },
  args: {
    dataset: scatterComplexDataSet,
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        axis: 'x'
      },
      {
        accessor: 'sessions',
        label: 'Sessions',
        formatter: (val) => `${val}k`,
        axis: 'y'
      },
      {
        accessor: 'volume',
        axis: 'z'
      }
    ]
  }
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    dataset: scatterColorDataSet,
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        axis: 'x'
      },
      {
        accessor: 'sessions',
        label: 'Sessions',
        axis: 'y'
      },
      {
        accessor: 'volume',
        axis: 'z'
      }
    ]
  }
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: []
  }
};

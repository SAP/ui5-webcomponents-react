import type { Meta, StoryObj } from '@storybook/react';
import { complexBulletDataset } from '../../resources/DemoProps.js';
import { BulletChart } from './BulletChart.js';

const meta = {
  title: 'BulletChart',
  component: BulletChart,
  argTypes: {
    dataset: {
      control: { disable: true }
    },
    children: {
      control: { disable: true }
    }
  },
  args: {
    dataset: complexBulletDataset,
    layout: 'horizontal',
    dimensions: [
      {
        accessor: 'name',
        formatter: (d) => `${d} 2019`,
        interval: 0
      }
    ],
    measures: [
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        type: 'primary'
      },
      {
        accessor: 'users',
        label: 'Users',
        type: 'additional'
      },
      {
        accessor: 'volume',
        label: 'Volume',
        formatter: (val) => val.toLocaleString(),
        type: 'comparison'
      }
    ]
  }
} satisfies Meta<typeof BulletChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomSize: Story = {
  args: {
    layout: 'vertical',
    dimensions: [{ accessor: 'name', formatter: (element) => element.slice(0, 3) }],
    measures: [
      {
        accessor: 'users',
        formatter: (element) => `${element / 10}`,
        type: 'additional',
        label: 'Number of users',
        width: 10
      },
      {
        accessor: 'sessions',
        type: 'primary',
        width: 10,
        opacity: 0.5
      },
      {
        accessor: 'volume',
        type: 'comparison',
        width: 10
      }
    ]
  }
};

export const WithHighlightedMeasures: Story = {
  args: {
    dimensions: [
      {
        accessor: 'name',
        formatter: (d) => `${d} 2019`,
        interval: 0
      }
    ],
    measures: [
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        type: 'primary'
      },
      {
        accessor: 'users',
        label: 'Users',
        type: 'additional',
        highlightColor: (value) => {
          if (value > 100) {
            return 'red';
          }
        }
      },
      {
        accessor: 'volume',
        label: 'Volume',
        formatter: (val) => val.toLocaleString(),
        type: 'comparison'
      }
    ]
  }
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: []
  }
};

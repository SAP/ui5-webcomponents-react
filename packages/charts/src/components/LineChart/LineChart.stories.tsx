import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { bigDataSet, complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps.js';
import { LineChart } from './LineChart.js';

const meta = {
  title: 'LineChart',
  component: LineChart,
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
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
        lineConfig: { type: 'linear' }
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
} satisfies Meta<typeof LineChart>;

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

export const WithSecondaryDimension: Story = {
  args: {
    dimensions: [{ accessor: 'name' }, { accessor: 'dimension' }],
    measures: [{ accessor: 'users', color: 'red' }],
    dataset: secondaryDimensionDataSet
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

export const WithFormatter: Story = {
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
    ]
  }
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: []
  }
};

export const WithReferenceLine: Story = {
  args: {
    dimensions: [{ accessor: 'name' }],
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    },
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
    ],
    dataset: bigDataSet
  }
};

export const WithLinearGradient: Story = {
  render: (args) => (
    <LineChart {...args}>
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  ),
  args: {
    dataset: bigDataSet,
    dimensions: [{ accessor: 'name' }],
    measures: [
      {
        accessor: 'users',
        width: 2,
        color: 'url(#colorUsers)'
      }
    ]
  }
};

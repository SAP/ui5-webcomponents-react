import type { Meta, StoryObj } from '@storybook/react';
import { complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps.js';
import { ColumnChart } from './ColumnChart.js';

const meta = {
  title: 'ColumnChart',
  component: ColumnChart,
  argTypes: {
    dataset: {
      control: { disable: true }
    },
    children: {
      control: { disable: true }
    }
  },
  args: {
    dataset: complexDataSet,
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
    ]
  }
} satisfies Meta<typeof ColumnChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
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

export const WithStacks: Story = {
  args: {
    measures: [
      {
        accessor: 'users',
        stackId: 'A'
      },
      {
        accessor: 'sessions',
        stackId: 'A'
      },
      {
        accessor: 'volume'
      }
    ],
    dataset: complexDataSet
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
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
};

export const WithHighlightedMeasure: Story = {
  args: {
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
        label: 'Vol.',
        highlightColor: (value) => {
          if (value > 750) {
            return 'red';
          }
        }
      }
    ]
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps.js';
import { BarChart } from './BarChart.js';

const meta = {
  title: 'BarChart',
  component: BarChart,
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
        accessor: 'name'
      }
    ],
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
        opacity: 0.6
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
} satisfies Meta<typeof BarChart>;

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

export const WithDataLabels: Story = {
  args: {
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
    ],
    chartConfig: {
      zoomingTool: true
    }
  }
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: []
  }
};

export const WithReferenceLine: Story = {
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
        stackId: 'A'
      },
      {
        accessor: 'sessions',
        stackId: 'A'
      },
      {
        accessor: 'volume',
        highlightColor: (value, measure, data) => {
          if (data.name === 'February') {
            return 'red';
          }
        }
      }
    ]
  }
};

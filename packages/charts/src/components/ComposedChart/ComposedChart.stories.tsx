import type { Meta, StoryObj } from '@storybook/react';
import { bigDataSet, complexDataSet, simpleDataSet } from '../../resources/DemoProps.js';
import { ComposedChart } from './index.js';

const meta = {
  title: 'ComposedChart',
  component: ComposedChart,
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
        formatter: (d) => `${d} 2019`,
        interval: 0
      }
    ],
    measures: [
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        type: 'bar'
      },
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
        type: 'area'
      },
      {
        accessor: 'volume',
        label: 'Vol.',
        formatter: (val) => `${val} sessions`,
        type: 'line'
      }
    ]
  }
} satisfies Meta<typeof ComposedChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    dataset: simpleDataSet,
    dimensions: [{ accessor: 'name' }],
    measures: [{ accessor: 'users', color: 'red', type: 'bar' }]
  }
};

export const WithDataLabels: Story = {
  args: {
    measures: [
      {
        accessor: 'users',
        type: 'area'
      },
      {
        accessor: 'sessions',
        type: 'bar',
        opacity: 0.6
      },
      {
        accessor: 'volume',
        type: 'line'
      }
    ],
    chartConfig: {
      zoomingTool: true,
      secondYAxis: {
        dataKey: 'sessions'
      }
    }
  }
};

export const WithFormatter: Story = {
  args: {
    dimensions: [{ accessor: 'name', formatter: (element) => element.slice(0, 3) }],
    measures: [
      {
        accessor: 'users',
        formatter: (element) => `${element / 10}`,
        type: 'bar',
        label: 'number of users',
        stackId: 'A',
        width: 30
      },
      {
        accessor: 'sessions',
        type: 'bar',
        stackId: 'A',
        width: 30
      },
      {
        accessor: 'volume',
        type: 'line',
        width: 2
      }
    ]
  }
};

export const WithReferenceLine: Story = {
  args: {
    chartConfig: {
      zoomingTool: true,
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    },
    dataset: bigDataSet,
    measures: [
      {
        accessor: 'users',
        type: 'bar',
        width: 2
      },
      {
        accessor: 'sessions',
        type: 'line'
      },
      {
        accessor: 'volume',
        type: 'line'
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
        type: 'bar',
        highlightColor: (value) => {
          if (value > 400) {
            return 'red';
          }
        }
      },
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
        type: 'area'
      },
      {
        accessor: 'volume',
        label: 'Vol.',
        formatter: (val) => `${val} sessions`,
        type: 'line'
      }
    ]
  }
};

export const WithFormattedSecondaryAxis: Story = {
  args: {
    measures: [
      {
        accessor: 'volume',
        type: 'line'
      },
      {
        accessor: 'sessions',
        type: 'bar',
        opacity: 0.6,
        formatter: (e) => '$' + e
      }
    ],
    chartConfig: {
      zoomingTool: true,
      secondYAxis: {
        dataKey: 'sessions'
      }
    }
  }
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: []
  }
};

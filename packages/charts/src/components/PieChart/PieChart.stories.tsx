import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart.js';
import { simpleDataSet, simpleDataSetWithSmallValues } from '../../resources/DemoProps.js';

const meta = {
  title: 'PieChart',
  component: PieChart,
  args: {
    dimension: {
      accessor: 'name'
    },
    measure: {
      accessor: 'users'
    },
    dataset: simpleDataSet
  },
  argTypes: {
    dataset: {
      control: { disable: true }
    }
  }
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: []
  }
};

export const WithFormatter: Story = {
  args: {
    measure: {
      accessor: 'users',
      formatter: (d) => (d > 200 ? 'over 200' : 'lower')
    },
    chartConfig: {
      activeSegment: 1,
      showActiveSegmentDataLabel: true
    }
  }
};

export const HideLabels: Story = {
  args: {
    measure: {
      accessor: 'users',
      hideDataLabel: (chartConfig) => {
        if (chartConfig.percent < 0.01) {
          return true;
        }
      }
    },
    dataset: simpleDataSetWithSmallValues
  }
};

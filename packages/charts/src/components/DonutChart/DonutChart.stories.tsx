import type { Meta, StoryObj } from '@storybook/react';
import { simpleDataSet, simpleDataSetWithSmallValues } from '../../resources/DemoProps.js';
import { DonutChart } from './DonutChart.js';

const meta = {
  title: 'DonutChart',
  component: DonutChart,
  argTypes: {
    dataset: {
      control: { disable: true }
    },
    children: {
      control: { disable: true }
    }
  },
  args: {
    dataset: simpleDataSet,
    dimension: {
      accessor: 'name'
    },
    measure: {
      accessor: 'users'
    }
  }
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)', 'black', 'yellow', 'pink']
    }
  }
};

export const WithPaddedAngle: Story = {
  args: {
    chartConfig: {
      paddingAngle: 5
    }
  }
};

export const WithCustomRadius: Story = {
  args: {
    chartConfig: {
      innerRadius: '20%',
      outerRadius: '90%'
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
    dimension: {
      accessor: 'name',
      formatter: (el) => el.slice(0, 3)
    },
    measure: {
      accessor: 'users',
      formatter: (el) => `${el / 10}`
    }
  }
};

export const WithHighlightedActiveSegment: Story = {
  args: {
    chartConfig: {
      activeSegment: 9,
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

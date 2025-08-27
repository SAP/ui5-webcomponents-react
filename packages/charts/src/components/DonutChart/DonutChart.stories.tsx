import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { legendConfig, simpleDataSet, simpleDataSetWithSmallValues, tooltipConfig } from '../../resources/DemoProps.js';
import { DonutChart } from './index.js';

const meta = {
  title: 'DonutChart',
  component: DonutChart,
  argTypes: {
    dataset: {
      control: { disable: true },
    },
    children: {
      control: { disable: true },
    },
  },
  args: {
    dataset: simpleDataSet,
    dimension: {
      accessor: 'name',
    },
    measure: {
      accessor: 'users',
    },
  },
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)', 'black', 'yellow', 'pink'],
    },
  },
};

export const WithPaddedAngle: Story = {
  args: {
    chartConfig: {
      paddingAngle: 5,
    },
  },
};

export const WithCustomRadius: Story = {
  args: {
    chartConfig: {
      innerRadius: '20%',
      outerRadius: '90%',
    },
  },
};
export const LoadingPlaceholder: Story = {
  args: {
    dataset: [],
  },
};

export const WithFormatter: Story = {
  args: {
    dimension: {
      accessor: 'name',
      formatter: (el) => el.slice(0, 3),
    },
    measure: {
      accessor: 'users',
      formatter: (el) => `${el / 10}`,
    },
  },
};

export const HideLabels: Story = {
  args: {
    measure: {
      accessor: 'users',
      hideDataLabel: (chartConfig) => {
        if (chartConfig.percent < 0.01) {
          return true;
        }
      },
    },
    dataset: simpleDataSetWithSmallValues,
  },
};

export const WithCustomTooltipConfig: Story = {
  args: tooltipConfig,
};

export const WithCustomLegendConfig: Story = {
  args: legendConfig,
};

export const WithActiveShape: Story = {
  args: {
    chartConfig: {
      activeSegment: 1,
      showActiveSegmentDataLabel: true,
    },
  },
  render(args) {
    const [activeSegment, setActiveSegment] = useState(args.chartConfig.activeSegment);
    const handleChartClick = (e) => {
      const { dataIndex } = e.detail;
      if (dataIndex != null) {
        setActiveSegment(dataIndex);
      }
    };

    useEffect(() => {
      setActiveSegment(args.chartConfig.activeSegment);
    }, [args.chartConfig.activeSegment]);

    return <DonutChart {...args} chartConfig={{ ...args.chartConfig, activeSegment }} onClick={handleChartClick} />;
  },
};

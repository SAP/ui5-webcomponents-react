import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { legendConfig, simpleDataSet, simpleDataSetWithSmallValues, tooltipConfig } from '../../resources/DemoProps.js';
import { PieChart } from './index.js';

const meta = {
  title: 'PieChart',
  component: PieChart,
  args: {
    dimension: {
      accessor: 'name',
    },
    measure: {
      accessor: 'users',
    },
    dataset: simpleDataSet,
  },
  argTypes: {
    dataset: {
      control: { disable: true },
    },
  },
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)'],
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
    measure: {
      accessor: 'users',
      formatter: (d) => (d > 200 ? 'over 200' : 'lower'),
    },
    chartConfig: {
      activeSegment: 1,
      showActiveSegmentDataLabel: true,
    },
  },
  render(args) {
    const [activeSegment, setActiveSegment] = useState(1);
    const handleChartClick = (e) => {
      const { dataIndex } = e.detail;
      if (dataIndex != null) {
        setActiveSegment(dataIndex);
      }
    };

    return <PieChart {...args} chartConfig={{ ...args.chartConfig, activeSegment }} onClick={handleChartClick} />;
  },
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

    return <PieChart {...args} chartConfig={{ ...args.chartConfig, activeSegment }} onClick={handleChartClick} />;
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

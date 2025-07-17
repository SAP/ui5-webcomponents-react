import type { Meta, StoryObj } from '@storybook/react';
import { legendConfig, radarChartDataset, simpleDataSet, tooltipConfig } from '../../resources/DemoProps.js';
import { RadarChart } from './RadarChart.js';

const meta = {
  title: 'RadarChart',
  component: RadarChart,
  args: {
    dimensions: [
      {
        accessor: 'name',
      },
    ],
    measures: [
      {
        accessor: 'alpha',
        label: 'Alpha Series',
      },
      {
        accessor: 'beta',
        label: 'Beta Series',
      },
      {
        accessor: 'gamma',
        label: 'Gamma Series',
      },
    ],
    dataset: radarChartDataset,
  },
  argTypes: {
    dataset: {
      control: { disable: true },
    },
  },
} satisfies Meta<typeof RadarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    dimensions: [{ accessor: 'name' }],
    measures: [{ accessor: 'users', color: 'red' }],
    dataset: simpleDataSet,
  },
};

export const WithoutDataLabels: Story = {
  args: {
    measures: [
      {
        accessor: 'alpha',
        label: 'Alpha Series',
        hideDataLabel: true,
      },
      {
        accessor: 'beta',
        label: 'Beta Series',
        hideDataLabel: true,
      },
      {
        accessor: 'gamma',
        label: 'Gamma Series',
        hideDataLabel: true,
      },
    ],
  },
};

export const Polygon: Story = {
  args: {
    chartConfig: { polarGridType: 'polygon' },
  },
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: [],
  },
};

export const WithCustomTooltipConfig: Story = {
  args: tooltipConfig,
};

export const WithCustomLegendConfig: Story = {
  args: legendConfig,
};

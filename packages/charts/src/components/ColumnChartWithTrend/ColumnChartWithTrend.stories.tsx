import type { Meta, StoryObj } from '@storybook/react';
import { complexDataSet } from '../../resources/DemoProps.js';
import { ColumnChartWithTrend } from './ColumnChartWithTrend.js';

const meta = {
  title: 'ColumnChartWithTrend',
  component: ColumnChartWithTrend,
  args: {
    style: { height: '400px' },
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
        formatter: (val) => val.toLocaleString(),
        type: 'line'
      },
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        type: 'bar'
      }
    ]
  }
} satisfies Meta<typeof ColumnChartWithTrend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: []
  }
};

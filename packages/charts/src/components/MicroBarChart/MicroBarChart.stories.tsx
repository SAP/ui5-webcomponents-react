import type { Meta, StoryObj } from '@storybook/react';
import { MicroBarChart } from './MicroBarChart.js';

const meta = {
  title: 'MicroBarChart',
  component: MicroBarChart,
  args: {
    dimension: {
      accessor: 'name'
    },
    measure: { accessor: 'data' },
    dataset: [
      {
        name: 'January',
        data: 100
      },
      {
        name: 'February',
        data: 300
      },
      {
        name: 'March',
        data: 530
      },
      {
        name: 'April',
        data: 200
      }
    ]
  },
  argTypes: {
    dataset: { control: { disable: true } }
  }
} satisfies Meta<typeof MicroBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFormatter: Story = {
  args: {
    measure: {
      accessor: 'data',
      colors: ['#f0ab00', 'var(--sapHighlightColor)'],
      formatter: (d) => (d > 200 ? 'over 200' : 'lower'),
      width: 16
    }
  }
};

export const LoadingPlaceholder: Story = {
  args: {
    dataset: []
  }
};

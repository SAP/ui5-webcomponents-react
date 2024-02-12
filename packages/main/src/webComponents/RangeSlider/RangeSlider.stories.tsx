import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './index.js';

const meta = {
  title: 'Inputs / RangeSlider',
  component: RangeSlider,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {},
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

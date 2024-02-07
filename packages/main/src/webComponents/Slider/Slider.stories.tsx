import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './index.js';

const meta = {
  title: 'Inputs / Slider',
  component: Slider,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {},
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

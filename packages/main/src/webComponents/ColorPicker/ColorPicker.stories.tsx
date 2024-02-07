import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './index.js';

const meta = {
  title: 'Inputs / ColorPicker',
  component: ColorPicker,
  argTypes: {},
  args: {},
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

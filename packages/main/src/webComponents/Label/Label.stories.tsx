import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './index.js';

const meta = {
  title: 'Data Display / Label',
  component: Label,
  argTypes: {
    children: { control: 'text' }
  },
  args: {
    children: 'Label Text'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

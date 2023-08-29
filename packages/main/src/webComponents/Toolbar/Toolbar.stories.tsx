import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarAlign } from '../../enums/index.js';
import { Toolbar } from './index.js';

const meta = {
  title: 'Components / Toolbar',
  component: Toolbar,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    alignContent: ToolbarAlign
  }
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

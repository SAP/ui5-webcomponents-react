import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarAlign } from '../../enums/index.js';
import { ToolbarV2 } from './index.js';

const meta = {
  title: 'Components / ToolbarV2',
  component: ToolbarV2,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    alignContent: ToolbarAlign
  }
} satisfies Meta<typeof ToolbarV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

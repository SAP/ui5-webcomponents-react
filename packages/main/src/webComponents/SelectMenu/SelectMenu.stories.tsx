import type { Meta, StoryObj } from '@storybook/react';
import { SelectMenu } from './index.js';

const meta = {
  title: 'Components / SelectMenu',
  component: SelectMenu,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {}
} satisfies Meta<typeof SelectMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

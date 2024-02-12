import type { Meta, StoryObj } from '@storybook/react';
import { MessageViewButton } from './index.js';

const meta = {
  title: 'Inputs / MessageViewButton',
  component: MessageViewButton,
  argTypes: {},
  args: {}
} satisfies Meta<typeof MessageViewButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

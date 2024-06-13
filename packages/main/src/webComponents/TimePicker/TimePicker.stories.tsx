import type { Meta, StoryObj } from '@storybook/react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { TimePicker } from './index.js';

const meta = {
  title: 'Inputs / TimePicker',
  component: TimePicker,
  argTypes: {
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    valueState: ValueState.None
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

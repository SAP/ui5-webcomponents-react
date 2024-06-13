import type { Meta, StoryObj } from '@storybook/react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { StepInput } from './index.js';

const meta = {
  title: 'Inputs / StepInput',
  component: StepInput,
  argTypes: {
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    valueState: ValueState.None
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof StepInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

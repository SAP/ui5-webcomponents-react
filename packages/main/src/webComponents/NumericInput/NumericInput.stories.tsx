import type { Meta, StoryObj } from '@storybook/react-vite';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { NumericInput } from './index.js';

const meta = {
  title: 'Inputs / NumericInput',
  component: NumericInput,
  argTypes: {
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    valueState: ValueState.None,
  },
  tags: ['package:@ui5/webcomponents', 'experimental'],
} satisfies Meta<typeof NumericInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

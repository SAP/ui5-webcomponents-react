import type { Meta, StoryObj } from '@storybook/react';
import { ValueState } from '../../enums/index.js';
import { ProgressIndicator } from './index.js';

const meta = {
  title: 'Data Display / ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {},
  args: {
    valueState: ValueState.None,
    value: 50
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof ProgressIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

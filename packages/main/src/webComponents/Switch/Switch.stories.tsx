import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index.js';

const meta = {
  title: 'Inputs / Switch',
  component: Switch,
  argTypes: {},
  args: {},
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

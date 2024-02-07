import type { Meta, StoryObj } from '@storybook/react';
import { RatingIndicator } from './index.js';

const meta = {
  title: 'Inputs / RatingIndicator',
  component: RatingIndicator,
  argTypes: {},
  args: {},
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof RatingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

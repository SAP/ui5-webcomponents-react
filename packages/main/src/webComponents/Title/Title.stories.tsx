import type { Meta, StoryObj } from '@storybook/react';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import { Title } from './index.js';

const meta = {
  title: 'Data Display / Title',
  component: Title,
  argTypes: {
    children: { control: 'text' }
  },
  args: {
    level: TitleLevel.H2,
    children: 'Title Text'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import AvatarColorScheme from '@ui5/webcomponents/dist/types/AvatarColorScheme.js';
import AvatarShape from '@ui5/webcomponents/dist/types/AvatarShape.js';
import AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import { Avatar } from './index';

const meta = {
  title: 'Data Display / Avatar',
  component: Avatar,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    colorScheme: AvatarColorScheme.Accent6,
    icon: 'employee',
    shape: AvatarShape.Circle,
    size: AvatarSize.S
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroupType } from '../../enums/AvatarGroupType';
import { Avatar } from '../Avatar/index.js';
import { Avatar1, Avatar2 } from './CodeGen.js';
import { AvatarGroup } from './index.js';

const meta = {
  title: 'Data Display / AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    children: { control: { disable: true } },
    overflowButton: { control: { disable: true } }
  },
  args: {
    type: AvatarGroupType.Group
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <AvatarGroup {...args}>
        <Avatar icon="employee" />
        <Avatar initials="JD" />
        <Avatar>{Avatar1}</Avatar>
        <Avatar>{Avatar2}</Avatar>
      </AvatarGroup>
    );
  }
};

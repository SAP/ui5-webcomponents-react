import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroupType } from '../../enums/AvatarGroupType';
import { Avatar } from '../Avatar/index.js';
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
        <Avatar>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_5.png" alt="Avatar1" />
        </Avatar>
        <Avatar>
          <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/man_avatar_3.png" alt="Avatar2" />
        </Avatar>
      </AvatarGroup>
    );
  }
};

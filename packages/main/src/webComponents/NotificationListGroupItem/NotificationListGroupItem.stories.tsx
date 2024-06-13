import type { Meta, StoryObj } from '@storybook/react';
import AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import NotificationListItemImportance from '@ui5/webcomponents-fiori/dist/types/NotificationListItemImportance';
import { Avatar } from '../Avatar';
import { Menu } from '../Menu/index.js';
import { MenuItem } from '../MenuItem/index.js';
import { NotificationListItem } from '../NotificationListItem';
import { NotificationListGroupItem } from './index.js';

const meta = {
  title: 'Data Display / NotificationListGroupItem',
  component: NotificationListGroupItem,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    titleText: 'Orders'
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof NotificationListGroupItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <NotificationListGroupItem {...args}>
        <NotificationListItem
          importance={NotificationListItemImportance.Standard}
          titleText={
            'New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.'
          }
          avatar={
            <Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>
          }
          footnotes={
            <>
              <span>Monique Legrand</span>
              <span>2 Days</span>
            </>
          }
          menu={
            <Menu>
              <MenuItem icon="accept" text="Accept" />
              <MenuItem icon="message-error" text="Reject" />
            </Menu>
          }
        >
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
        <NotificationListItem
          showClose
          titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
          importance={NotificationListItemImportance.Important}
          avatar={
            <Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>
          }
          footnotes={
            <>
              <span>Alain Devalier</span>
              <span>2 Days</span>
            </>
          }
          menu={
            <Menu>
              <MenuItem icon="accept" text="Accept" />
              <MenuItem icon="message-error" text="Reject" />
            </Menu>
          }
        >
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
      </NotificationListGroupItem>
    );
  }
};

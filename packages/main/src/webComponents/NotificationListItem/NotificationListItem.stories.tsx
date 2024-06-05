import type { Meta, StoryObj } from '@storybook/react';
import AvatarColorScheme from '@ui5/webcomponents/dist/types/AvatarColorScheme.js';
import AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import NotificationListItemImportance from '@ui5/webcomponents-fiori/dist/types/NotificationListItemImportance';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Avatar } from '../Avatar';
import { Label } from '../Label';
import { List } from '../List';
import { Menu } from '../Menu/index.js';
import { MenuItem } from '../MenuItem/index.js';
import { NotificationListItem } from './index.js';

const meta = {
  title: 'Data Display / NotificationListItem',
  component: NotificationListItem,
  argTypes: {
    avatar: { control: { disable: true } },
    children: { control: 'text' },
    footnotes: { control: { disable: true } },
    menu: { control: { disable: true } }
  },
  args: {
    titleText:
      'New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.',
    importance: NotificationListItemImportance.Standard,
    children:
      'And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.',
    style: { width: '600px' }
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof NotificationListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: (
      <Avatar size={AvatarSize.XS}>
        <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
      </Avatar>
    ),
    footnotes: (
      <>
        <Label>Monique Legrand</Label>
        <Label>2 Days</Label>
      </>
    )
  },
  render: (args) => {
    return (
      <List>
        <NotificationListItem {...args} />
      </List>
    );
  }
};

export const MultipleNotifications: Story = {
  render: () => {
    return (
      <List>
        <NotificationListItem
          showClose
          avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} />}
          footnotes={<Label>3 Days</Label>}
          titleText="New order (#2526) with multiple NotificationAction buttons and close button"
          menu={
            <Menu>
              <MenuItem text="Accept All Requested Information" />
              <MenuItem text="Reject All Requested Information" />
            </Menu>
          }
        >
          Short description
        </NotificationListItem>
        <NotificationListItem
          avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} colorScheme={AvatarColorScheme.Accent1} />}
          footnotes={<Label>3 Days</Label>}
          titleText="New order (#2527) with single NotificationAction and close button"
          showClose
          menu={
            <Menu>
              <MenuItem text="Accept All Requested Information" />
            </Menu>
          }
        >
          Short description
        </NotificationListItem>
        <NotificationListItem
          wrappingType={WrappingType.Normal}
          titleText="New high priority order (#2528) without close button"
          importance={NotificationListItemImportance.Important}
          avatar={
            <Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>
          }
          footnotes={
            <>
              <Label>John Smith</Label>
              <Label>1 hour</Label>
            </>
          }
        >
          And with a very long description that will not be ellipsed:
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra,
          tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum
          lectus turpis at nunc. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra,
          tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum
          lectus turpis at nunc.
        </NotificationListItem>
      </List>
    );
  }
};

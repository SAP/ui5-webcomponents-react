import type { Meta, StoryObj } from '@storybook/react-vite';
import AvatarColorScheme from '@ui5/webcomponents/dist/types/AvatarColorScheme.js';
import AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import NotificationListItemImportance from '@ui5/webcomponents-fiori/dist/types/NotificationListItemImportance.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Avatar } from '../Avatar/index.js';
import { Label } from '../Label/index.js';
import { Menu } from '../Menu/index.js';
import { MenuItem } from '../MenuItem/index.js';
import { NotificationListGroupItem } from '../NotificationListGroupItem/index.js';
import { NotificationListItem } from '../NotificationListItem/index.js';
import { NotificationList } from './index.js';

const meta = {
  title: 'Data Display / NotificationList',
  component: NotificationList,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {},
  tags: ['package:@ui5/webcomponents-fiori'],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <NotificationList {...args}>
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
      </NotificationList>
    );
  },
};

export const Grouped: Story = {
  render: (args) => {
    return (
      <NotificationList {...args}>
        <NotificationListGroupItem titleText="Orders">
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
      </NotificationList>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { MessageBoxType } from '../../enums/index.js';
import { Bar, Button, MenuItem } from '../../webComponents/index.js';
import { Modals } from './index.js';

const meta = {
  title: 'User Feedback / Modals'
} satisfies Meta<typeof Modals>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Dialog: Story = {
  render: () => {
    const showDialog = Modals.useShowDialog();
    return (
      <Button
        onClick={() => {
          const { close } = showDialog({
            headerText: 'Dialog Title',
            children: "I'm a Dialog!",
            footer: <Bar endContent={<Button onClick={() => close()}>Close</Button>} />
          });
        }}
      >
        Show Dialog
      </Button>
    );
  }
};

export const Popover = {
  render: () => {
    const showPopover = Modals.useShowPopover();
    return (
      <Button
        id="modals-show-popover"
        onClick={() => {
          showPopover({
            opener: 'modals-show-popover',
            headerText: 'Popover Title',
            children: "I'm a Popover!"
          });
        }}
      >
        Show Popover
      </Button>
    );
  }
};

export const ResponsivePopover = {
  render: () => {
    const showResponsivePopover = Modals.useShowResponsivePopover();
    return (
      <Button
        id="modals-show-responsive-popover"
        onClick={() => {
          showResponsivePopover({
            opener: 'modals-show-responsive-popover',
            headerText: 'Responsive Popover Title',
            children: "I'm a Responsive Popover!"
          });
        }}
      >
        Show ResponsivePopover
      </Button>
    );
  }
};

export const Menu = {
  render: () => {
    const showMenu = Modals.useShowMenu();
    return (
      <Button
        id="modals-show-menu"
        onClick={() => {
          showMenu({
            opener: 'modals-show-menu',
            headerText: 'Menu Title',
            children: (
              <>
                <MenuItem text="New File" icon="add-document" />
                <MenuItem text="New Folder" icon="add-folder" disabled />
              </>
            )
          });
        }}
      >
        Show Menu
      </Button>
    );
  }
};

export const MessageBox = {
  render: () => {
    const showMessageBox = Modals.useShowMessageBox();
    return (
      <Button
        onClick={() => {
          showMessageBox({
            type: MessageBoxType.Confirm,
            children: 'Can you see this MessageBox?'
          });
        }}
      >
        Show MessageBox
      </Button>
    );
  }
};

export const Toast = {
  render: () => {
    const showToast = Modals.useShowToast();
    return (
      <Button
        onClick={() => {
          showToast({
            children: "I'm a Message Toast!"
          });
        }}
      >
        Show Toast
      </Button>
    );
  }
};

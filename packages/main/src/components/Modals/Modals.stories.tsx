import type { Meta, StoryObj } from '@storybook/react';
import { MessageBoxType } from '../../enums/index.js';
import { Bar, Button, MenuItem } from '../../webComponents/index.js';
import { Modals } from './index.js';

const meta = {
  title: 'User Feedback / Modals',
  component: Modals
} satisfies Meta<typeof Modals>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Dialog: Story = {
  render: () => {
    return (
      <>
        <Modals />
        <Button
          onClick={() => {
            const { close } = Modals.showDialog({
              headerText: 'Dialog Title',
              children: "I'm a Dialog!",
              footer: <Bar endContent={<Button onClick={() => close()}>Close</Button>} />
            });
          }}
        >
          Show Dialog
        </Button>
      </>
    );
  }
};

export const Popover = {
  render: () => {
    return (
      <>
        <Modals />
        <Button
          id="modals-show-popover"
          onClick={() => {
            Modals.showPopover({
              opener: 'modals-show-popover',
              headerText: 'Popover Title',
              children: "I'm a Popover!"
            });
          }}
        >
          Show Popover
        </Button>
      </>
    );
  }
};

export const ResponsivePopover = {
  render: () => {
    return (
      <>
        <Modals />
        <Button
          id="modals-show-responsive-popover"
          onClick={() => {
            Modals.showResponsivePopover({
              opener: 'modals-show-responsive-popover',
              headerText: 'Responsive Popover Title',
              children: "I'm a Responsive Popover!"
            });
          }}
        >
          Show ResponsivePopover
        </Button>
      </>
    );
  }
};

export const Menu = {
  render: () => {
    return (
      <>
        <Modals />
        <Button
          id="modals-show-menu"
          onClick={() => {
            Modals.showMenu({
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
      </>
    );
  }
};

export const MessageBox = {
  render: () => {
    return (
      <>
        <Modals />
        <Button
          onClick={() => {
            Modals.showMessageBox({
              type: MessageBoxType.Confirm,
              children: 'Can you see this MessageBox?'
            });
          }}
        >
          Show MessageBox
        </Button>
      </>
    );
  }
};

export const Toast = {
  render: () => {
    return (
      <>
        <Modals />
        <Button
          onClick={() => {
            Modals.showToast({
              children: "I'm a Message Toast!"
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  }
};

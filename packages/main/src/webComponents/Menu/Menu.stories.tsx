import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button/index.js';
import { MenuItem } from '../MenuItem/index.js';
import { MenuSeparator } from '../MenuSeparator/index.js';
import { Menu } from './index.js';

const meta = {
  title: 'Modals & Popovers / Menu',
  component: Menu,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    open: isChromatic
  },
  parameters: {
    chromatic: { delay: 1000 }
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          ref={btnRef}
          onClick={(e) => {
            setOpen((prev) => !prev);
          }}
        >
          Show Menu
        </Button>
        <Menu
          {...args}
          open={open}
          opener={btnRef.current}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuSeparator />
          <MenuItem text="Open" icon="open-folder" />
          <MenuItem text="Close" />
          <MenuSeparator />
          <MenuItem text="Preferences" icon="action-settings" />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>
    );
  }
};

export const WithSubMenu: Story = {
  name: 'with Submenu',
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          ref={btnRef}
          onClick={(e) => {
            setOpen((prev) => !prev);
          }}
        >
          Show Menu
        </Button>
        <Menu
          {...args}
          open={open}
          opener={btnRef.current}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuSeparator />
          <MenuItem text="Open" icon="open-folder">
            <MenuItem text="Open Locally" icon="open-folder">
              <MenuItem text="Open C" />
              <MenuItem text="Open D" />
              <MenuItem text="Open E" />
            </MenuItem>
            <MenuItem text="Open from Cloud" icon="cloud" />
          </MenuItem>
          <MenuItem text="Close" />
          <MenuSeparator />
          <MenuItem text="Preferences" icon="action-settings" />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>
    );
  }
};

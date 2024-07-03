import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button/index.js';
import { MenuItem } from '../MenuItem/index.js';
import { Menu } from './index.js';

const meta = {
  title: 'Modals & Popovers / Menu',
  component: Menu,
  argTypes: {
    children: { control: { disable: true } }
  },
  parameters: {
    chromatic: { delay: 1000 }
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// TODO: remove deprecated imperative method from mdx docs
export const Default: Story = {
  render(args) {
    const [open, setOpen] = useState(args.open);
    const ref = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic && ref.current && btnRef.current) {
        void customElements.whenDefined('ui5-menu').then(() => {
          ref.current.opener = btnRef.current;
          ref.current.open = true;
        });
      }
    }, []);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          ref={btnRef}
          onClick={(e) => {
            ref.current.opener = e.currentTarget;
            setOpen((prev) => !prev);
          }}
        >
          Show Menu
        </Button>
        <Menu
          {...args}
          open={open}
          ref={ref}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuItem text="Open" icon="open-folder" startsSection />
          <MenuItem text="Close" />
          <MenuItem text="Preferences" icon="action-settings" startsSection />
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
    const ref = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic && ref.current && btnRef.current) {
        void customElements.whenDefined('ui5-menu').then(() => {
          ref.current.opener = btnRef.current;
          ref.current.open = true;
        });
      }
    }, []);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          ref={btnRef}
          onClick={(e) => {
            ref.current.opener = e.currentTarget;
            setOpen((prev) => !prev);
          }}
        >
          Show Menu
        </Button>
        <Menu
          {...args}
          open={open}
          ref={ref}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuItem text="Open" icon="open-folder" startsSection>
            <MenuItem text="Open Locally" icon="open-folder" startsSection>
              <MenuItem text="Open C" />
              <MenuItem text="Open D" />
              <MenuItem text="Open E" />
            </MenuItem>
            <MenuItem text="Open from Cloud" icon="cloud" />
          </MenuItem>
          <MenuItem text="Close" />
          <MenuItem text="Preferences" icon="action-settings" startsSection />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>
    );
  }
};

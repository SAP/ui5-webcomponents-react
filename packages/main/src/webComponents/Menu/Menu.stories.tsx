import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef } from 'react';
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
  }
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const ref = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic) {
        ref.current.showAt(btnRef.current);
      }
    }, []);
    return (
      <>
        <Button
          ref={btnRef}
          onClick={(e) => {
            ref.current.showAt(e.target);
          }}
        >
          Show Menu
        </Button>
        <Menu {...args} ref={ref}>
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
    const ref = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic) {
        ref.current.showAt(btnRef.current);
      }
    }, []);
    return (
      <>
        <Button
          ref={btnRef}
          onClick={(e) => {
            ref.current.showAt(e.target);
          }}
        >
          Show Menu
        </Button>
        <Menu {...args} ref={ref}>
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

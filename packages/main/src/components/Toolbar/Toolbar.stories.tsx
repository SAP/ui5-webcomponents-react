import type { Meta, StoryObj } from '@storybook/react';
import downloadIcon from '@ui5/webcomponents-icons/dist/download.js';
import editIcon from '@ui5/webcomponents-icons/dist/edit.js';
import favoriteIcon from '@ui5/webcomponents-icons/dist/favorite.js';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import { useState } from 'react';
import { ButtonDesign, ToolbarDesign, ToolbarStyle } from '../../enums/index.js';
import { Button } from '../../webComponents/Button/index.js';
import { DatePicker } from '../../webComponents/DatePicker/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { Input } from '../../webComponents/Input/index.js';
import { Menu } from '../../webComponents/Menu/index.js';
import { MenuItem } from '../../webComponents/MenuItem/index.js';
import { Select } from '../../webComponents/Select/index.js';
import { Slider } from '../../webComponents/Slider/index.js';
import { Switch } from '../../webComponents/Switch/index.js';
import { ToggleButton } from '../../webComponents/ToggleButton/index.js';
import { OverflowToolbarButton } from '../OverflowToolbarButton';
import { OverflowToolbarToggleButton } from '../OverflowToolbarToggleButton';
import { Text } from '../Text/index.js';
import { ToolbarSeparator } from '../ToolbarSeparator/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import { Toolbar } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Toolbar',
  component: Toolbar,
  argTypes: {
    children: { control: { disable: true } },
    as: { control: { disable: true } },
    overflowButton: { control: { disable: true } }
  },
  args: {
    design: ToolbarDesign.Auto,
    toolbarStyle: ToolbarStyle.Standard
  },
  parameters: {
    chromatic: { delay: 1000 }
  }
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <Toolbar {...args}>
        <Text>Toolbar</Text>
        <Button design={ButtonDesign.Transparent}>Button One</Button>
        <Button design={ButtonDesign.Transparent}>Button Two</Button>
        <Input />
        <DatePicker />
        <Switch />
      </Toolbar>
    );
  }
};

export const RightAlignedItems: Story = {
  name: 'right aligned items',
  render(args) {
    return (
      <Toolbar {...args}>
        <ToolbarSpacer />
        <Button design={ButtonDesign.Transparent}>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>
    );
  }
};

export const EvenlyAlignedItems: Story = {
  name: 'evenly aligned items',
  render(args) {
    return (
      <Toolbar {...args}>
        <Text>Left</Text>
        <ToolbarSpacer />
        <Button design={ButtonDesign.Transparent}>Center</Button>
        <ToolbarSpacer />
        <Text>Right</Text>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>
    );
  }
};

export const WithSeparator: Story = {
  name: 'with separator',
  render(args) {
    return (
      <Toolbar {...args}>
        <Button design={ButtonDesign.Transparent}>Item1</Button>
        <Button design={ButtonDesign.Transparent}>Item2</Button>
        <Button design={ButtonDesign.Transparent}>Item3</Button>
        <ToolbarSeparator />
        <Button design={ButtonDesign.Transparent}>Item4</Button>
        <Button design={ButtonDesign.Transparent}>Item5</Button>
        <ToolbarSeparator />
        <Button design={ButtonDesign.Transparent}>Item6</Button>
        <ToolbarSeparator />
        <Button design={ButtonDesign.Transparent}>Item7</Button>
      </Toolbar>
    );
  }
};

export const PopoverInOverflowPopover: Story = {
  name: 'Popover in Overflow Popover',
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    const [opener, setOpener] = useState('openMenuBtn');
    const handlePopoverOpenerClick = (e) => {
      setOpener(e.target.id);
      setPopoverIsOpen(true);
    };
    return (
      <>
        <Toolbar {...args} style={{ width: '400px' }}>
          <Text>Toolbar</Text>
          <Button design={ButtonDesign.Transparent}>Button One</Button>
          <Button design={ButtonDesign.Transparent}>Button Two</Button>
          <Button design={ButtonDesign.Transparent} id="openMenuBtn" onClick={handlePopoverOpenerClick}>
            Open Popover (Menu)
          </Button>
        </Toolbar>
        <Menu
          opener={opener}
          open={popoverIsOpen}
          onAfterClose={() => {
            setPopoverIsOpen(false);
          }}
        >
          <MenuItem text="New File" />
          <MenuItem text="New Folder" />
        </Menu>
      </>
    );
  }
};

export const WithOverflowButton: Story = {
  name: 'with overflow button',
  render(args) {
    const [value, setValue] = useState(100);
    const handleInput = (e) => {
      setValue(e.target.value);
    };
    return (
      <>
        <Slider onInput={handleInput} value={value} />
        <Toolbar {...args} style={{ width: `calc(100% * ${value / 100})` }}>
          <Text>Toolbar</Text>
          <Button design={ButtonDesign.Transparent}>Button One</Button>
          <Button design={ButtonDesign.Transparent} icon="accept" />
          <Button design={ButtonDesign.Transparent}>Button Two</Button>
          <Select style={{ width: 'auto' }} />
          <Switch />
          <Button design={ButtonDesign.Transparent}>Button Three</Button>
          <Button design={ButtonDesign.Transparent}>Button Four</Button>
          <OverflowToolbarButton icon={editIcon}>Edit</OverflowToolbarButton>
          <OverflowToolbarToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon}>
            Favorite
          </OverflowToolbarToggleButton>
        </Toolbar>
      </>
    );
  }
};

export const OverflowBtns: Story = {
  name: 'OverflowToolbarButton & OverflowToolbarToggleButton',
  render(args) {
    return (
      <Toolbar {...args} style={{ width: '500px', ...args.style }}>
        <Button design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton
          design={ButtonDesign.Transparent}
          icon={favoriteIcon}
          tooltip="Text only visible in popover"
        >
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
        <Button design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton
          design={ButtonDesign.Transparent}
          icon={favoriteIcon}
          tooltip="Text only visible in popover"
        >
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
      </Toolbar>
    );
  }
};

export const CustomOverflowButton: Story = {
  name: 'with custom overflow button',
  render(args) {
    return (
      <>
        <Toolbar
          {...args}
          style={{ width: '300px', ...args.style }}
          overflowButton={
            <ToggleButton
              icon="menu2"
              design={ButtonDesign.Transparent}
              onClick={() => {
                alert('Custom action');
              }}
            />
          }
        >
          <Input />
          <Text wrapping={false}>Overflow Content</Text>
        </Toolbar>
        <Toolbar
          {...args}
          style={{ width: '300px', ...args.style }}
          overflowButton={
            <ToggleButton
              icon="menu2"
              design={ButtonDesign.Transparent}
              onClick={(e) => {
                e.preventDefault();
                alert('Custom action');
              }}
            />
          }
        >
          <Text wrapping={false}>Opening the popover is prevented</Text>
          <Text wrapping={false}>Overflow Content</Text>
        </Toolbar>
      </>
    );
  }
};

// @ts-expect-error: png's are not typed
import image from '@sb/demoImages/Person.png';
import type { Meta, StoryObj } from '@storybook/react';
import addIcon from '@ui5/webcomponents-icons/dist/add.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import React from 'react';
import { Avatar, Icon, Input, ListItemStandard, ShellBarItem } from '../index';
import { ShellBar } from './index';

const meta = {
  title: 'Layouts & Floorplans / ShellBar',
  component: ShellBar,
  argTypes: {
    children: { control: { disable: true } },
    logo: { control: { disable: true } },
    menuItems: { control: { disable: true } },
    profile: { control: { disable: true } },
    searchField: { control: { disable: true } },
    startButton: { control: { disable: true } }
  },
  args: {
    logo: <img src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />,
    profile: (
      <Avatar>
        <img src={image} />
      </Avatar>
    ),
    menuItems: (
      <>
        <ListItemStandard data-key="1">Menu Item 1</ListItemStandard>
        <ListItemStandard data-key="2">Menu Item 2</ListItemStandard>
        <ListItemStandard data-key="3">Menu Item 3</ListItemStandard>
      </>
    ),
    searchField: <Input showClearIcon icon={<Icon name={searchIcon} />} />,
    notificationsCount: '10',
    primaryTitle: 'Shell Bar',
    secondaryTitle: 'Secondary Title',
    showNotifications: true,
    showProductSwitch: true,
    children: <ShellBarItem count="3" text={'ShellBarItem'} icon={addIcon} />
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof ShellBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

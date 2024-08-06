import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import PopoverVerticalAlign from '@ui5/webcomponents/dist/types/PopoverVerticalAlign.js';
import { useState } from 'react';
import { Button } from '../Button/index.js';
import { List } from '../List/index.js';
import { ListItemStandard } from '../ListItemStandard/index.js';
import { ResponsivePopover } from './index.js';
import '@ui5/webcomponents-icons/dist/settings.js';

const meta = {
  title: 'Modals & Popovers / ResponsivePopover',
  component: ResponsivePopover,
  argTypes: {
    footer: { control: { disable: true } },
    children: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    children: (
      <List>
        <ListItemStandard additionalText="Fruits">Apples</ListItemStandard>
        <ListItemStandard additionalText="Fruits">Bananas</ListItemStandard>
        <ListItemStandard additionalText="Vegetables">Potato</ListItemStandard>
      </List>
    ),
    headerText: 'ResponsivePopover Header',
    horizontalAlign: PopoverHorizontalAlign.Center,
    placement: PopoverPlacement.End,
    verticalAlign: PopoverVerticalAlign.Center,
    opener: 'openPopoverBtn',
    className: 'footerPartNoPadding',
    open: isChromatic
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof ResponsivePopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(args.open);
    return (
      <>
        <Button
          id={'openResponsivePopoverBtn'}
          onClick={() => {
            setResponsivePopoverIsOpen(true);
          }}
        >
          Open Popover
        </Button>
        <ResponsivePopover
          {...args}
          onClose={() => {
            setResponsivePopoverIsOpen(false);
          }}
          opener="openResponsivePopoverBtn"
          open={responsivePopoverIsOpen}
        />
      </>
    );
  }
};

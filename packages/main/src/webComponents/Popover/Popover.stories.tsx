import '@ui5/webcomponents-icons/dist/settings.js';
import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import PopoverVerticalAlign from '@ui5/webcomponents/dist/types/PopoverVerticalAlign.js';
import { useEffect, useState } from 'react';
import { Button } from '../Button/index.js';
import { List } from '../List/index.js';
import { ListItemStandard } from '../ListItemStandard/index.js';
import { Popover } from './index.js';

const meta = {
  title: 'Modals & Popovers / Popover',
  component: Popover,
  argTypes: {
    children: { control: { disable: true } },
    footer: { control: { disable: true } },
    header: { control: { disable: true } },
  },
  args: {
    children: (
      <List>
        <ListItemStandard additionalText="Fruits" text="Apples" />
        <ListItemStandard additionalText="Fruits" text="Bananas" />
        <ListItemStandard additionalText="Vegetables" text="Potato" />
      </List>
    ),
    headerText: 'Popover Header',
    horizontalAlign: PopoverHorizontalAlign.Center,
    placement: PopoverPlacement.End,
    verticalAlign: PopoverVerticalAlign.Center,
    className: 'footerPartNoPadding',
    open: isChromatic,
  },
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <Button
          id={'openPopoverBtn'}
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Popover
        </Button>
        <Popover
          {...args}
          onClose={() => {
            setOpen(false);
          }}
          opener="openPopoverBtn"
          open={open}
        />
      </>
    );
  },
};

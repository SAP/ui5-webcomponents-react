import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import PopoverVerticalAlign from '@ui5/webcomponents/dist/types/PopoverVerticalAlign.js';
import { clsx } from 'clsx';
import { useState } from 'react';
import { Bar } from '../Bar/index.js';
import { Button } from '../Button/index.js';
import { Icon } from '../Icon/index.js';
import { List } from '../List/index.js';
import { ListItemStandard } from '../ListItemStandard/index.js';
import { Title } from '../Title/index.js';
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

export const WithContent: Story = {
  render(args) {
    const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(false);
    const onButtonClick = () => {
      setResponsivePopoverIsOpen(true);
    };
    const handleClose = () => {
      setResponsivePopoverIsOpen(false);
    };
    return (
      <>
        <Button id="respPopoverBtn2" onClick={onButtonClick}>
          Open Responsive Popover
        </Button>
        <ResponsivePopover
          {...args}
          className={clsx('headerPartNoPadding', args.className)}
          opener="respPopoverBtn2"
          open={responsivePopoverIsOpen}
          onClose={handleClose}
          header={
            <Bar endContent={<Icon name="settings" />}>
              <Title>Popover</Title>
            </Bar>
          }
          footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}
        />
      </>
    );
  }
};

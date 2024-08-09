import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { Bar, Button, Icon, List, ListItemStandard, Title } from '../index.js';
import { Dialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / Dialog',
  component: Dialog,
  argTypes: {
    footer: { control: { disable: true } },
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
    headerText: 'Dialog Header',
    open: isChromatic,
    className: 'footerPartNoPadding'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [dialogOpen, setDialogOpen] = useState(args.open);
    useEffect(() => {
      setDialogOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          Open Dialog
        </Button>
        <Dialog
          {...args}
          open={dialogOpen}
          onClose={(e) => {
            args.onClose(e);
            setDialogOpen(false);
          }}
          footer={
            <Bar
              design={BarDesign.Footer}
              endContent={
                <Button
                  onClick={() => {
                    setDialogOpen(false);
                  }}
                >
                  Close
                </Button>
              }
            />
          }
        />
      </>
    );
  }
};

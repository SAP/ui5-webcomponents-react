import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { Bar, Button, Icon, List, ListItemStandard, Title } from '../index.js';
import { Dialog } from './index';

const meta = {
  title: 'Modals & Popovers / Dialog',
  component: Dialog,
  argTypes: {
    footer: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    children: 'Press "Escape" to close the Dialog.',
    headerText: 'Dialog Header',
    open: false,
    className: 'footerPartNoPadding'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Dialog>;

//TODO: check all "modals" for outdated info
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [dialogOpen, setDialogOpen] = useState(isChromatic || args.open);
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

export const WithContent: Story = {
  render: (args) => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const onButtonClick = () => {
      setDialogIsOpen(true);
    };
    const handleClose = () => {
      setDialogIsOpen(false);
    };
    return (
      <>
        <Button onClick={onButtonClick}>Open Dialog</Button>
        <Dialog
          {...args}
          open={dialogIsOpen}
          onClose={handleClose}
          className={clsx('headerPartNoPadding', args.className)}
          header={
            <Bar endContent={<Icon name={settingsIcon} />}>
              <Title>Dialog</Title>
            </Bar>
          }
          footer={<Bar design={BarDesign.Footer} endContent={<Button onClick={handleClose}>Close</Button>} />}
        >
          <List>
            <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
            <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
            <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
          </List>
        </Dialog>
      </>
    );
  }
};

import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import React, { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { BarDesign } from '../../enums';
import { Bar, Button, DialogDomRef, DialogPropTypes, Icon, List, StandardListItem, Title } from '../index.js';
import { Dialog as OriginalDialog } from './index';

const meta = {
  title: 'Modals & Popovers / Dialog',
  component: OriginalDialog,
  argTypes: {
    footer: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    children: 'Press "Escape" to close the Dialog.',
    headerText: 'Dialog Header',
    open: false
  }
} satisfies Meta<typeof OriginalDialog>;

// todo remove once portals are supported inline, or general popovers are supported w/o having to mount them to the body
export const Dialog = forwardRef<DialogDomRef, DialogPropTypes>((args, ref) =>
  createPortal(<OriginalDialog {...args} ref={ref} />, document.body)
);

Dialog.displayName = 'Dialog';

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
          onAfterClose={(e) => {
            args.onAfterClose(e);
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
          header={
            <Bar endContent={<Icon name={settingsIcon} />}>
              <Title>Dialog</Title>
            </Bar>
          }
          footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}
        >
          <List>
            <StandardListItem additionalText="3">List Item 1</StandardListItem>
            <StandardListItem additionalText="2">List Item 2</StandardListItem>
            <StandardListItem additionalText="1">List Item 3</StandardListItem>
          </List>
        </Dialog>
      </>
    );
  }
};

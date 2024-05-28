import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import { clsx } from 'clsx';
import { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { DialogDomRef, DialogPropTypes } from '../index.js';
import { Bar, Button, Icon, List, StandardListItem, Title } from '../index.js';
import { Dialog as OriginalDialog } from './index';

// todo remove once portals are supported inline, or popovers are supported w/o having to mount them to the body
const Dialog = forwardRef<DialogDomRef, DialogPropTypes>((args, ref) =>
  createPortal(<OriginalDialog {...args} ref={ref} />, document.body)
);
Dialog.displayName = 'Dialog';

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
    open: false,
    className: 'footerPartNoPadding'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof OriginalDialog>;

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
          onAfterClose={handleClose}
          className={clsx('headerPartNoPadding', args.className)}
          header={
            <Bar endContent={<Icon name={settingsIcon} />}>
              <Title>Dialog</Title>
            </Bar>
          }
          footer={<Bar design={BarDesign.Footer} endContent={<Button onClick={handleClose}>Close</Button>} />}
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

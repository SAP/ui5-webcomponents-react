import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { MessageBoxAction } from '../../enums/MessageBoxAction';
import { MessageBoxType } from '../../enums/MessageBoxType';
import type { DialogDomRef } from '../../webComponents';
import { Button } from '../../webComponents/Button/index';
import type { MessageBoxPropTypes } from './index.js';
import { MessageBox as OriginalMessageBox } from './index.js';

// todo remove once portals are supported inline, or popovers are supported w/o having to mount them to the body
const MessageBox = forwardRef<DialogDomRef, MessageBoxPropTypes>((args, ref) =>
  createPortal(<OriginalMessageBox {...args} ref={ref} />, document.body)
);
MessageBox.displayName = 'MessageBox';

const meta = {
  title: 'Modals & Popovers / MessageBox',
  component: OriginalMessageBox,
  argTypes: {
    header: {
      control: { disable: true }
    },
    actions: {
      control: { disable: true }
    },
    icon: {
      control: { disable: true }
    }
  },
  args: {
    open: false,
    type: MessageBoxType.Confirm,
    children: 'Press "Escape" to close the MessageBox.'
  },
  parameters: {
    chromatic: { delay: 1000 }
  },
  tags: ['package:@ui5/webcomponents', 'cem-module:Dialog']
} satisfies Meta<typeof OriginalMessageBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const [open, setOpen] = useState(isChromatic || args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (e) => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>
    );
  }
};

export const WithCustomActions: Story = {
  args: {
    actions: [
      MessageBoxAction.OK,
      'Custom Action',
      MessageBoxAction.Cancel,
      <Button key="0" id="custom-action">
        Custom Button
      </Button>
    ]
  },
  render(args) {
    const [open, setOpen] = useState(false);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (e) => {
      if (e.detail.action === 'Custom Action') {
        // do something on "Custom Action" button click
      }
      setOpen(false);
      args.onClose(e);
    };
    return (
      <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>
    );
  }
};

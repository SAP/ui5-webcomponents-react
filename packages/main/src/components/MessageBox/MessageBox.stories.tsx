import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { MessageBoxAction } from '../../enums/MessageBoxAction.js';
import { MessageBoxType } from '../../enums/MessageBoxType.js';
import { Button } from '../../webComponents/Button/index.js';
import { MessageBox } from './index.js';

const meta = {
  title: 'Modals & Popovers / MessageBox',
  component: MessageBox,
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
    open: isChromatic,
    type: MessageBoxType.Confirm,
    children: 'You can close the MessageBox by pressing "Escape" or selecting one of the footer buttons.'
  },
  parameters: {
    chromatic: { delay: 1000 }
  },
  tags: ['package:@ui5/webcomponents', 'cem-module:Dialog']
} satisfies Meta<typeof MessageBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const [open, setOpen] = useState(args.open);
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
    const handleClose = (action, escPressed) => {
      if (action === 'Custom Action') {
        // do something on "Custom Action" button click
      }
      setOpen(false);
      args.onClose(action, escPressed);
    };
    return (
      <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>
    );
  }
};

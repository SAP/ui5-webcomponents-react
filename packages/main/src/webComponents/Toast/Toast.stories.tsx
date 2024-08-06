import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import ToastPlacement from '@ui5/webcomponents/dist/types/ToastPlacement.js';
import { useEffect, useState } from 'react';
import { Button } from '../Button/index.js';
import { Toast } from './index.js';

const meta = {
  title: 'Modals & Popovers / Toast',
  component: Toast,
  args: {
    placement: ToastPlacement.BottomCenter,
    children: 'Toast Text',
    open: isChromatic
  },
  argTypes: {
    children: { control: 'text' }
  },
  parameters: {
    chromatic: { delay: 1000 }
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Toast>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render(args) {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    const showToast = () => {
      setOpen(true);
    };

    const onClose = (e) => {
      setOpen(false);
      args.onClose(e);
    };
    return (
      <div style={{ height: '300px' }}>
        <Toast open={open} duration={args.duration} placement={args.placement} onClose={onClose}>
          {args.children}
        </Toast>
        <Button onClick={showToast}>Show Toast</Button>
      </div>
    );
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button/index.js';
import { BarcodeScannerDialog } from './index.js';

const meta = {
  title: 'Inputs / BarcodeScannerDialog',
  component: BarcodeScannerDialog,
  argTypes: {},
  args: {},
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof BarcodeScannerDialog>;

export default meta;
type Story = StoryObj<typeof meta>;
// TODO: check story for outdated info
export const Default: Story = {
  render(args) {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open BarcodeScannerDialog
        </Button>
        <BarcodeScannerDialog
          {...args}
          open={open}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        />
      </>
    );
  }
};

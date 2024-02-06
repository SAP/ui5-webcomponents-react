import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
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

export const Default: Story = {
  render(args) {
    const ref = useRef(null);
    return (
      <>
        <Button
          onClick={() => {
            ref.current.show();
          }}
        >
          Open BarcodeScannerDialog
        </Button>
        <BarcodeScannerDialog {...args} ref={ref} />
      </>
    );
  }
};

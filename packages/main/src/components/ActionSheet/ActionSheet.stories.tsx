import type { Meta, StoryObj } from '@storybook/react';
import PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import PopoverVerticalAlign from '@ui5/webcomponents/dist/types/PopoverVerticalAlign.js';
import acceptIcon from '@ui5/webcomponents-icons/dist/accept.js';
import declineIcon from '@ui5/webcomponents-icons/dist/decline.js';
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';
import emailIcon from '@ui5/webcomponents-icons/dist/email.js';
import forwardIcon from '@ui5/webcomponents-icons/dist/forward.js';
import { useEffect, useRef, useState } from 'react';
import type { ButtonDomRef } from '../../index.js';
import { Button } from '../../index.js';
import { ActionSheet } from './index.js';

const meta = {
  title: 'Modals & Popovers / ActionSheet',
  component: ActionSheet,
  argTypes: {
    children: {
      control: { disable: true }
    },
    footer: {
      control: { disable: true }
    },
    header: {
      control: { disable: true }
    },
    accessibilityAttributes: { table: { category: 'Accessibility props' } }
  },
  args: {
    horizontalAlign: PopoverHorizontalAlign.Center,
    placement: PopoverPlacement.End,
    verticalAlign: PopoverVerticalAlign.Center,
    open: false
  },
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  tags: ['package:@ui5/webcomponents', 'cem-module:ResponsivePopover']
} satisfies Meta<typeof ActionSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const buttonRef = useRef<ButtonDomRef>(null);
    const [actionSheetOpen, setActionSheetOpen] = useState<boolean | undefined>(args.open);
    useEffect(() => {
      setActionSheetOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          onClick={() => {
            setActionSheetOpen(true);
          }}
          ref={buttonRef}
        >
          Open ActionSheet
        </Button>
        <ActionSheet
          {...args}
          opener={buttonRef.current}
          open={actionSheetOpen}
          onClose={(e) => {
            args.onClose(e);
            setActionSheetOpen(false);
          }}
        >
          <Button icon={acceptIcon}>Accept</Button>
          <Button icon={declineIcon}>Reject</Button>
          <Button icon={emailIcon}>Email</Button>
          <Button icon={forwardIcon}>Forward</Button>
          <Button icon={deleteIcon}>Delete</Button>
          <Button>Other</Button>
        </ActionSheet>
      </>
    );
  }
};

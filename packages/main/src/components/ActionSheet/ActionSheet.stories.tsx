import type { Meta, StoryObj } from '@storybook/react';
import acceptIcon from '@ui5/webcomponents-icons/dist/accept.js';
import declineIcon from '@ui5/webcomponents-icons/dist/decline.js';
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';
import emailIcon from '@ui5/webcomponents-icons/dist/email.js';
import forwardIcon from '@ui5/webcomponents-icons/dist/forward.js';
import React, { useState } from 'react';
import { PopoverHorizontalAlign, PopoverPlacementType, PopoverVerticalAlign } from '../../enums/index.js';
import { Button } from '../../webComponents/index.js';
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
    a11yConfig: { table: { category: 'A11y props' } }
  },
  args: {
    horizontalAlign: PopoverHorizontalAlign.Center,
    placementType: PopoverPlacementType.Right,
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
    const [actionSheetOpen, setActionSheetOpen] = useState<boolean | undefined>(args.open);
    return (
      <>
        <Button
          onClick={() => {
            setActionSheetOpen(true);
          }}
          id={'actionSheetOpener'}
        >
          Open ActionSheet
        </Button>
        <ActionSheet
          {...args}
          opener="actionSheetOpener"
          open={actionSheetOpen}
          onAfterClose={() => {
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

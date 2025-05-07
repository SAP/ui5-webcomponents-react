import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox, FlexBoxJustifyContent } from '@ui5/webcomponents-react';
import { useEffect, useState } from 'react';
import { Button, List, ListItemStandard } from '../index.js';
import { Dialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / Dialog',
  component: Dialog,
  argTypes: {
    footer: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    children: (
      <List>
        <ListItemStandard additionalText="Fruits" text="Apples" />
        <ListItemStandard additionalText="Fruits" text="Bananas" />
        <ListItemStandard additionalText="Vegetables" text="Potato" />
      </List>
    ),
    headerText: 'Dialog Header',
    open: isChromatic
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [dialogOpen, setDialogOpen] = useState(args.open);
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
            <FlexBox justifyContent={FlexBoxJustifyContent.End} fitContainer style={{ paddingBlock: '0.25rem' }}>
              <Button
                onClick={() => {
                  setDialogOpen(false);
                }}
              >
                Close
              </Button>
            </FlexBox>
          }
        />
      </>
    );
  }
};

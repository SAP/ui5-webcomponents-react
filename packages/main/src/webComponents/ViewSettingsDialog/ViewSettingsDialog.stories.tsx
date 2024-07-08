import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Button, FilterItem, FilterItemOption, SortItem } from '../../index';
import { ViewSettingsDialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / ViewSettingsDialog',
  component: ViewSettingsDialog,
  argTypes: {
    filterItems: { control: { disable: true } },
    sortItems: { control: { disable: true } }
  },
  args: {
    filterItems: (
      <>
        <FilterItem
          text="Position"
          values={
            <>
              <FilterItemOption text="CEO" />
              <FilterItemOption text="CTO" />
              <FilterItemOption text="CIO" />
            </>
          }
        />
        <FilterItem
          text="Department"
          values={
            <>
              <FilterItemOption text="Legal" />
              <FilterItemOption text="Finance" />
              <FilterItemOption text="Development" />
            </>
          }
        />
      </>
    ),
    sortItems: (
      <>
        <SortItem text="Name" />
        <SortItem text="Position" />
        <SortItem text="Company" />
        <SortItem text="Department" />
      </>
    )
  },
  parameters: {
    chromatic: { delay: 999 }
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof ViewSettingsDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(isChromatic || args.open);
    useEffect(() => {
      if (!isChromatic) {
        setOpen(args.open);
      }
    }, [args.open, isChromatic]);
    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog
          {...args}
          open={open}
          onClose={(e) => {
            setOpen(false);
            args.onClose(e);
          }}
        />
      </>
    );
  }
};

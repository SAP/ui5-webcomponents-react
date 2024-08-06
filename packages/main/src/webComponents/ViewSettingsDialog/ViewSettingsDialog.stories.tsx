import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button/index.js';
import { FilterItem } from '../FilterItem/index.js';
import { FilterItemOption } from '../FilterItemOption/index.js';
import { SortItem } from '../SortItem/index.js';
import { ViewSettingsDialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / ViewSettingsDialog',
  component: ViewSettingsDialog,
  argTypes: {
    filterItems: { control: { disable: true } },
    sortItems: { control: { disable: true } }
  },
  args: {
    open: isChromatic,
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
    const [open, setOpen] = useState(args.open);
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

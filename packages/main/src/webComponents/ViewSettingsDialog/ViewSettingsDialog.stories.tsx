import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import React, { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button, FilterItem, FilterItemOption, SortItem, ViewSettingsDialogPropTypes } from '../../index';
import { ViewSettingsDialog as OriginalViewSettingsDialog, ViewSettingsDialogDomRef } from './index.js';

const meta = {
  title: 'Modals & Popovers / ViewSettingsDialog',
  component: OriginalViewSettingsDialog,
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
  }
} satisfies Meta<typeof OriginalViewSettingsDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const ViewSettingsDialog = forwardRef<ViewSettingsDialogDomRef, ViewSettingsDialogPropTypes>((args, ref) =>
  createPortal(<OriginalViewSettingsDialog {...args} ref={ref} />, document.body)
);
ViewSettingsDialog.displayName = 'ViewSettingsDialog';

export const Default: Story = {
  render: (args) => {
    const ref = useRef<ViewSettingsDialogDomRef>(null);
    useEffect(() => {
      if (isChromatic) {
        ref.current.show();
      }
    }, []);
    return (
      <>
        <Button
          onClick={() => {
            ref.current.show();
          }}
        >
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog ref={ref} {...args} />
      </>
    );
  }
};

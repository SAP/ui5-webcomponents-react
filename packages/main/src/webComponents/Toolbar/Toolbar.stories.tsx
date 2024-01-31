import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarAlign } from '../../enums/index.js';
import { ToolbarButton } from '../ToolbarButton';
import { ToolbarSelect } from '../ToolbarSelect';
import { ToolbarSelectOption } from '../ToolbarSelectOption';
import { ToolbarSeparator } from '../ToolbarSeparator';
import { ToolbarSpacer } from '../ToolbarSpacer';
import { Toolbar } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / ToolbarV2',
  component: Toolbar,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    alignContent: ToolbarAlign
  }
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Toolbar {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparator />
      <ToolbarSpacer />
      <ToolbarSeparator />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </Toolbar>
  )
};

import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarAlign } from '../../enums/index.js';
import { ToolbarButton } from '../ToolbarButton';
import { ToolbarSelect } from '../ToolbarSelect';
import { ToolbarSelectOption } from '../ToolbarSelectOption';
import { ToolbarSeparatorV2 } from '../ToolbarSeparatorV2';
import { ToolbarSpacerV2 } from '../ToolbarSpacerV2';
import { ToolbarV2 } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / ToolbarV2',
  component: ToolbarV2,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    alignContent: ToolbarAlign
  }
} satisfies Meta<typeof ToolbarV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ToolbarV2 {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparatorV2 />
      <ToolbarSpacerV2 />
      <ToolbarSeparatorV2 />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </ToolbarV2>
  )
};

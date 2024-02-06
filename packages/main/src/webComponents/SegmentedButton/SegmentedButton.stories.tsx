import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedButtonItem } from '../SegmentedButtonItem/index.js';
import { SegmentedButton } from './index.js';

const meta = {
  title: 'Inputs / SegmentedButton',
  component: SegmentedButton,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    children: (
      <>
        <SegmentedButtonItem>Button 1</SegmentedButtonItem>
        <SegmentedButtonItem pressed>Button 2</SegmentedButtonItem>
        <SegmentedButtonItem>Button 3</SegmentedButtonItem>
      </>
    )
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof SegmentedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

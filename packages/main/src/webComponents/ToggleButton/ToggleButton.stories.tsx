import type { Meta, StoryObj } from '@storybook/react';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import { ToggleButton } from './index.js';

const meta = {
  title: 'Inputs / ToggleButton',
  component: ToggleButton,
  argTypes: {
    children: { control: 'text' }
  },
  args: {
    design: ButtonDesign.Default,
    icon: 'employee',
    children: 'ToggleButton Text'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

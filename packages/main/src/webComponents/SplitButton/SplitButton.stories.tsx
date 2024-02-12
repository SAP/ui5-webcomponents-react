import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { ButtonDesign } from '../../enums/index.js';
import { SplitButton } from './index.js';

const meta = {
  title: 'Inputs / SplitButton',
  component: SplitButton,
  argTypes: {
    children: { control: { type: 'text' } }
  },
  args: {
    design: ButtonDesign.Default,
    icon: employeeIcon,
    children: 'SplitButton'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

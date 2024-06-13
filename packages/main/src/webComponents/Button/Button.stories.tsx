import type { Meta, StoryObj } from '@storybook/react';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Button } from './index.js';

const meta = {
  title: 'Inputs / Button',
  component: Button,
  argTypes: {
    children: { control: 'text' }
  },
  args: {
    design: ButtonDesign.Default,
    icon: employeeIcon,
    children: 'Button Text'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

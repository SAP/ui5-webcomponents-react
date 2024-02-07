import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Icon } from './index.js';

const meta = {
  title: 'Data Display / Icon',
  component: Icon,
  argTypes: {},
  args: {
    name: employeeIcon
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

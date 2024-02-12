import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { MessageStripDesign } from '../../enums/MessageStripDesign';
import { Icon } from '../Icon/index.js';
import { MessageStrip } from './index.js';

const meta = {
  title: 'Data Display / MessageStrip',
  component: MessageStrip,
  argTypes: {
    children: { control: 'text' },
    icon: { control: { disable: true } }
  },
  args: {
    design: MessageStripDesign.Information,
    children: 'MessageStrip Text'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof MessageStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <Icon name={employeeIcon} />
  }
};

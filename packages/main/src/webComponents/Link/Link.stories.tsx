import type { Meta, StoryObj } from '@storybook/react';
import { LinkDesign } from '../../enums/LinkDesign';
import { Link } from './index.js';

const meta = {
  title: 'Data Display / Link',
  component: Link,
  argTypes: {
    children: { control: 'text' }
  },
  args: {
    design: LinkDesign.Default,
    children: 'Link Text'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import '@ui5/webcomponents-fiori/dist/illustrations/AllIllustrations.js';
import type { Meta, StoryObj } from '@storybook/react';
import IllustrationMessageType from '@ui5/webcomponents-fiori/dist/types/IllustrationMessageType.js';
import { IllustratedMessage } from './index';

const meta = {
  title: 'User Feedback / IllustratedMessage',
  component: IllustratedMessage,
  args: {
    name: IllustrationMessageType.BeforeSearch
  },
  argTypes: {
    children: { control: false },
    subtitle: { control: false },
    name: {
      control: 'select',
      options: Object.values(IllustrationMessageType)
    }
  }
} satisfies Meta<typeof IllustratedMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import '@ui5/webcomponents-fiori/dist/illustrations/AllIllustrations.js';
import { IllustrationMessageType } from '../../enums/IllustrationMessageType';
import { IllustratedMessage } from './index';

const meta = {
  title: 'User Feedback / IllustratedMessage',
  component: IllustratedMessage,
  args: {
    name: IllustrationMessageType.BeforeSearch
  },
  argTypes: {
    children: { control: { disable: true } }
  }
} satisfies Meta<typeof IllustratedMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react-vite';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { PromptInput } from './index.js';

const meta = {
  title: 'PromptInput',
  component: PromptInput,
  argTypes: {
    children: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    valueState: ValueState.None,
  },
  tags: ['package:@ui5/webcomponents-ai', 'experimental'],
} satisfies Meta<typeof PromptInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { InputType, ValueState } from '../../enums/index.js';
import { Token } from '../Token/index.js';
import { MultiInput } from './index.js';

const meta = {
  title: 'Inputs / MultiInput',
  component: MultiInput,
  argTypes: {
    tokens: { control: { disable: true } },
    children: { control: { disable: true } },
    icon: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    type: InputType.Text,
    valueState: ValueState.None,
    style: { width: '400px' }
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof MultiInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <MultiInput
        {...args}
        tokens={
          <>
            <Token text="Argentina" />
            <Token text="Bulgaria" />
            <Token text="England" />
            <Token text="Finland" />
            <Token text="Germany" />
            <Token text="Hungary" />
            <Token text="Italy" />
            <Token text="Luxembourg" />
            <Token text="Mexico" />
            <Token text="Philippines" />
            <Token text="Sweden" />
            <Token text="USA" />
          </>
        }
      />
    );
  }
};

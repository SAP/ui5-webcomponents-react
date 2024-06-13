import type { Meta, StoryObj } from '@storybook/react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { CheckBox } from './index.js';

const meta = {
  title: 'Inputs / CheckBox',
  component: CheckBox,
  argTypes: {},
  args: {
    valueState: ValueState.None,
    text: 'CheckBox'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CheckBoxStates: Story = {
  name: 'CheckBox States',
  render(args) {
    return (
      <>
        <CheckBox text="Error" valueState={ValueState.Negative} />
        <CheckBox text="Warning" valueState={ValueState.Critical} />
        <CheckBox text="Disabled" disabled checked />
        <CheckBox text="Readonly" readonly checked />
        <CheckBox text="Error disabled" disabled valueState={ValueState.Negative} checked />
        <CheckBox text="Warning disabled " disabled valueState={ValueState.Critical} checked />
        <CheckBox text="Error readonly" readonly valueState={ValueState.Negative} checked />
        <CheckBox text="Warning readonly" readonly valueState={ValueState.Critical} checked />
      </>
    );
  }
};

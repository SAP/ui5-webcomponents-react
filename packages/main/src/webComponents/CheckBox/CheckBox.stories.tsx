import type { Meta, StoryObj } from '@storybook/react';
import { ValueState } from '../../enums/index.js';
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
        <CheckBox text="Error" valueState={ValueState.Error} />
        <CheckBox text="Warning" valueState={ValueState.Warning} />
        <CheckBox text="Disabled" disabled checked />
        <CheckBox text="Readonly" readonly checked />
        <CheckBox text="Error disabled" disabled valueState={ValueState.Error} checked />
        <CheckBox text="Warning disabled " disabled valueState={ValueState.Warning} checked />
        <CheckBox text="Error readonly" readonly valueState={ValueState.Error} checked />
        <CheckBox text="Warning readonly" readonly valueState={ValueState.Warning} checked />
      </>
    );
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from '../../components/FlexBox/index.js';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent, ValueState } from '../../enums/index.js';
import { Label } from '../Label/index.js';
import { RadioButton } from './index.js';

const meta = {
  title: 'Inputs / RadioButton',
  component: RadioButton,
  argTypes: {},
  args: {
    valueState: ValueState.None,
    text: 'RadioButton'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RadioButtonGroups: Story = {
  name: 'RadioButton Groups',
  render() {
    return (
      <FlexBox style={{ width: '600px' }} justifyContent={FlexBoxJustifyContent.SpaceBetween}>
        <FlexBox alignItems={FlexBoxAlignItems.Center} role="radiogroup">
          <Label>Horizontal Group: </Label>
          <RadioButton name="GroupA" text="Option A" />
          <RadioButton name="GroupA" text="Option B" />
          <RadioButton name="GroupA" text="Option C" />
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column} role="radiogroup">
          <Label>Vertical Group: </Label>
          <RadioButton name="GroupB" text="Neutral" valueState={ValueState.None} />
          <RadioButton name="GroupB" text="Warning" valueState={ValueState.Warning} />
          <RadioButton name="GroupB" text="Critical" valueState={ValueState.Error} />
        </FlexBox>
      </FlexBox>
    );
  }
};

export const RadioButtonStates: Story = {
  name: 'RadioButton States',
  render() {
    return (
      <>
        <RadioButton text="Error" valueState={ValueState.Error} />
        <RadioButton text="Warning" valueState={ValueState.Warning} />
        <RadioButton text="Disabled" disabled checked />
        <RadioButton text="Readonly" readonly checked />
        <RadioButton text="Error disabled" disabled valueState={ValueState.Error} checked />
        <RadioButton text="Warning disabled " disabled valueState={ValueState.Warning} checked />
        <RadioButton text="Error readonly" readonly valueState={ValueState.Error} checked />
        <RadioButton text="Warning readonly" readonly valueState={ValueState.Warning} checked />
      </>
    );
  }
};

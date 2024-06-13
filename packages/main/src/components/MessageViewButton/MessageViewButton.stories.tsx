import type { Meta, StoryObj } from '@storybook/react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { FlexBox } from '../FlexBox/index.js';
import { Text } from '../Text/index.js';
import { MessageViewButton } from './index.js';

const meta = {
  title: 'Inputs / MessageViewButton',
  component: MessageViewButton,
  argTypes: {},
  args: {}
} satisfies Meta<typeof MessageViewButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Severities: Story = {
  render() {
    return (
      <>
        <Text>These buttons are ordered by severity, from high to low.</Text>
        <FlexBox style={{ gap: '1rem' }}>
          <MessageViewButton type={ValueState.Negative} />
          <MessageViewButton type={ValueState.Critical} />
          <MessageViewButton type={ValueState.Positive} />
          <MessageViewButton type={ValueState.Information} />
        </FlexBox>
      </>
    );
  }
};

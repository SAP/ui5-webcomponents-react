import type { Meta, StoryObj } from '@storybook/react-vite';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { Text } from '../../webComponents/Text/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { MessageViewButton } from './index.js';

const meta = {
  title: 'Inputs / MessageViewButton',
  component: MessageViewButton,
  argTypes: {},
  args: {},
  tags: ['package:@ui5/webcomponents-react'],
} satisfies Meta<typeof MessageViewButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Severities: Story = {
  render(args) {
    return (
      <>
        <Text>These buttons are ordered by severity, from high to low.</Text>
        <FlexBox style={{ gap: '1rem' }}>
          <MessageViewButton {...args} type={ValueState.Negative} />
          <MessageViewButton {...args} type={ValueState.Critical} />
          <MessageViewButton {...args} type={ValueState.Positive} />
          <MessageViewButton {...args} type={ValueState.Information} />
        </FlexBox>
      </>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ValueState } from '../../enums/ValueState';
import { Button } from '../Button';
import { FileUploader } from './index.js';

const meta = {
  title: 'Inputs / FileUploader',
  component: FileUploader,
  argTypes: {
    children: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    valueState: ValueState.None
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithButton: Story = {
  render(args) {
    return (
      <FileUploader {...args}>
        <Button>Upload single file</Button>
      </FileUploader>
    );
  }
};

export const WithHiddenInput: Story = {
  render(args) {
    return (
      <FileUploader {...args} hideInput>
        <Button>Upload single file</Button>
      </FileUploader>
    );
  }
};

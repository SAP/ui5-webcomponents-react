import type { Meta, StoryObj } from '@storybook/react';
import { ValueState } from '../../enums/index.js';
import { MultiComboBoxGroupItem } from '../MultiComboBoxGroupItem/index.js';
import { MultiComboBoxItem } from '../MultiComboBoxItem/index.js';
import { MultiComboBox } from './index.js';

const meta = {
  title: 'Inputs / MultiComboBox',
  component: MultiComboBox,
  argTypes: {
    children: { control: { disable: true } },
    icon: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    valueState: ValueState.None
  }
} satisfies Meta<typeof MultiComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>
    );
  }
};

export const Grouping: Story = {
  render: (args) => {
    return (
      <MultiComboBox {...args}>
        <MultiComboBoxGroupItem text="Asia"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Afghanistan"></MultiComboBoxItem>
        <MultiComboBoxItem text="China"></MultiComboBoxItem>
        <MultiComboBoxItem text="India"></MultiComboBoxItem>
        <MultiComboBoxItem text="Indonesia"></MultiComboBoxItem>
        <MultiComboBoxGroupItem text="Europe"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Austria"></MultiComboBoxItem>
        <MultiComboBoxItem text="Bulgaria"></MultiComboBoxItem>
        <MultiComboBoxItem text="Germany"></MultiComboBoxItem>
        <MultiComboBoxItem text="Italy"></MultiComboBoxItem>
        <MultiComboBoxGroupItem text="North America"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Canada"></MultiComboBoxItem>
        <MultiComboBoxItem text="Granada"></MultiComboBoxItem>
        <MultiComboBoxItem text="Haiti"></MultiComboBoxItem>
        <MultiComboBoxItem text="United States"></MultiComboBoxItem>
      </MultiComboBox>
    );
  }
};

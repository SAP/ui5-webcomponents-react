import type { Meta, StoryObj } from '@storybook/react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { MultiComboBoxItem } from '../MultiComboBoxItem/index.js';
import { MultiComboBoxItemGroup } from '../MultiComboBoxItemGroup/index.js';
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
  },
  tags: ['package:@ui5/webcomponents']
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
        <MultiComboBoxItemGroup text="Asia">
          <MultiComboBoxItem text="Afghanistan"></MultiComboBoxItem>
          <MultiComboBoxItem text="China"></MultiComboBoxItem>
          <MultiComboBoxItem text="India"></MultiComboBoxItem>
          <MultiComboBoxItem text="Indonesia"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup text="Europe">
          <MultiComboBoxItem text="Austria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Bulgaria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Germany"></MultiComboBoxItem>
          <MultiComboBoxItem text="Italy"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup text="North America">
          <MultiComboBoxItem text="Canada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Granada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Haiti"></MultiComboBoxItem>
          <MultiComboBoxItem text="United States"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
      </MultiComboBox>
    );
  }
};

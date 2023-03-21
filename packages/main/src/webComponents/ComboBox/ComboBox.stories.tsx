import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { useState } from 'react';
import { FlexBox } from '../../components/FlexBox/index.js';
import { FlexBoxDirection, FlexBoxJustifyContent, ValueState } from '../../enums/index.js';
import { ComboBoxItem } from '../ComboBoxItem/index.js';
import { Icon } from '../Icon/index.js';
import { Label } from '../Label/index.js';
import { ComboBox } from './index.js';

const meta = {
  title: 'Inputs / ComboBox',
  component: ComboBox,
  argTypes: {
    children: { control: { disable: true } },
    icon: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    valueState: ValueState.None,
    icon: <Icon name={employeeIcon} />
  }
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(undefined);
    return (
      <ComboBox
        {...args}
        onSelectionChange={(e) => {
          e.preventDefault();
          setSelected(e.detail.item.dataset.id);
        }}
      >
        <ComboBoxItem text="ComboBox Entry 1" data-id="0" selected={selected === '0'} />
        <ComboBoxItem text="ComboBox Entry 2" data-id="1" selected={selected === '1'} />
        <ComboBoxItem text="ComboBox Entry 3" data-id="2" selected={selected === '2'} />
        <ComboBoxItem text="ComboBox Entry 4" data-id="3" selected={selected === '3'} />
        <ComboBoxItem text="ComboBox Entry 4" data-id="4" selected={selected === '4'} />
      </ComboBox>
    );
  }
};

export const FilterTypes: Story = {
  render: () => {
    return (
      <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>StartsWithPerTerm (Default)</Label>
          <ComboBox filter="StartsWithPerTerm">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>StartsWith</Label>
          <ComboBox filter="StartsWith">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>Contains</Label>
          <ComboBox filter="Contains">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
      </FlexBox>
    );
  }
};

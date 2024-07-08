import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import type { Meta, StoryObj } from '@storybook/react';
import InputType from '@ui5/webcomponents/dist/types/InputType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Icon } from '../Icon/index.js';
import { SuggestionItem } from '../SuggestionItem/index.js';
import { SuggestionItemGroup } from '../SuggestionItemGroup/index.js';
import { Input } from './index.js';

const meta = {
  title: 'Inputs / Input',
  component: Input,
  argTypes: {
    children: { control: { disable: true } },
    icon: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    type: InputType.Text,
    valueState: ValueState.None,
    icon: <Icon name={employeeIcon} />
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSuggestionItem: Story = {
  name: 'with SuggestionItem',
  args: {
    showSuggestions: true,
    placeholder: 'type anything to show suggestions',
    icon: null
  },
  render: (args) => {
    return (
      <Input {...args} style={{ width: '400px' }}>
        <SuggestionItemGroup headerText="A Group">
          <SuggestionItem text="United States" additionalText={'USA'} />
          <SuggestionItem text="Bulgaria" />
        </SuggestionItemGroup>
        <SuggestionItemGroup headerText="Another Group Items">
          <SuggestionItem text="Argentina" />
          <SuggestionItem text="Germany" />
          <SuggestionItem text="Iceland" />
          <SuggestionItem text="Moldova" />
        </SuggestionItemGroup>
      </Input>
    );
  }
};

import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import globeIcon from '@ui5/webcomponents-icons/dist/globe.js';
import { InputType, ValueState } from '../../enums/index.js';
import { Icon } from '../Icon/index.js';
import { SuggestionGroupItem } from '../SuggestionGroupItem/index.js';
import { SuggestionItem } from '../SuggestionItem/index.js';
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
        <SuggestionGroupItem text="A Group" />
        <SuggestionItem icon={globeIcon} text="United States" additionalText={'USA'} description={'My Description'} />
        <SuggestionItem icon={globeIcon} text="Bulgaria" iconEnd />
        <SuggestionGroupItem text="Another Group Items" />
        <SuggestionItem icon={globeIcon} text="Argentina" />
        <SuggestionItem icon={globeIcon} text="Germany" />
        <SuggestionItem icon={globeIcon} text="Iceland" />
        <SuggestionItem icon={globeIcon} text="Moldova" />
      </Input>
    );
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import soccerIcon from '@ui5/webcomponents-icons/dist/soccer.js';
import { useState } from 'react';
import { FlexBox } from '../../components/FlexBox';
import { Text } from '../../components/Text';
import { FlexBoxAlignItems, FlexBoxJustifyContent, ValueState } from '../../enums/index.js';
import { Icon } from '../Icon';
import { Option } from '../Option/index.js';
import { SelectMenuOption } from '../SelectMenuOption';
import { SelectMenu } from './CodeGen';
import { Select } from './index.js';

const meta = {
  title: 'Inputs / Select',
  component: Select,
  argTypes: {
    children: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    valueState: ValueState.None
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
        <Option>Option 4</Option>
        <Option>Option 5</Option>
      </Select>
    );
  }
};

export const WithSelectMenu: Story = {
  name: 'with SelectMenu',
  args: { menu: 'selectMenu' },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Select {...args} />
        <SelectMenu id={args.menu}>
          <SelectMenuOption displayText="AR">
            <FlexBox
              alignItems={FlexBoxAlignItems.Center}
              justifyContent={FlexBoxJustifyContent.SpaceBetween}
              style={{ width: '100%' }}
            >
              <Icon name={soccerIcon} />
              <Text>Argentina</Text>
              <Icon name={employeeIcon} />
            </FlexBox>
          </SelectMenuOption>
          <SelectMenuOption displayText="BE">
            <FlexBox
              alignItems={FlexBoxAlignItems.Center}
              justifyContent={FlexBoxJustifyContent.SpaceBetween}
              style={{ width: '100%' }}
            >
              <Icon name={soccerIcon} />
              <Text>Belgium</Text>
              <Icon name={employeeIcon} />
            </FlexBox>
          </SelectMenuOption>
          <SelectMenuOption displayText="BR">
            <FlexBox
              alignItems={FlexBoxAlignItems.Center}
              justifyContent={FlexBoxJustifyContent.SpaceBetween}
              style={{ width: '100%' }}
            >
              <Icon name={soccerIcon} />
              <Text>Brazil</Text>
              <Icon name={employeeIcon} />
            </FlexBox>
          </SelectMenuOption>
        </SelectMenu>
      </>
    );
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import {
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Icon,
  Input,
  Label,
  Title
} from '../..';
import { FlexBox } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / FlexBox',
  component: FlexBox,
  argTypes: {
    as: { control: { disable: true } }
  },
  args: {
    justifyContent: FlexBoxJustifyContent.Start,
    alignItems: FlexBoxAlignItems.Stretch,
    direction: FlexBoxDirection.Row,
    wrap: FlexBoxWrap.NoWrap
  }
} satisfies Meta<typeof FlexBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <FlexBox {...args}>
        <Title>Item 1</Title>
        <Icon name={employeeIcon} title="Item 2" />
        <Label>Item 3</Label>
        <Input placeholder="Item 4" />
        <Label>Item 5</Label>
        <Label>Item 6</Label>
      </FlexBox>
    );
  }
};

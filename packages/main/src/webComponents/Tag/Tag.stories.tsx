import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { FlexBox } from '../../components/FlexBox';
import { FlexBoxWrap } from '../../enums/FlexBoxWrap';
import { Icon } from '../Icon/index.js';
import { Tag } from './index.js';

const meta = {
  title: 'Data Display / Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text' },
    icon: { control: { disable: true } }
  },
  args: {
    children: 'Tag Text',
    icon: <Icon name={employeeIcon} />
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllColors: Story = {
  render(args) {
    return (
      <FlexBox wrap={FlexBoxWrap.Wrap}>
        <Tag colorScheme="1" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "1"
        </Tag>
        <Tag colorScheme="2" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "2"
        </Tag>
        <Tag colorScheme="3" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "3"
        </Tag>
        <Tag colorScheme="4" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "4"
        </Tag>
        <Tag colorScheme="5" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "5"
        </Tag>
        <Tag colorScheme="6" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "6"
        </Tag>
        <Tag colorScheme="7" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "7"
        </Tag>
        <Tag colorScheme="8" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "8"
        </Tag>
        <Tag colorScheme="9" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "9"
        </Tag>
        <Tag colorScheme="10">colorScheme = "10"</Tag>
      </FlexBox>
    );
  }
};

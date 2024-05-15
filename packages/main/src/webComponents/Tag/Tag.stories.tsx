import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { FlexBox } from '../../components/FlexBox';
import { FlexBoxWrap } from '../../enums/FlexBoxWrap';
import { Icon } from '../Icon/index.js';
import { Badge } from './index.js';

const meta = {
  title: 'Data Display / Badge',
  component: Badge,
  argTypes: {
    children: { control: 'text' },
    icon: { control: { disable: true } }
  },
  args: {
    children: 'Badge Text',
    icon: <Icon name={employeeIcon} />
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllColors: Story = {
  render(args) {
    return (
      <FlexBox wrap={FlexBoxWrap.Wrap}>
        <Badge colorScheme="1" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "1"
        </Badge>
        <Badge colorScheme="2" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "2"
        </Badge>
        <Badge colorScheme="3" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "3"
        </Badge>
        <Badge colorScheme="4" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "4"
        </Badge>
        <Badge colorScheme="5" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "5"
        </Badge>
        <Badge colorScheme="6" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "6"
        </Badge>
        <Badge colorScheme="7" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "7"
        </Badge>
        <Badge colorScheme="8" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "8"
        </Badge>
        <Badge colorScheme="9" style={{ marginRight: '10px', marginBottom: '10px' }}>
          colorScheme = "9"
        </Badge>
        <Badge colorScheme="10">colorScheme = "10"</Badge>
      </FlexBox>
    );
  }
};

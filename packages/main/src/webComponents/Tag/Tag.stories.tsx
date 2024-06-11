import type { Meta, StoryObj } from '@storybook/react';
import TagDesign from '@ui5/webcomponents/dist/types/TagDesign.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { FlexBox } from '../../components/FlexBox';
import { Text } from '../../components/Text/index.js';
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
  render() {
    return (
      <FlexBox wrap={FlexBoxWrap.Wrap} style={{ gap: '0.5rem' }}>
        <Text style={{ flexGrow: 1, width: '100%' }}>Value States:</Text>
        {Object.values(TagDesign)
          .filter((item) => !item.startsWith('Set'))
          .map((vs) => (
            <Tag key={vs} design={vs}>
              {vs}
            </Tag>
          ))}
        <Text style={{ flexGrow: 1, width: '100%' }}>Set1:</Text>
        {new Array(10).fill('').map((_, index) => (
          <Tag key={index} design="Set1" colorScheme={`${index + 1}`}>
            colorScheme: "{index + 1}"
          </Tag>
        ))}
        <Text style={{ flexGrow: 1, width: '100%' }}>Set2:</Text>
        {new Array(10).fill('').map((_, index) => (
          <Tag key={index} design="Set2" colorScheme={`${index + 1}`}>
            colorScheme: "{index + 1}"
          </Tag>
        ))}
        <Text style={{ flexGrow: 1, width: '100%' }}>Set2:</Text>
        {new Array(10).fill('').map((_, index) => (
          <Tag key={index} design="Set3" colorScheme={`${index + 1}`}>
            colorScheme: "{index + 1}"
          </Tag>
        ))}
      </FlexBox>
    );
  }
};

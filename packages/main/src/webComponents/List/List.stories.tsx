import type { Meta, StoryObj } from '@storybook/react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { FlexBox } from '../../components/FlexBox';
import { Text } from '../../components/Text';
import { FlexBoxJustifyContent, ListGrowingMode, ListMode, ListSeparators } from '../../enums';
import { CustomListItem } from '../CustomListItem';
import { GroupHeaderListItem } from '../GroupHeaderListItem';
import { ProgressIndicator } from '../ProgressIndicator';
import { StandardListItem } from '../StandardListItem';
import { List } from './index.js';

const meta = {
  title: 'Data Display / List',
  component: List,
  argTypes: {
    children: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    headerText: 'List with StandardListItems',
    mode: ListMode.None,
    separators: ListSeparators.All,
    growing: ListGrowingMode.None
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <List {...args}>
        <StandardListItem additionalText="3">List Item 1</StandardListItem>
        <StandardListItem additionalText="2">List Item 2</StandardListItem>
        <StandardListItem additionalText="1">List Item 3</StandardListItem>
      </List>
    );
  }
};

export const CustomListItemStory: Story = {
  name: 'CustomListItem',
  args: {
    headerText: 'List with a CustomListItem'
  },
  render: (args) => {
    return (
      <List {...args}>
        <CustomListItem>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} style={{ width: '100%' }}>
            <Text style={{ fontWeight: 'bold' }}>FULLY</Text>
            <Text style={{ color: 'red' }}>CUSTOMIZABLE</Text>
            <Text style={{ color: 'white', backgroundColor: ThemingParameters.sapButton_Emphasized_Background }}>
              CHILDREN
            </Text>
          </FlexBox>
        </CustomListItem>
        <CustomListItem>
          <ProgressIndicator value={50} />
        </CustomListItem>
      </List>
    );
  }
};

export const GroupHeaderListItemStory: Story = {
  name: 'GroupHeaderListItem',
  args: {
    headerText: 'List with a GroupHeaderListItem'
  },
  render: (args) => {
    return (
      <List {...args}>
        <GroupHeaderListItem>GroupHeaderListItem 1</GroupHeaderListItem>
        <StandardListItem>List Item</StandardListItem>
        <StandardListItem>List Item</StandardListItem>
        <GroupHeaderListItem>GroupHeaderListItem 2</GroupHeaderListItem>
        <StandardListItem>List Item</StandardListItem>
      </List>
    );
  }
};

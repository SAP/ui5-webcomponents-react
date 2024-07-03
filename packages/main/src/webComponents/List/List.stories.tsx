import type { Meta, StoryObj } from '@storybook/react';
import ListGrowingMode from '@ui5/webcomponents/dist/types/ListGrowingMode.js';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import ListSeparators from '@ui5/webcomponents/dist/types/ListSeparators.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { FlexBox } from '../../components/FlexBox';
import { FlexBoxJustifyContent } from '../../enums';
import { Text } from '../../webComponents/Text';
import { ListItemCustom } from '../ListItemCustom';
import { ListItemGroup } from '../ListItemGroup';
import { ListItemStandard } from '../ListItemStandard';
import { ProgressIndicator } from '../ProgressIndicator';
import { List } from './index.js';

const meta = {
  title: 'Data Display / List',
  component: List,
  argTypes: {
    children: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    headerText: 'List with ListItemStandard',
    selectionMode: ListSelectionMode.None,
    separators: ListSeparators.All,
    growing: ListGrowingMode.None
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof List>;

// TODO: check why subcomponents aren't showing up in table in docs

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <List {...args}>
        <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
        <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
        <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
      </List>
    );
  }
};

export const ListItemCustomStory: Story = {
  name: 'ListItemCustom',
  args: {
    headerText: 'List with a ListItemCustom'
  },
  render: (args) => {
    return (
      <List {...args}>
        <ListItemCustom>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} style={{ width: '100%' }}>
            <Text style={{ fontWeight: 'bold' }}>FULLY</Text>
            <Text style={{ color: 'red' }}>CUSTOMIZABLE</Text>
            <Text style={{ color: 'white', backgroundColor: ThemingParameters.sapButton_Emphasized_Background }}>
              CHILDREN
            </Text>
          </FlexBox>
        </ListItemCustom>
        <ListItemCustom>
          <ProgressIndicator value={50} />
        </ListItemCustom>
      </List>
    );
  }
};

export const ListItemGroupStory: Story = {
  name: 'ListItemGroup',
  args: {
    headerText: 'List with a ListItemGroup'
  },
  render: (args) => {
    return (
      <List {...args}>
        <ListItemGroup headerText="ListItemGroup 1">
          <ListItemStandard>List Item</ListItemStandard>
          <ListItemStandard>List Item</ListItemStandard>
        </ListItemGroup>
        <ListItemGroup headerText="ListItemGroup 2">
          <ListItemStandard>List Item</ListItemStandard>
        </ListItemGroup>
      </List>
    );
  }
};

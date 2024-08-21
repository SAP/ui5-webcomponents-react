import type { Meta, StoryObj } from '@storybook/react';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import { FlexBox, FlexBoxAlignItems } from '../../index.js';
import { Text } from '../../webComponents/Text/index.js';
import { Button } from '../Button/index.js';
import { List } from '../List/index.js';
import { ListItemStandard } from '../ListItemStandard/index.js';
import { Title } from '../Title/index.js';
import { Panel } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Panel',
  component: Panel,
  argTypes: {
    children: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    headerText: 'Panel'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <Panel {...args}>
        <Title level={TitleLevel.H3}>Basic Panel</Title>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </Panel>
    );
  }
};

export const WithCustomHeader: Story = {
  args: {
    collapsed: true,
    header: (
      <FlexBox fitContainer style={{ gap: '0.25rem' }} alignItems={FlexBoxAlignItems.Center}>
        <Title level={TitleLevel.H2}>Countries</Title>
        <span style={{ flexGrow: 1 }} />
        <Button>Edit</Button>
        <Button design={ButtonDesign.Negative}>Remove</Button>
        <Button design={ButtonDesign.Emphasized}>Add</Button>
      </FlexBox>
    )
  },
  render(args) {
    return (
      <Panel {...args}>
        <List>
          <ListItemStandard description="Language: Spanish">Argentina</ListItemStandard>
          <ListItemStandard description="Language: Portuguese">Portugal</ListItemStandard>
          <ListItemStandard description="Language: Spanish">Mexico</ListItemStandard>
          <ListItemStandard description="Language: Portuguese">Brazil</ListItemStandard>
          <ListItemStandard description="Language: German">Germany</ListItemStandard>
          <ListItemStandard description="Language: English">Australia</ListItemStandard>
          <ListItemStandard description="Language: German">Austria</ListItemStandard>
        </List>
      </Panel>
    );
  }
};

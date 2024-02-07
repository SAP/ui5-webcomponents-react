import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/Text/index.js';
import { Toolbar } from '../../components/Toolbar/index.js';
import { ToolbarSpacer } from '../../components/ToolbarSpacer/index.js';
import { ButtonDesign, PanelAccessibleRole, TitleLevel } from '../../enums/index.js';
import { Button } from '../Button/index.js';
import { List } from '../List/index.js';
import { StandardListItem } from '../StandardListItem/index.js';
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
    accessibleRole: PanelAccessibleRole.Form,
    headerLevel: TitleLevel.H2,
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
      <Toolbar>
        <Title level={TitleLevel.H2}>Countries</Title>
        <ToolbarSpacer />
        <Button>Edit</Button>
        <Button design={ButtonDesign.Negative}>Remove</Button>
        <Button design={ButtonDesign.Emphasized}>Add</Button>
      </Toolbar>
    )
  },
  render(args) {
    return (
      <Panel {...args}>
        <List>
          <StandardListItem description="Language: Spanish">Argentina</StandardListItem>
          <StandardListItem description="Language: Portuguese">Portugal</StandardListItem>
          <StandardListItem description="Language: Spanish">Mexico</StandardListItem>
          <StandardListItem description="Language: Portuguese">Brazil</StandardListItem>
          <StandardListItem description="Language: German">Germany</StandardListItem>
          <StandardListItem description="Language: English">Australia</StandardListItem>
          <StandardListItem description="Language: German">Austria</StandardListItem>
        </List>
      </Panel>
    );
  }
};

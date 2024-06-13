import type { Meta, StoryObj } from '@storybook/react';
import BackgroundDesign from '@ui5/webcomponents/dist/types/BackgroundDesign.js';
import TabLayout from '@ui5/webcomponents/dist/types/TabLayout.js';
import activitiesIcon from '@ui5/webcomponents-icons/dist/activities.js';
import addIcon from '@ui5/webcomponents-icons/dist/add.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import menuIcon from '@ui5/webcomponents-icons/dist/menu.js';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import { Tab } from '../Tab/index.js';
import { TabSeparator } from '../TabSeparator/index.js';
import { TabContainer } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / TabContainer',
  component: TabContainer,
  argTypes: {
    children: { control: { disable: true } },
    overflowButton: { control: { disable: true } }
  },
  args: {
    tabLayout: TabLayout.Standard,
    contentBackgroundDesign: BackgroundDesign.Solid,
    headerBackgroundDesign: BackgroundDesign.Solid
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof TabContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
        <Tab text="Tab Three" icon={addIcon}>
          Content Tab 3
        </Tab>
        <Tab text="Tab Four" icon={employeeIcon}>
          Content Tab 4
        </Tab>
        <Tab text="Tab Five" icon={settingsIcon}>
          Content Tab 5
        </Tab>
      </TabContainer>
    );
  }
};

export const WithTabSeparator: Story = {
  name: 'with TabSeparator',
  render: (args) => {
    return (
      <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
      </TabContainer>
    );
  }
};

export const WithNestedTabs: Story = {
  name: 'with nested tabs',
  render: (args) => {
    return (
      <TabContainer {...args}>
        <Tab
          text="Tab One"
          selected
          items={
            <>
              <Tab text="Tab 1.1" />
              <Tab text="Tab 1.2" />
              <Tab text="Tab 1.3" />
            </>
          }
        >
          <div style={{ display: 'none' }} />
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" />
        <Tab
          text="Tab Three"
          items={
            <>
              <Tab text="Tab 3.1" />
              <Tab text="Tab 3.2" />
              <Tab text="Tab 3.3" />
            </>
          }
        />
      </TabContainer>
    );
  }
};

import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import { TabContainerTabsPlacement } from '@ui5/webcomponents-react/lib/TabContainerTabsPlacement';
import { TabLayout } from '@ui5/webcomponents-react/lib/TabLayout';
import { TabSeparator } from '@ui5/webcomponents-react/lib/TabSeparator';
import React from 'react';

export default {
  title: 'UI5 Web Components / TabContainer',
  component: TabContainer,
  parameters: {
    subcomponents: { Tab, TabSeparator }
  },
  argTypes: {
    ...createSelectArgTypes({ tabLayout: TabLayout, tabsPlacement: TabContainerTabsPlacement }),
    children: {
      type: null
    },
    ref: {
      type: null
    }
  },
  args: {
    tabLayout: TabLayout.Standard,
    tabsPlacement: TabContainerTabsPlacement.Top
  }
};

export const generatedDefaultStory = (props) => (
  <TabContainer
    collapsed={props.collapsed}
    fixed={props.fixed}
    showOverflow={props.showOverflow}
    tabLayout={props.tabLayout}
    tabsPlacement={props.tabsPlacement}
    onTabSelect={props.onTabSelect}
  >
    <Tab text="Tab 1">Content Tab 1</Tab>
    <Tab text="Tab 2">Content Tab 2</Tab>
    <Tab text="Tab 3">Content Tab 3</Tab>
  </TabContainer>
);

generatedDefaultStory.storyName = 'Generated default story';

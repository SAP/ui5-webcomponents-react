import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
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
  }
};

export const generatedDefaultStory = () => (
  <TabContainer
    collapsed={boolean('collapsed', false)}
    fixed={boolean('fixed', false)}
    showOverflow={boolean('showOverflow', false)}
    tabLayout={select('tabLayout', TabLayout, TabLayout.Standard)}
    tabsPlacement={select('tabsPlacement', TabContainerTabsPlacement, TabContainerTabsPlacement.Top)}
    onTabSelect={action('onTabSelect')}
  >
    <Tab text="Tab 1">Content Tab 1</Tab>
    <Tab text="Tab 2">Content Tab 2</Tab>
    <Tab text="Tab 3">Content Tab 3</Tab>
  </TabContainer>
);

generatedDefaultStory.storyName = 'Generated default story';

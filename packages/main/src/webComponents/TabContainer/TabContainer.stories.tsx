import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import React from 'react';

export default {
  title: 'UI5 Web Components / TabContainer',
  component: TabContainer
};

export const generatedDefaultStory = () => (
  <TabContainer
    collapsed={boolean('collapsed', false)}
    fixed={boolean('fixed', false)}
    showOverflow={boolean('showOverflow', false)}
    tabLayout={text('tabLayout', 'Standard')}
    onTabSelect={action('onTabSelect')}
  >
    <Tab text="Tab 1">Content Tab 1</Tab>
    <Tab text="Tab 2">Content Tab 2</Tab>
    <Tab text="Tab 3">Content Tab 3</Tab>
  </TabContainer>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};

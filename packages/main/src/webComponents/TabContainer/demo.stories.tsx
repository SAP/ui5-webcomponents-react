import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import '@ui5/webcomponents-icons/dist/icons/add';
import '@ui5/webcomponents-icons/dist/icons/home';
import '@ui5/webcomponents-icons/dist/icons/map';
import '@ui5/webcomponents-icons/dist/icons/process';
import '@ui5/webcomponents-icons/dist/icons/world';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import React from 'react';

export default {
  title: 'UI5 Web Components / TabContainer',
  component: TabContainer,
  parameters: {
    subcomponents: { Tab }
  }
};

export const defaultStory = () => (
  <TabContainer
    fixed={boolean('fixed', false)}
    collapsed={boolean('collapsed', false)}
    showOverflow={boolean('showOverflow', false)}
    onItemSelect={action('onItemSelect')}
  >
    <Tab text="Tab 1" selected>
      <Label>Tab 1 Content</Label>
    </Tab>
    <Tab text="Tab 2">
      <Label>Tab 2 Content</Label>
    </Tab>
    <Tab text="Tab 3">
      <Label>Tab 3 Content</Label>
    </Tab>
    <Tab text="Tab 4">
      <Label>Tab 4 Content</Label>
    </Tab>
    <Tab text="Tab 5">
      <Label>Tab 5 Content</Label>
    </Tab>
  </TabContainer>
);

defaultStory.story = {
  name: 'Default'
};

export const withIcons = () => (
  <TabContainer
    fixed={boolean('fixed', false)}
    collapsed={boolean('collapsed', false)}
    showOverflow={boolean('showOverflow', false)}
    onItemSelect={action('onItemSelect')}
  >
    <Tab text="Tab 1" icon="add">
      <Label>Tab 1 Content</Label>
    </Tab>
    <Tab text="Tab 2" icon="home">
      <Label>Tab 2 Content</Label>
    </Tab>
    <Tab text="Tab 3" icon="map">
      <Label>Tab 3 Content</Label>
    </Tab>
    <Tab text="Tab 4" icon="world">
      <Label>Tab 4 Content</Label>
    </Tab>
    <Tab text="Tab 5" icon="process">
      <Label>Tab 5 Content</Label>
    </Tab>
  </TabContainer>
);

withIcons.story = {
  name: 'with Icons'
};

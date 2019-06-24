import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { propTablesExclude } from '../../../../docs/.storybook/config';
import { Label } from '../../lib/Label';
import { Tab } from '../../lib/Tab';
import { TabContainer } from '../../lib/TabContainer';

storiesOf('UI5 Web Components | TabContainer', module)
  .addParameters({
    info: {
      propTablesExclude: [...propTablesExclude, Label]
    }
  })
  .add('Default', () => (
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
  ))
  .add('with Icons', () => (
    <TabContainer
      fixed={boolean('fixed', false)}
      collapsed={boolean('collapsed', false)}
      showOverflow={boolean('showOverflow', false)}
      onItemSelect={action('onItemSelect')}
    >
      <Tab text="Tab 1" icon="sap-icon://add">
        <Label>Tab 1 Content</Label>
      </Tab>
      <Tab text="Tab 2" icon="sap-icon://home">
        <Label>Tab 2 Content</Label>
      </Tab>
      <Tab text="Tab 3" icon="sap-icon://map">
        <Label>Tab 3 Content</Label>
      </Tab>
      <Tab text="Tab 4" icon="sap-icon://world">
        <Label>Tab 4 Content</Label>
      </Tab>
      <Tab text="Tab 5" icon="sap-icon://process">
        <Label>Tab 5 Content</Label>
      </Tab>
    </TabContainer>
  ));

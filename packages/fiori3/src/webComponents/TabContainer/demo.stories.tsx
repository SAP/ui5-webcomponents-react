import React from 'react';
import { storiesOf } from '@storybook/react';
import { BackgroundDesign } from '@fiori-for-react/core/enums/BackgroundDesign';
import { TabContainerHeaderMode } from '@fiori-for-react/core/enums/TabContainerHeaderMode';
import { boolean, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { TabContainer } from './index';
import { Tab } from '../Tab';
import { Label } from '../Label';
import { propTablesExclude } from '../../../../docs/.storybook/config';

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

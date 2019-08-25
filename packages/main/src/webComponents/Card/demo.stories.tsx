import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { Card } from '../../lib/Card';
import { List } from '../../lib/List';
import { StandardListItem } from '../../lib/StandardListItem';

export default {
  title: 'UI5 Web Components | Card',
  component: Card
};

export const defaultStory = () => (
  <Card
    heading={text('heading', 'My Orders')}
    subtitle={text('subtitle', 'Open')}
    status={text('status', '5 of 22')}
    avatar={text('avatar', 'sap-icon://order-status')}
    headerInteractive={boolean('headerInteractive', false)}
    onHeaderClick={action('onHeaderClick')}
  >
    <List>
      <StandardListItem info="100€">Keyboard</StandardListItem>
      <StandardListItem info="30€">Mouse</StandardListItem>
      <StandardListItem info="299€">Display</StandardListItem>
      <StandardListItem info="999€">Notebook</StandardListItem>
      <StandardListItem info="1499€">Desktop</StandardListItem>
    </List>
  </Card>
);

defaultStory.story = {
  name: 'Default story'
};

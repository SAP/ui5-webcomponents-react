import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { NotificationListGroupItem } from '@ui5/webcomponents-react/lib/NotificationListGroupItem';
import { NotificationOverflowAction } from '@ui5/webcomponents-react/lib/NotificationOverflowAction';
import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import React from 'react';

export default {
  title: 'UI5 Web Components / NotificationListGroupItem',
  component: NotificationListGroupItem,
  parameters: {
    subcomponents: { NotificationOverflowAction }
  }
};

export const generatedDefaultStory = () => (
  <NotificationListGroupItem
    collapsed={boolean('collapsed', false)}
    showCounter={boolean('showCounter', false)}
    busy={boolean('busy', false)}
    heading={text('heading', '')}
    priority={select('priority', Priority, Priority.None)}
    showClose={boolean('showClose', false)}
    selected={boolean('selected', false)}
    actions={null}
    onToggle={action('onToggle')}
    onClose={action('onClose')}
  >
    Some Content
  </NotificationListGroupItem>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};

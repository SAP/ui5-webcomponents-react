import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { NotificationListItem } from '@ui5/webcomponents-react/lib/NotificationListItem';
import { NotificationOverflowAction } from '@ui5/webcomponents-react/lib/NotificationOverflowAction';
import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import React from 'react';

export default {
  title: 'UI5 Web Components / NotificationListItem',
  component: NotificationListItem,
  parameters: {
    subcomponents: { NotificationOverflowAction }
  }
};

export const generatedDefaultStory = () => (
  <NotificationListItem
    read={boolean('read', false)}
    wrap={null}
    busy={boolean('busy', false)}
    heading={text('heading', '')}
    priority={select('priority', Priority, Priority.None)}
    showClose={boolean('showClose', false)}
    selected={boolean('selected', false)}
    avatar={null}
    footnotes={null}
    actions={null}
    onClose={action('onClose')}
  >
    Some Content
  </NotificationListItem>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';
import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';
import React from 'react';

export default {
  title: 'UI5 Web Components / MessageStrip',
  component: MessageStrip
};

export const defaultStory = () => (
  <MessageStrip
    type={select('type', MessageStripType, MessageStripType.Information)}
    icon={text('icon', 'add')}
    noIcon={boolean('noIcon', false)}
    noCloseButton={boolean('noCloseButton', false)}
    onClose={action('onClose')}
  >
    Some Content
  </MessageStrip>
);

defaultStory.story = {
  name: 'Default story'
};

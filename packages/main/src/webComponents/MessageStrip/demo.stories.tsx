import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';
import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';
import notes from './MessageStrip.md';

export default {
  title: 'UI5 Web Components | MessageStrip',
  component: MessageStrip,
  parameters: { notes }
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

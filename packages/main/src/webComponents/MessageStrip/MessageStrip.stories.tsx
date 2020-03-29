import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';
import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';
import React from 'react';

export default {
  title: 'UI5 Web Components / MessageStrip',
  component: MessageStrip
};

export const generatedDefaultStory = () => (
  <MessageStrip
    icon={null}
    noCloseButton={boolean('noCloseButton', false)}
    noIcon={boolean('noIcon', false)}
    type={select('type', MessageStripType, MessageStripType['Information'])}
    onClose={action('onClose')}
  >
    Some Content
  </MessageStrip>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import React from 'react';

export const defaultStory = () => (
  <MessageBox
    type={select('type', Object.values(MessageBoxTypes), MessageBoxTypes.CONFIRM)}
    open={boolean('open', true)}
    onClose={action('onClose')}
    title={text('title', '')}
  >
    Message Box Content
  </MessageBox>
);

defaultStory.story = {
  name: 'Default'
};

export default {
  title: 'Components / MessageBox',
  component: MessageBox
};

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { MessageBox } from '../../lib/MessageBox';
import { MessageBoxTypes } from '../../lib/MessageBoxTypes';

export const defaultStory = () => (
  <MessageBox
    type={select('type', Object.values(MessageBoxTypes), MessageBoxTypes.CONFIRM)}
    visible={boolean('visible', true)}
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
  title: 'Components | MessageBox',
  component: MessageBox
};

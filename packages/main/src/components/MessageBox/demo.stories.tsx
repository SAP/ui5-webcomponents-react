import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import { MessageBoxActions } from '@ui5/webcomponents-react/lib/MessageBoxActions';
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

export const withCustomActions = () => (
  <MessageBox
    type={select('type', Object.values(MessageBoxTypes), MessageBoxTypes.CONFIRM)}
    open={boolean('open', true)}
    onClose={action('onClose')}
    title={text('title', 'A Custom Message Box Title')}
    actions={[MessageBoxActions.OK, 'A custom action', MessageBoxActions.CANCEL]}
  >
    Message Box Content
  </MessageBox>
);

export default {
  title: 'Components / MessageBox',
  component: MessageBox
};

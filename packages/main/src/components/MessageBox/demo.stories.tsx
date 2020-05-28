import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const defaultStory = (props) => (
  <MessageBox type={props.type} open={props.open} onClose={props.onClose} title={props.title}>
    Message Box Content
  </MessageBox>
);

defaultStory.storyName = 'Default';

export default {
  title: 'Components / MessageBox',
  component: MessageBox,
  argTypes: {
    ...createSelectArgTypes({ type: MessageBoxTypes })
  },
  args: {
    open: true,
    type: MessageBoxTypes.CONFIRM
  }
};

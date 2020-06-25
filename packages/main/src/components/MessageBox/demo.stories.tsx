import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import { MessageBoxActions } from '@ui5/webcomponents-react/lib/MessageBoxActions';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const defaultStory = (props) => (
  <MessageBox type={props.type} open={props.open} onClose={props.onClose} title={props.title}>
    Message Box Content
  </MessageBox>
);

defaultStory.storyName = 'Default';

export const withCustomActions = (props) => (
  <MessageBox
    type={props.type}
    open={props.open}
    onClose={props.onClose}
    title={props.title}
    actions={[MessageBoxActions.OK, 'A custom action', MessageBoxActions.CANCEL]}
  >
    Message Box Content
  </MessageBox>
);

withCustomActions.args = {
  title: 'A Custom Message Box Title'
};

export default {
  title: 'Components / MessageBox',
  component: MessageBox,
  argTypes: {
    ...createSelectArgTypes({ type: MessageBoxTypes }),
    ref: {
      type: null
    }
  },
  args: {
    open: true,
    type: MessageBoxTypes.CONFIRM
  }
};

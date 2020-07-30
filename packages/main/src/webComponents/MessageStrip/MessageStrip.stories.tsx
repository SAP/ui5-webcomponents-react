import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';
import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';
import React from 'react';

export default {
  title: 'UI5 Web Components / MessageStrip',
  component: MessageStrip,
  argTypes: {
    ...createSelectArgTypes({ type: MessageStripType }),
    children: {
      type: null
    },
    ref: {
      type: null
    }
  },
  args: {
    type: MessageStripType['Information']
  }
};

export const generatedDefaultStory = (props) => (
  <MessageStrip
    icon={null}
    noCloseButton={props.noCloseButton}
    noIcon={props.noIcon}
    type={props.type}
    onClose={props.onClose}
  >
    Some Content
  </MessageStrip>
);

generatedDefaultStory.storyName = 'Generated default story';

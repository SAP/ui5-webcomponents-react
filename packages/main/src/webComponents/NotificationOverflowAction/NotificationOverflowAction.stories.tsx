import { boolean, select, text } from '@storybook/addon-knobs';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { NotificationOverflowAction } from '@ui5/webcomponents-react/lib/NotificationOverflowAction';
import React from 'react';

export default {
  title: 'UI5 Web Components / NotificationOverflowAction',
  component: NotificationOverflowAction
};

export const generatedDefaultStory = () => (
  <NotificationOverflowAction
    design={select('design', ButtonDesign, ButtonDesign.Transparent)}
    disabled={boolean('disabled', false)}
    icon={text('icon', '')}
    text={text('text', '')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};

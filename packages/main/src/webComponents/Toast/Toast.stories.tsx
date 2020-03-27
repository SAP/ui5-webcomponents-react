import React from 'react';
import { Toast } from '@ui5/webcomponents-react/lib/Toast';

import { number, text } from '@storybook/addon-knobs';
export default {
  title: 'UI5 Web Components / Toast',
  component: Toast
};

export const generatedDefaultStory = () => (
  <Toast duration={number('duration', 3000)} placement={text('placement', 'BottomCenter')}>
    Some Content
  </Toast>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};

import { boolean, text } from '@storybook/addon-knobs';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';

export default {
  title: 'UI5 Web Components / Label',
  component: Label
};

export const generatedDefaultStory = () => (
  <Label
    for={text('for', '')}
    required={boolean('required', false)}
    showColon={boolean('showColon', false)}
    wrap={boolean('wrap', false)}
  >
    Some Content
  </Label>
);

generatedDefaultStory.storyName = 'Generated default story';

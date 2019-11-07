import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { Label } from '@ui5/webcomponents-react/lib/Label';

export default {
  title: 'UI5 Web Components | Label',
  component: Label
};

export const story = () => (
  <Label required={boolean('required', false)} wrap={boolean('wrap', false)} for={text('for', 'generatedString')}>
    {text('children', 'Some Content')}
  </Label>
);
story.story = {
  name: 'Default Story'
};

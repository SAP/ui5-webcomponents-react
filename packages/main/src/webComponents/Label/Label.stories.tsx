import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';

export default {
  title: 'UI5 Web Components / Label',
  component: Label
};

export const generatedDefaultStory = (props) => (
  <Label for={props.for} required={props.required} showColon={props.showColon} wrap={props.wrap}>
    Some Content
  </Label>
);

generatedDefaultStory.storyName = 'Generated default story';

import { Token } from '@ui5/webcomponents-react/lib/Token';
import React from 'react';

export default {
  title: 'UI5 Web Components / Token',
  component: Token,
  argTypes: {
    ref: {
      type: null
    }
  }
};

export const generatedDefaultStory = (props) => (
  <Token selected={props.selected} readonly={props.readonly} onDelete={props.onDelete} onSelect={props.onSelect}>
    Token 1
  </Token>
);

generatedDefaultStory.storyName = 'Generated default story';

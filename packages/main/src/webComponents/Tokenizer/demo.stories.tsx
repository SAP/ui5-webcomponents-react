import { Token } from '@ui5/webcomponents-react/lib/Token';
import { Tokenizer } from '@ui5/webcomponents-react/lib/Tokenizer';
import React from 'react';

export default {
  title: 'UI5 Web Components / Tokenizer',
  component: Tokenizer,
  argTypes: {
    ref: {
      type: null
    }
  }
};

export const defaultStory = (props) => (
  <Tokenizer
    showMore={props.showMore}
    disabled={props.disabled}
    onTokenDelete={props.onTokenDelete}
    onShowMoreItemsPress={props.onShowMoreItemsPress}
  >
    <Token>Token 1</Token>
    <Token>Token 2</Token>
    <Token>Token 3</Token>
  </Tokenizer>
);

defaultStory.storyName = 'Default story';

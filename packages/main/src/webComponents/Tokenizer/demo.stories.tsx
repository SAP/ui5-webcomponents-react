import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { Token } from '@ui5/webcomponents-react/lib/Token';
import { Tokenizer } from './index';

export default {
  title: 'UI5 Web Components | Tokenizer',
  component: Tokenizer
};

export const defaultStory = () => (
  <Tokenizer
    showMore={boolean('showMore', false)}
    disabled={boolean('disabled', false)}
    onTokenDelete={action('onTokenDelete')}
    onShowMoreItemsPress={action('onShowMoreItemsPress')}
  >
    <Token>Token 1</Token>
    <Token>Token 2</Token>
    <Token>Token 3</Token>
  </Tokenizer>
);

defaultStory.story = {
  name: 'Default story'
};

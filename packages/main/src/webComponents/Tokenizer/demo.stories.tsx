import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Token } from '../../lib/Token';
import { Tokenizer } from './index';

storiesOf('UI5 Web Components | Tokenizer', module).add('Default story', () => (
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
));

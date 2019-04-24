import { action } from '@storybook/addon-actions';
import { boolean, object as objectKnob } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tokenizer } from './index';

storiesOf('F4R Components | Tokenizer', module).add('Default', () => (
  <Tokenizer
    items={objectKnob('items', [
      {
        key: '1',
        text: 'Test 1'
      },
      {
        key: '2',
        text: 'Test 2'
      },
      {
        key: '3',
        text: 'Test 3'
      }
    ])}
    onTokenChange={action('onTokenChange')}
    editable={boolean('editable', true)}
  />
));
